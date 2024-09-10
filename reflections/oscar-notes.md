# Oscar Larm Ingenjörsdagbok

### Datum:

- [2024-09-05](#2024-09-05)
- [2024-09-06](#2024-09-06)
- [2024-09-07](#2024-09-07)
- [2024-09-09](#2024-09-09)
- [2024-09-10](#2024-09-10)
---
### 2024-09-05

Vi bestämde oss för att använda Github som git-server. Vi har satt upp ett Github-repo och såg till så att alla testade att använda pull, add, commit och push. Dessa commits hade bara meddelandet "test". Vi gjorde en mapp för planering och en för reflektioner, och där gjorde alla varsin fil för sin "ingenjörsdagbok".

Vi stötte på ett par problem:

1. Generera SSH-Keys. Vi lyckades lösa det genom att läsa igenom Githubs' officiella dokumentation för SSH-Keys.
    - Hur man genererar en ny SSH-key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    - Hur man lägger till den på Github: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. Det andra var att konstant behöva använda sig av pull eftersom vi alla jobbade direkt i main. Vi bestämde oss för att göra en ny "development" branch utifrån main och sen göra "feature/" branches därifrån.

Den delen jag är mest osäker på är containers. Vi kommer att få läsa på om hur man sätter upp containers.

Jag vet inte heller hur det funkar med att skicka data ifrån MenuStore till BurgerOrderer och sen till KitchenView. Kommer att behöva bekanta oss med Java.

---
### 2024-09-06

Ett problem igår var att vi ändrade direkt i main. Som lösning skapade vi en development branch som vi sen mergar in till main. 

Jag ville lägga till ett Github ruleset som krävdes en pull request för att merga in till main, samt att man inte kan lägga till eller ta bort direkt i main. Men det visade sig att man behövde "Github Pro" för att göra rulesets i privata repos.

Men jag har sökt till [Github Education](https://github.com/education), och idag gick det igenom så nu har jag Github Pro och kunde sätta upp rulesets för vårt projekt. Detta borde göra det lättare att hålla projektet strukturerat.

---

### 2024-09-07

Alla i teamet träffades idag för att fortsätta att börja med projektet. Vi gick igenom de "kom igång" delarna som vi kunde göra. Vi gjorde också en preliminär [Koncept-karta](https://lucid.app/lucidspark/82665e6c-353d-4640-8911-0375916c94a2/edit?invitationId=inv_1436d2ed-335f-49f4-a530-d85afad7d546&page=0_0#).

Vi delade upp projektet i olika delar. Webbgränssnittet, databasen och klienten som tar emot beställningar. Vi kommer också att behöva automatisera allt, samt skapa tester och debuggers. Allting måste också använda sig av containers som vi använder Docker för. Sen består varje del utav många mindre delar. Som exempel så kräver webbgränssnittet både HTML och Javascript. Den kommer att behöva hämta data ifrån databasen, samt skicka data till beställnings-klienten. 

Jag sade a tt jag kunde börja att jobba med databasen. Jag vet inte hur det funkar, så jag har sökt lite om databaser och det verkar som att det främst görs i SQL eller noSQL. Övningsuppgifterna gav "MongoDB" som ett noSQL exempel. 
För att lära mig hur jag ska göra så planerar jag att göra övningsuppgifterna, samt söka på google efter dokumentation kring databaser. W3Schools brukar ha bra information kring webbutveckling, så jag ska se ifall de har något om SQL. 
Det kommer att behövas mycket kommunikation för att se till så att datan går att hämta och användas, osv. Detta kommer att göras mycket i person, men också över vår Discord-server.

---
### 2024-09-09

Jag bestämde mig för att använda mySQL, från vad jag hittade online så verkar det som att det kommer att funka bäst för vad vi vill göra. Jag hittar också mer dokumentation om SQL än noSQL. Jag tittade lite på liteSQL också men valde mySQL. Så jag använde mig utav [denna imagen](https://hub.docker.com/_/mysql)och kommandona för att sätta up en mySQL i docker. 
Sedan har jag laddat ner ett program som heter DBVisualizer, eftersom det stod i uppgiften att vi får använda oss av ett grafiskt gränssnitt. 

Det var problem med att pinga och ansluta till containern. Jag fick felmeddelandet att det inte hittade något på localhost och porten. Så jag testade först att gå in i docker imagen och gå in på inspect, sedan kopiera adressen som stod där, men det funkade inte. Sedan sökte jag på hur man ställer in adressen, och gjorde om docker run med --network="host", men det funkade inte heller. Då letade jag upp hur man sätter porten och då funkade det, när jag gav -p "portar". 

Så nu kunde jag komma in och se det i DBVisualizer, så jag gjorde en ny databas som heter "MenuStore".

---
### 2024-09-10

Idag ska jag kolla upp hör jag kan göra en docker compose fil. Jag har också ändrat mig och bestämmt mig för att använda en unstructured (noSQL) server istället. Tror det blir lättare när olika föremål på menyn kommer att ha olika sorters data. 
Jag ska testa MongoDB, eftersom det är vad som användes under övningsuppgifterna. Jag hittade också en officiell [MongoDB Image](https://hub.docker.com/_/mongo).

Vi ska testa att använda oss av Node.js Express, för att skapa API. 

Jag ska ta och ladda ner "Postman" också för att kunna testa så att det går att komma åt API:n, innan vi börjar försöka få det att gå till webbgränssnittet. Det kommer göra det enklare att testa direkt medans jag håller på att sätta upp det, utan att behöva merga in det hela tiden.

"makefile" verkar intressant och som att det hade funkat för att automatisera programmet. Det används i [övningsuppgiften](https://codeberg.org/mickesv/PonyVoter.git) för att sätta upp miljön.

Jag har gjort en docker-compose fil för MenuStore databasen. Jag testar att köra den tom, för att se ifall compose filen funkar.
Det verkar funka, jag har en image med MongoDB på, och en container som heter menustore.
Jag dubbelkollade att containern är uppe med "DBVisualizer". Det funkade inte första försöket. Tittade docker-compose så att det stämde. Verkar som det var problem med portarna, så jag sökte upp vilken port som är default, och satte dem istället. Detta funkade.

Jag gjorde sen en json fil där jag skriver in datan, som jag sedan använder som en "volym" i docker-compose.
Det verkar funka, jag kan se att 2 volymer skapas när jag kör docker compose, och går jag in på filer på containern så ser jag .json filen med datan.

Jag hittade info om .json på [MDN web docs.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

Jag har listat datan som t.ex "burgers":["burger 1", "etc", "etc"], men jag vet inte hur jag kan göra "menyer" med en samling av data, eller hur jag ger t.ex. "burger1" sin egna array med ingredienser. Jag såg på [MDN web docs.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) att du kan strukturera datan mer som ett objekt. Jag ska kolla på detta imorgon.

---

