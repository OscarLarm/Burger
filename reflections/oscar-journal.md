# Oscar Larm Engineer's Journal

> [!NOTE]
> The entries for 2024-09-05 until 2024-09-12 was originally written in Swedish by me, then translated with the ChatGPT AI. Everything after 2024-09-12 was written in English originally by me.

## Entries
- [2024-09-05 (Swedish)](#2024-09-05-swedish)
    - [English (AI-Translation)](#2024-09-05-ai-translated) 
- [2024-09-06 (Swedish)](#2024-09-06-swedish)
    - [English (AI-Translation)](#2024-09-06-ai-translated)
- [2024-09-07 (Swedish)](#2024-09-07-swedish)
    - [English (AI-Translation)](#2024-09-07-ai-translated)
- [2024-09-09 (Swedish)](#2024-09-09-swedish)
    - [English (AI-Translation)](#2024-09-09-ai-translated)
- [2024-09-10 (Swedish)](#2024-09-10-swedish)
    - [English (AI-Translation)](#2024-09-10-ai-translated)
- [2024-09-11 (Swedish)](#2024-09-11-swedish)
    - [English (AI-Translation)](#2024-09-11-ai-translated)
- [2024-09-12 (Swedish)](#2024-09-12-swedish)
    - [English (AI-Translation)](#2024-09-12-ai-translated)
- [2024-09-18](#2024-09-18)
- [2024-09-19](#2024-09-19)
- [2024-09-20](#2024-09-20)
- [2024-09-25](#2024-09-25)
- [2024-09-26](#2024-09-26)
- [2024-09-27](#2024-09-27)
- [2024-09-29](#2024-09-29)
---

### 2024-09-05 (Swedish)

Vi bestämde oss för att använda Github som git-server. Vi har satt upp ett Github-repo och såg till så att alla testade att använda pull, add, commit och push. Dessa commits hade bara meddelandet "test". Vi gjorde en mapp för planering och en för reflektioner, och där gjorde alla varsin fil för sin "ingenjörsdagbok".

Vi stötte på ett par problem:

1. Generera SSH-Keys. Vi lyckades lösa det genom att läsa igenom Githubs' officiella dokumentation för SSH-Keys.
    - Hur man genererar en ny SSH-key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    - Hur man lägger till den på Github: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. Det andra var att konstant behöva använda sig av pull eftersom vi alla jobbade direkt i main. Vi bestämde oss för att göra en ny "development" branch utifrån main och sen göra "feature/" branches därifrån.

Den delen jag är mest osäker på är containers. Vi kommer att få läsa på om hur man sätter upp containers.

Jag vet inte heller hur det funkar med att skicka data ifrån MenuStore till BurgerOrderer och sen till KitchenView. Kommer att behöva bekanta oss med Java.

### 2024-09-05 (AI-Translated)

We decided to use GitHub as the Git server. We set up a GitHub repo and made sure everyone tested using pull, add, commit, and push. These commits only had the message "test." We created a folder for planning and one for reflections, and everyone made their own file for their "engineering diary."

We encountered a couple of problems:

1. Generating SSH Keys. We managed to solve it by reading through GitHub’s official documentation for SSH Keys.
    - How to generate a new SSH key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
    - How to add it to GitHub: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

2. The second problem was constantly having to use pull since we were all working directly in the main branch. We decided to create a new "development" branch from main and then make "feature/" branches from there.
The part I’m most unsure about is containers. We will have to read up on how to set up containers.

I also don’t know how it works with sending data from MenuStore to BurgerOrderer and then to KitchenView. We’ll need to familiarize ourselves with Java.

---
### 2024-09-06 (Swedish)

Ett problem igår var att vi ändrade direkt i main. Som lösning skapade vi en development branch som vi sen mergar in till main. 

Jag ville lägga till ett Github ruleset som krävdes en pull request för att merga in till main, samt att man inte kan lägga till eller ta bort direkt i main. Men det visade sig att man behövde "Github Pro" för att göra rulesets i privata repos.

Men jag har sökt till [Github Education](https://github.com/education), och idag gick det igenom så nu har jag Github Pro och kunde sätta upp rulesets för vårt projekt. Detta borde göra det lättare att hålla projektet strukturerat.

### 2024-09-06 (AI-Translated)

A problem yesterday was that we made changes directly in main. As a solution, we created a development branch, which we then merge into main.

I wanted to add a GitHub ruleset that required a pull request to merge into main, and that would prevent adding or removing directly in main. But it turned out that you need "GitHub Pro" to create rulesets in private repos.

However, I applied for [Github Education](https://github.com/education), and today it went through, so now I have GitHub Pro and was able to set up rulesets for our project. This should make it easier to keep the project organized.

---
### 2024-09-07 (Swedish)

Alla i teamet träffades idag för att fortsätta att börja med projektet. Vi gick igenom de "kom igång" delarna som vi kunde göra. Vi gjorde också en preliminär [Koncept-karta](https://lucid.app/lucidspark/82665e6c-353d-4640-8911-0375916c94a2/edit?invitationId=inv_1436d2ed-335f-49f4-a530-d85afad7d546&page=0_0#).

Vi delade upp projektet i olika delar. Webbgränssnittet, databasen och klienten som tar emot beställningar. Vi kommer också att behöva automatisera allt, samt skapa tester och debuggers. Allting måste också använda sig av containers som vi använder Docker för. Sen består varje del utav många mindre delar. Som exempel så kräver webbgränssnittet både HTML och Javascript. Den kommer att behöva hämta data ifrån databasen, samt skicka data till beställnings-klienten. 

Jag sade att jag kunde börja att jobba med databasen. Jag vet inte hur det funkar, så jag har sökt lite om databaser och det verkar som att det främst görs i SQL eller noSQL. Övningsuppgifterna gav "MongoDB" som ett noSQL exempel. 
För att lära mig hur jag ska göra så planerar jag att göra övningsuppgifterna, samt söka på google efter dokumentation kring databaser. W3Schools brukar ha bra information kring webbutveckling, så jag ska se ifall de har något om SQL. 
Det kommer att behövas mycket kommunikation för att se till så att datan går att hämta och användas, osv. Detta kommer att göras mycket i person, men också över vår Discord-server.

### 2024-09-07 (AI-Translated)

Everyone in the team met today to continue working on the project. We went through the "getting started" parts that we could do. We also made a preliminary [Koncept Map](https://lucid.app/lucidspark/82665e6c-353d-4640-8911-0375916c94a2/edit?invitationId=inv_1436d2ed-335f-49f4-a530-d85afad7d546&page=0_0#).

We divided the project into different parts: the web interface, the database, and the client that receives orders. We will also need to automate everything, as well as create tests and debuggers. Everything also has to use containers, for which we are using Docker. Then each part consists of many smaller parts. For example, the web interface requires both HTML and JavaScript. It will need to fetch data from the database and send data to the ordering client.

I said I could start working on the database. I don’t know how it works, so I’ve researched a bit about databases, and it seems that they are mainly done in SQL or NoSQL. The practice exercises gave "MongoDB" as a NoSQL example.
To learn how to do this, I plan to do the practice exercises and search on Google for documentation about databases. W3Schools usually has good information on web development, so I’ll see if they have anything on SQL.
There will need to be a lot of communication to ensure the data can be fetched and used, etc. This will mostly be done in person but also over our Discord server.


---
### 2024-09-09 (Swedish)

Jag bestämde mig för att använda mySQL, från vad jag hittade online så verkar det som att det kommer att funka bäst för vad vi vill göra. Jag hittar också mer dokumentation om SQL än noSQL. Jag tittade lite på liteSQL också men valde mySQL. Så jag använde mig utav [denna imagen](https://hub.docker.com/_/mysql)och kommandona för att sätta up en mySQL i docker. 
Sedan har jag laddat ner ett program som heter DBVisualizer, eftersom det stod i uppgiften att vi får använda oss av ett grafiskt gränssnitt. 

Det var problem med att pinga och ansluta till containern. Jag fick felmeddelandet att det inte hittade något på localhost och porten. Så jag testade först att gå in i docker imagen och gå in på inspect, sedan kopiera adressen som stod där, men det funkade inte. Sedan sökte jag på hur man ställer in adressen, och gjorde om docker run med --network="host", men det funkade inte heller. Då letade jag upp hur man sätter porten och då funkade det, när jag gav -p "portar". 

Så nu kunde jag komma in och se det i DBVisualizer, så jag gjorde en ny databas som heter "MenuStore".

### 2024-09-09 (AI-Translated)

I decided to use MySQL, based on what I found online, it seems like it will work best for what we want to do. I also found more documentation on SQL than NoSQL. I also looked at LiteSQL but chose MySQL. So I used [this image](https://hub.docker.com/_/mysql) and the commands to set up a MySQL in Docker.
Then I downloaded a program called DBVisualizer since it was stated in the assignment that we are allowed to use a graphical interface.

There was a problem with pinging and connecting to the container. I got the error message that nothing was found on localhost and the port. So I first tried going into the Docker image and using inspect, then copying the address listed there, but that didn’t work. Then I searched for how to set the address, and I redid the Docker run with --network="host", but that didn’t work either. Then I looked up how to set the port, and when I gave the "-p" ports, it worked.

So now I was able to get in and see it in DBVisualizer, and I created a new database called "MenuStore."

---
### 2024-09-10 (Swedish)

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

### 2024-09-10 (AI-Translated)

Today I’m going to look up how I can create a Docker Compose file. I’ve also changed my mind and decided to use an unstructured (NoSQL) server instead. I think it will be easier since different items on the menu will have different types of data.
I’m going to try MongoDB since that’s what was used in the practice exercises. I also found an official [MongoDB Image](https://hub.docker.com/_/mongo).

We’re going to test using Node.js Express to create the API.

I’ll download "Postman" as well to test if the API is accessible before we try to connect it to the web interface. It will make it easier to test directly while I’m setting it up, without having to merge everything all the time.

"Makefile" seems interesting and like it would work for automating the program. It was used in the [practice exercise](https://codeberg.org/mickesv/PonyVoter.git) to set up the environment.

I’ve created a Docker Compose file for the MenuStore database. I’m testing it empty to see if the Compose file works.
It seems to work, I have an image with MongoDB and a container named menustore.
I double-checked that the container is running using "DBVisualizer." It didn’t work the first time. I checked the Docker Compose to see if everything matched. It seems there was an issue with the ports, so I looked up which port is the default and set them instead. This worked.

I then created a JSON file where I enter the data, which I then use as a "volume" in Docker Compose.
It seems to work, I can see that two volumes are created when I run Docker Compose, and when I check the files in the container, I can see the .json file with the data.

I found info about .json on [MDN web docs.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).

I’ve listed the data, for example, as "burgers":["burger 1", "etc", "etc"], but I don’t know how to create "menus" with a collection of data, or how to give "burger1" its own array with ingredients. I saw on [MDN web docs.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) that you can structure the data more like an object. I’ll look into this tomorrow.


---
### 2024-09-11 (Swedish)

Vi måste få upp ett API, ska testa igenom express. Jag vill testa så att det går att komma åt databasen, innan jag lägger till mer saker. Ska leta runt lite efter verktyg som kan automatisera debugging.

Jag lade till node och express till projektet. Jag råkade pusha upp det med "node_modules" mappen, så jag gjorde en till push med en .gitignore. Jag trodde jag skulle lägga till package-lock.json till .gitignore också men verkar som de rekommenderar att ha med den för att få med rätt information om versioner.

För att få in .json datan in i MongoDB som en databas så kommer jag behöva använda mongo-tools som dem går igenom på MongoDB [officiella sida.](https://www.mongodb.com/resources/languages/json-to-mongodb)

Jag öppnade dockerns terminal och försökte importera .json filen till databasen med "mongoimport", men fick ett fel med formateringen. Får testa att skriva om formateringen för datan. [Här hittar jag information om strukturen](https://www.mongodb.com/resources/basics/json-and-bson).

Docker compose fungerar, men har problem med att importera datan i databasen. Försöker läsa runt. Jag har testat att köra kommandot i makefile och i "command" direkt i docker compose filen.

Jag har lyckats lösa det igenom att köra ett shell script som en volym. Allt som läggs i "/docker-entrypoint-initdb.d/" körs automatiskt när containern är startad, så jag gjorde ett shell script som bara kör mongoimport. Jag verifierade att det funkade genom att gå in i terminalen i docker (exec) från docker desktop. Där startade jag mongoshell genom att skriva "mongosh", sedan lista alla databasar genom "show dbs", sen gå in i databasen jag skapade som heter MenuStore med "use MenuStore", sedan tittar jag vilka collections den har. Jag skapade en som heter FoodItems, och jag kan se den där. Sen använde jag "db.FoodItems.find()" för att få tillbaka all data från databasens collection, vilket stämmer.

Denna lösning känns som att den kommer att behöva förbättras, men den funkar för tillfället när vi behöver testa så att vi kan hämta data riktigt.

Nästa steg är att sätta upp Express så att vi kan hämta datan igenom REST-API.

### 2024-09-11 (AI-Translated)

We need to get an API up and running, so I’m going to test with Express. I want to test if the database is accessible before adding more things. I’ll also look around for tools that can automate debugging.

I added Node and Express to the project. I accidentally pushed it with the "node_modules" folder, so I made another push with a .gitignore. I thought I should add package-lock.json to .gitignore as well, but it seems they recommend keeping it to ensure the correct version information is included.

To import the .json data into MongoDB as a database, I will need to use Mongo tools, as explained on MongoDB’s [official page.](https://www.mongodb.com/resources/languages/json-to-mongodb)

I opened Docker’s terminal and tried to import the .json file into the database with "mongoimport," but I got an error with the formatting. I’ll try rewriting the format of the data. [Here’s where I found information about the structure](https://www.mongodb.com/resources/basics/json-and-bson).

Docker Compose works, but there’s a problem importing the data into the database. I’m trying to read up on it. I’ve tested running the command in the Makefile and directly in the Docker Compose file under "command."

I managed to solve it by running a shell script as a volume. Everything placed in "/docker-entrypoint-initdb.d/" runs automatically when the container starts, so I made a shell script that just runs mongoimport. I verified that it worked by entering the terminal in Docker (exec) from Docker Desktop. There, I started the Mongo shell by typing "mongosh," then listed all the databases using "show dbs," then entered the database I created called MenuStore with "use MenuStore," and then checked which collections it has. I created one called FoodItems, and I can see it there. Then I used "db.FoodItems.find()" to retrieve all the data from the database’s collection, and it matched.

This solution feels like it will need to be improved, but it works for now when we need to test retrieving data correctly.

The next step is to set up Express so that we can fetch the data through a REST API.

--- 
### 2024-09-12 (Swedish)

Idag satt vi och gjorde upp en deadline på datum när olika delar av projektet:
- **26 september**
    - Combine all components
- **1 oktober**
    - Implementation    
- **5 oktober**
    - Final Debugging
- **11 oktober**
    - Summary and Reflection
- **18 oktober**
    - Project Deadline - Turn in Assignment

### 2024-09-12 (AI-Translated)

Today we set a deadline with dates for different parts of the project:
- **September 26**
    - Combine all components
- **October 1**
    - Implementation
- **October 5**
    - Final Debugging
- **October 11**
    - Summary and Reflection
- **October 18**
    - Project Deadline - Turn in Assignment

--- 

> [!NOTE]
> The following entries were written in English by me from the start, **not** using AI to translate.

---
### 2024-09-18

We got an email a few days ago saying that the journal should preferably be in English. I sent an email asking if it was okay to use an AI to translate the entries I've already written. He responded that it was okay, but to keep the original text, and clearly state that it's only a translation.

So today I used an AI to translate the text. I added a "note" at the start of the journal explaining, and I also added a note just above here stating that this and all text below was written in English from the start by me. I also added additional clarification to the affected dates' headers. 

At our last meeting a little less than a week ago, we merged our branches into development and then merged into our branches again, to make sure that it's updated and to reduce the amount that has to be merged later, minimizing the risk for merge conflicts. 

I had a merge conflict with myself in this journal last week. 
The reason was because I had added a few empty lines to seperate headers, and that made text overwrite itself. 
So I copied the updated journal, merged and made sure to paste the correct one into the file.
This seems to have messed with the "blame" in this journal / the log over when each line was written.

I've looked up how to set up a basic REST-API. I watched the video: 
- [Build Restful CRUD API with Node.js, Express and MongoDB in 45 minutes for Beginners from Scratch](https://www.youtube.com/watch?v=9OfL9H6AmhQ) by the Youtube channel "Devtamin".

I'm gonna start working on it and then test it with [Postman](https://www.postman.com/).

### 2024-09-19

I've sat with trying to get the REST API to work for hours. I've watched the video I mentioned earlier, I've also tried a few others. I've looked around forums where people have had the same issues as me. I've asked AI about error messages and how to resolve them.

The issue is that I can start a express server on my host machine. I *think* it is able to connect to the database as well. The problem is that I can't access any endpoints. I've tried using postman and just the browser with html. I am able to access it, until I try to connect to the mongodb container. I've also looked through the presentation on databases that we have further ahead.

I think the problem has to do with me using the server on the host, and trying to access the docker container. I've looked around and from what I understand, it should work, but I'm gonna try using another container for mongodb-express, like they do in the examples on [Mongodb's official docker image](https://hub.docker.com/_/mongo) document to have the server containerized aswell.

---
### 2024-09-20

Yesterday I was trying to get the REST-API set up. I mentioned that I was going to try to use the server on the docker with mongo-express. This was a mistake because it seems like mongo-express is mainly for administration, which is not really what I'm looking for right now, and I think setting up the express on the host computer is going to be easier. 
If I need to change it in the future then it should be relatively simple to move to a docker what I've done on host.

I made some progress yesterday. I tried a bunch of different solutions, essentially adding and removing steps to see where it was breaking. I decided to look into how Mongoose works a little more. I thought it was necessary to have an API to be able to filter data from a db, but that doesn't seem to be true. I still wanna add a REST API but with Mongoose I was able to verify that the database is correctly setup and formatted, and that it's possible to get specific data, like the 'name' of every object who's got the property type: 'burger'.

One thing that I kept getting a lot of syntax errors. It told me to use .cjs instead of js, which is CommonJS. CommonJS seems to be used a lot for backend stuff with Node.

I set up a "schema" and a model. Then I use the find method to filter what I want to print. I got a lot of the information from [Mongoose's "Getting Started" docs.](https://mongoosejs.com/docs/index.html) The code I currently have is more or less the same as their examples.

I'm gonna see with my group if we want all of the data sent from Mongoose, then filter it with the REST-API or if we wanna filter it directly with Mongoose. 

---
### 2024-09-25

We met up to see if we could startcombining the different components, since we set the timeline for combining everything to the 26th. However there is still a lot of work left on BurgerOrderer, so we split BurgerOrderer into smaller parts. I'm gonna work with Gabriel on the "sending to kitchenview" part. 

I've looked through the examples provided on the container labs we're gonna work on tomorrow, as well as the early example of what it might look like in flask.

---
### 2024-09-26

We want to try and combine the components this week.
I've used a lot of code that was provided as a example in the 5th lecture. I set up some temporary links in the express site and I made a static array of objects representing burgers. 
My focus is not adding the ability to add or remove ingredients and customizing, I just want to get sending anything from BurgerOrderer to Kitchenview to work. I've made it so that clicking on a link will open a link of 127.0.0.1:3000/'nameoflink' where nameoflink is the burgername. It also has a route setup for /nameoflink, so now I think I just need to send that link to kitchenview, have kitchenview change it to a string and remove everything before 'nameoflink'. 

Since we're 2 working on it, we've decided to work in seperate branches. I'm currently working in a local branch. I've made temporary copies of index.js and kitchenviewer. I will then take the things that work and move them into the original files, when I get it working. 
We're gonna compare our solutions when they're ready. If we have done it in different ways, then we'll discuss which approach is the best. Right now I don't have any preferences to how we're gonna do it, I just want to get it working so we have a combined project that we can easier make tests for and add things to.

---
### 2024-09-27

Currently I have 2 possible ways I can send it to kitchenview. The first is is using fetch, I'm gonna research how to use fetch. 

The second is to set up another express file for the kitchenview, then somehow have them communicate with eachother. I don't think this is necessary. 

I'm gonna try to use fetch. I heard from the group mention of "Axios" aswell, so I'm gonna look into it. I'd prefer to not add unnecessary libraries, but it seems like it makes it a lot smoother so I will give it a try. I'm gonna read [A Deep Dive into Axios, Fetch, and Express](https://medium.com/@workwithracian/a-deep-dive-into-axios-fetch-and-express-bf098b85e1f0).

---
### 2024-09-29

I sat all day yesterday trying to get it to work. I succeeded in sending a burgername to kitchenviewer. 
I am currently using 2 express servers, one for kitchenviewer and one for burgerorderer. Kitchenviewer has a enpoint listening to /order/:, and burgerorderer has a "sendtokitchen" function that fetches to /order/burgerName. I also have a route that is "bought" which redirects the user after clicking the "buy" button to a site that prints "bought" "burger" where burger is replaced by the actual ordered burger. I also have a "back" button that returns to the mainpage.

I tried a bunch of different solutions. At first I had a route for /order/burgerName in burgerorderer, like the flask example had, but it felt unecessary to have 2 routes that basically do the same thing. 

But I am still fixing with it, and when we add everything then I might adjust some things to have it fit in with how everyone else has done things. This is why I have made temporary copies of kitchenviewer and burgerorderer, to avoid merge conflicts since were working in the same files. 
When we merge, I'll take from the temporary files and paste into the originals, and see if it works. 

Another reason I have it in a temporary file is that I have also added a few things that other people are working on, just for testing purposes and seeing if it works. For example, I generate all html from the expressapp now in a function. Later we wanna use the html file we have and "inject" into the express to render the site. Gabriel on the team mentioned that he'd gotten that to work.

So the burgerorderer site currently lists all the burgers names with buttons underneath each for "buy", and they also have a list of all the ingredients that they contain.

**The biggest issue:**

- Something I spent most of yesterday on was trying to get the ability to add options to work smoothly. I tried to have a "cart" at the bottom, and have the ingredients as checkboxes, and whenever a checkbox gets ticked, it adds it to the cart. And I had the burgers as "radio" inputs, so you can only choose one burger, then the ingredients.
- The problem with this approach is that I don't know how to get the checkboxes to only work when the corresponding radio option is checked. It's also a bit annoying to have the checkbox remove the ingredient from the cart if it's already checked and gets unchecked, since I use a "onclick" listener for the checkboxes. 

**Possible solutions:**

1. One solution might be to have a for loop for the "add option" which goes through a array which contains all of the options, then do a if its already there, remove it, if its not, add it. This feels clumsy and overly complex.

2. Another solution I read about was to make use of the "forms" element more, and instead of sending the string, I'd send it as actual data to the cart, then format it. This also feels a bit too much. I assume you would be able to create a form for each burger, and have the options linked to that specific burger, and then have a submit button specifically for that burger. However I don't know if I'd want to have the ability to add more than one burger at a time. I think it would add a lot more complexity when displaying the order in kitchenviewer, and sorting everything when I press buy. I think I would then make it so that the "add to cart" submit button would work as a link to a seperate route that has the cart, and a button for "cancel" and one for "buy". This would make it so that you can only order one item at a time.

3. Another possible way to fix it could be to add routes for each burger. So the frontpage only has the burgers listed. You either click on a button for the burger, or you click the radio input for the burger, then click a "next" button. The buttons are links to /burgerName and once there, the burgers ingredients are rendered. You check what you want to remove/add and then click order, then you go to a page, and its there the "calltokitchen" function gets called. I think this solution might be the simplest to do right now, but it also has the consequence of only being able to send one order at a time. One issue might be that several html pages might need to be loaded.

I think I will try the 3rd solution first. The "issue" of only being able to send one order at a time isn't really a problem right now, I want to add things in small steps. I have added the ability to add a burger. Now I want to add the option of adding customization to the burger. Also adding the option to have a bunch of different burgers with different customizations is another "feature" that we can tackle once we get this to work. 

I'm being mindful of not adding "technical debt" by going "we can fix this later" too much, but I think it's necessary currently since we don't have a working version, and just need to get something together that does the bare minimum. We can then polish it and add features, before the first "release" version.

It's Sunday today and we wanted to try to get it combined before the end of the week. 
I sent a message on Discord to everyone in the project server, asking how it's coming along and if we want to start merging into the branch today.
