### Saker jag måste tänka på att ha med i min dagbok ###

### Datum: 
- [2024-09-05](#2024-09-05)
- [2024-09-06](#2024-09-06)
- [2024-09-07](#2024-09-07)
- [2024-09-10](#2024-09-10)
- [2024-09-16](#2024-09-16)
- [2024-09-17](#2024-09-17)
- [2024-09-18](#2024-09-18)
- [2024-09-19](#2024-09-19)
- [2024-09-19](#2024-09-19)
- [2024-09-25](#2024-09-25)
- [2024-10-05](#2024-10-05)
- [2024-10-06](#2024-10-06)

### Bra saker att komma ihåg medans man skriver ###
Det här är er Ingenjörsdagbok 
Vilka git-kommandon använder ni? Vad gör de? 
Vilka svårigheter stöter ni på? Hur löser ni dem? 
Finns det något som ni inte vet hur man gör? Hur kan ni ta reda på det? 

### Dagboken ###
### 2024-09-05 ###
Vi familjerade oss med att använda git samt github och listade ut hur man ska båda ladda upp och ladda ner delar och projektet.
[Länk till vårat projekt](https://github.com/oscar-larm/Burger).
Där vi skapade <MAIN> Branche.

- Vi skapade SSH-Keys. Vi lyckades lösa det genom att läsa igenom Githubs' officiella dokumentation för SSH-Keys.
- Hur man genererar en ny SSH-key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- Hur man lägger till den på Github: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

vi stötte på ett prblem med Push/Pull efetr som att vi alla höll på samtidigt på samma Branche
Vi skapade där med en <Developer> Branche seddan göra "feature" branches där ifrån.

### 2024-09-06 ###

Jag skapade4 samt kommitade 3.3-4.3-5.4 Sammanfatta och Reflekterra.txt villket är text filer vi kan använda för att senare i projketet skriva våran Sammanfattning av projektet och reflectera om vad vi hade kunn at göra anorlunda eller bättre.

### 2024-09-07 ###
Vi satte oss och gjorde en grud struktur av vad som ska finnas på menyn villka produkter som ska ''säljas''. Vi gick även laget runt och försäkrade oss att alla visste hur man commitade och tog hem filer från github.
- Oscar Skapade en Branche för att starta med databasen.
[Länk till oskars Branche](https://github.com/oscar-larm/Burger/tree/database)

- Moltas skapade en Branche flr att börja med hemsidan (HTML samt CSS).
[Länk till Moltas Branche](https://github.com/oscar-larm/Burger/tree/Moltas)

### 2024-09-10 ###
- Gabriel skapde en Branche för att kunna kommita saker han har gjort från dockern.
[Länk till Gabriels Branche](https://github.com/oscar-larm/Burger/tree/G_branch)

### 2024-09-16 ###
Nu har vi gjort klart och commitat hemsidan samt docker och databasen är kdet dags för mig att läsa på HTML CSS samt JS för att göra hemsidan interaktiv för Kitchenview.
saker jag måste lära mig hur man gör.
- skapa llättare HTML sida
-komplitmentera med CSS för att göra så det blir lite snyggare iallafall

- Hur jag skirver JS för att hämta informasion från andra filler i data basen.
- Hur jag skirver JS för att göra så när jag trycker på en knapp på hemsidan så händer det faktiskt något tillexemple tar bort en order när maten är klar.

### 2024-09-17 ###
Jag gjorde en Branche som jag kan commita min JS file till senare 
[Länk till min Branche](https://github.com/oscar-larm/Burger/tree/Malte's)


### 2024-09-18 ### 
Föreläsningen: 
onödigt att skriva ändingar i koden i denna boken eftersom det redan står i commiten
skriv 

Det är bättre att döpa variabler som är utalbara samt som är tab bara genom att ha det mest unika i namnen först

Man behöver inte spara kod i filerna som inte använda eller inte funkar om det någon gång har varit en commit på just den koden så finns det kvar i kommit historiken.
sämre 
if (200 == x ) {}
bättre 
if (STATUS_OK == returnStatus) {}
den andra är mer informativ. 

Villka är dom senaste varsionerna av programvaran som man använder till projektet där allt fortfrande funkade är väldigt viktigt att ha med i någon fill i varje kommit 

jag måste ladda ner något som gör det möjligt att öppna HTML filerna via vs code , jag valde att använda <Open in browser> Extensionen via vs code.


### vad är det vi vill at JS ska göra på hemsidan.
- Hämta informasion från databassfilerna
- Sicka utput till kitchen view


### 2024-09-19 ###
Jag började dagen med att köra git pull i teminalen med hoppet att det skulle fixa en map som jag hade problem med att få ner igår, efter att vi hade gått in och tagit bort en av dom så funkade det för mig.
jag TROR  att problemet var 

vi hade en map som hette MenuStore och en som hette menuStore jag har en hypotes att git inte kunde anskilja från dessa och blev förvirad jag skulle säga även om det inte va avsikligt att det skulle hetta något som va likt är att man tänker på at det ska vara mer olika namn på både filler och mappar.

jag började med att skapa två filer <kitchenview.html> och <Kitchenview.css>
sedan två andra filler <informaison.html> och <informasion.css> 

Jag la sedan dessa i respektive ´mappar så att dom är lätta att hitta

NOTE TO SELF: jag vill göra en hemsida som är väldigt enkel som bara vissar up ordern from burgerval hemsidan samt har en knapp som tar bort när ordern är klar.

nu när jag börjar min del av projektet så är det dags att böja med HTML och CSS för att bygga dessa 2 sidor.

börja med att lära mig strukturen på HTML använde mig bland annat av [HTML](https://www.hostinger.in/tutorials/making-website-with-html)

extension <live server>

### 2024-09-25 ###
we all sat down today and tried to push everything we have done indeviduly. We are now trying to connect everything re-group and looking at that the next step in development will be, if we have followed the general time line our plan was to do this te 26th but we had timetoday and it saves time becuse we all feelt like we were pretty done with our projekts.

its all suppoed to work before 1 october.
so now we need to decide who needs to do what in the upcoming week

### 2024-10-05 ###
we meet today again after a few days to see were everyone is at i implimented my docker file in to the program to make sure it works while 2 of the others tried to get a overview of the projekt and make sure that everything works as planned.

We have everythin gup and running at this point of the projekt everything works as planned 

now we only need to do the rearengeing the files to make a better structure of the file system so its not as confusing and esier to navigate.

### 2024-10-06 ### 
Today i fixed the file system with help of 2 others in the groupp and made sure that it was easier to navigate and put some unused files to a specific map so we still have them if needed but they dont clutter and confuse the projekt itself.

today we are gonna spend time to document all the files and make a descripsion on how to start the projekt from a docker compose file.

we noticed that Gabe's commits was under another name tho to some local problems he had so Gabriel- and Gabe-Hog is the same user.

i changed the 3.3/4.3/5.3 to an md and made the structure of it so its esier for us all to sit down later and write the text and hopefully it goes faster.


### 2024-09-27 ###

starting to really dig deep in to rest api 

### 2024-00-00 ###
WRITE THE REST IN ENGLSH 

### 2024-09-12 ###
Idag satt vi och gjorde upp en deadline på datum när olika delar av projektet:
- **26 september**
    - Alla delar ska vara klara och sättas ihop.
- **1 oktober**
    - Implementation.
- **5 oktober**
    - Sista debuggningen.
- **11 oktober**
    - Sammanfattning och reflektering.
- **18 oktober**
    - Inlämning.

