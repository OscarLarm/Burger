# Oscar Larm Ingenjörsdagbok

### Datum:
- [2024-09-05](#2024-09-05)
- [2024-09-06](#2024-09-06)

---

### 2024-09-05
Vi bestämde oss för att använda Github som git-server. Vi har satt upp ett Github-repo och såg till så att alla testade att använda pull, add, commit och push. Vi gjorde en mapp för planering och en för reflektioner, och där gjorde alla varsin fil för sin "ingenjörsdagbok".

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