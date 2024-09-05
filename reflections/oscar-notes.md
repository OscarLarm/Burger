# Oscar Larm Ingenjörsdagbok

### Datum:
[05-09-24](#05-09-24)

---

### 05-09-24
Vi bestämde oss för att använda Github som git-server. Vi har satt upp ett Github-repo och såg till så att alla testade att använda pull, add, commit och push. Vi gjorde en mapp för planering och en för reflektioner, och där gjorde alla varsin fil för sin "ingenjörsdagbok".

Vi stötte på ett par problem:
1. Generera SSH-Keys. Vi lyckades lösa det genom att läsa igenom Githubs' officiella dokumentation för SSH-Keys.
	- Hur man genererar en ny SSH-key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
	- Hur man lägger till den på Github: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. Det andra var att konstant behöva använda sig av pull eftersom vi alla jobbade direkt i main. Vi bestämde oss för att göra en ny "development" branch utifrån main och sen göra "feature/" branches därifrån.

Den delen jag är mest osäker på är containers. Vi kommer att få läsa på om hur man sätter upp containers. 

Jag vet inte heller hur det funkar med att skicka data ifrån MenuStore till BurgerOrderer och sen till KitchenView. Kommer att behöva bekanta oss med Java.

---

