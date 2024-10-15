# Oscar Larm Engineer's Journal

> [!IMPORTANT]
> The entries for 2024-09-05 until 2024-09-12 was originally written in Swedish by me, then translated with the ChatGPT AI. Everything after 2024-09-12 was written in English originally by me.

> [!TIP]
> This text was written using markdown with some Github-specific syntax such as this [Alert.](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)
> 
> I recommend reading this journal in the [Github repo here](https://github.com/oscar-larm/Burger/blob/main/reflections/oscar-journal.md), for better and more readable formatting.

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
- [2024-10-01](#2024-10-01)
- [2024-10-03](#2024-10-03)
- [2024-10-04](#2024-10-04)
- [2024-10-05](#2024-10-05)
- [2024-10-06](#2024-10-06)
- [2024-10-07](#2024-10-07)
- [2024-10-08](#2024-10-08)
- [2024-10-09](#2024-10-09)
- [2024-10-10](#2024-10-10)
- [2024-10-13](#2024-10-13)
- [2024-10-14](#2024-10-14)
- [2024-10-15](#2024-10-15)
- [Debug Session](#debug-session)
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

> [!IMPORTANT]
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

---
### 2024-10-01

After the lecture a few of use sat down to see how far we've gotten. There's still a bit to go before we're ready to combine everything, so we'll continues working on it. There isn't a lot more that needs to be done. 

I'm gonna try to make it so that everything gets sent as a post of the .json instead of just sending a get for the url. I think this will make it easier to send more data.

---
### 2024-10-03

I've worked all day on getting it to work and I think I got the send function to work. It wasn't working for the longest time. The fix was to add middleware for urlencoding, which apparently is necessary when formatting html from data into .json format. I'm also using .json middleware.
I ended up going with the possible solution #2 that I wrote about on [2024-09-29](#2024-09-29).

I have it set up so that the "submit" button posts the data to the websites /order/ endpoint. That endpoint then takes the data, sends it to a "sendToKitchen()" function, then calls on another function which renders a "ordered" page that prints out on the page what the user has ordered. The sendToKitchen function makes a post [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to the kitchenviewer express server, on the endpoint /order. Kitchenviewer takes the data and calls on a function which goes through the data and makes a string that says e.g. "one fettburger" and it checks if any "ingredients" has been added and if it has then it adds "with " and then all ingredients.

I would like to add a "cart", and the ability to add and remove stuff to it, then send everything inside the cart. But I think this is enough for now, when we've combined everything we'll be able to add more things.

Tomorrow is a "lab" so I'm gonna show what I added and see if we want to combine everything.

---
### 2024-10-04

I sent a message in the group chat to see how it's progressing. We should try to meet up as a group this weekend to get things put together.
I've previously used static data and sites just to test the functionality, so it will almost certainly need to be adjusted.

---
### 2024-10-05

We met up and managed to combine everything except the database. 
All 3 components are containerized and in a docker compose file. 
The person working on getting data from the database wasn't available this weekend so we're planning on adding that part during the week. There was a few merge-conflicts but we solved them in vscides merge conflict tools, where it's visualized which the incoming changed are and which the current ones are.

The project has a lot of files that aren't being used. We decided to make a folder where files that aren't being used can go incase we might use them in the future. Since me and Gabriel worked on the same part and used different methods we could potentially add some things from both versions. 

We ended up using my version for now since it seems to be working with the other parts, but it would be smart to add the best parts from both versions into one file later.

There were some issues with getting the dockerfiles to access the package.json and package-lock.json that were in the parent folder. We ended up making one for each dockerfile. We might look into changing those package.json files to only include the packages that each component use. Right now they're the same.

We've come a long way with the project today. What's left to do is:
1. Add the function for getting the data from the database. 
2. Documentation, both in code and for the entire project in the readme.
3. Create and add automatic tests.
4. Create and add easier startup from the project root, example a makefile or a shellscript.
5. Everyone do a individual debug session and document it.
6. Write the summaries as a group for each of the 3 assignments.

Besides that, there's some adjustments and improvements we could do, but we'll see how long the above takes. It looks like there's a lot, but I think we can get most of them done this week.

We merge the dev branch into main.

---
### 2024-10-06

Today we worked on documentation. 

However we encountered a big problem.
We noticed that a while back, Gabriel's commits were not properly linked to his github account. This means that if you check the "contributors" tab then his account doesn't have a lot of commits, even though he's added a lot. His account is called Gabe-Hog but the commits were authored by "Gabriel-". 

I've changed my git email before so I had an idea about what to do. We searched online and found the commands to change the global gitconfig email and username. He tried making a commit and it seems to work now.

However, the old commits were still authored wrong. We searched around and found a few possible fixes, but a few of them seemed to only work whrn changing the entire git history, not just for one user. 

We tried to git log all messages with the faulty author, then use rebase, but this didn't list the authors, just all commit messages and hashes. Also, changing each commit individually would take a lot of time, and I felt like there must be some tool that would make it possible to change a lot of messages at once. 

We saw a few threads and articles talk about [filter-branch](https://git-scm.com/docs/git-filter-branch), but a lot of them had updates mentioning that filter-branch wasn't recommended anymore because of high risks of messing up the commit history. Even the documentation linked above recommends against using it. Many mention [git-filter-repo](https://github.com/newren/git-filter-repo) as a better and safer alternative, and it seemed promising.

We installed git-filter-repo with pip. We then made a new temporary branch and then followed some relevant documentation we found from their repo. We then tried to merge it, but got a error Regarding unrelated histories. We Googled the error and how to fix it, and got a flag to add to allow unrelated histories. When we did this, it doubled all commits. The branch suddenly had 2x the commits and looking in the commit history, it had duplicated each commit once. 

We decided to hold off on trying to change it, and instead mention in the journals that the commit author for "Gabriel-" belong to "Gabe-Hog". 
When we removed the branch and he tried to use git pull, we got a error that the remote branch was untracked. We tried to set upstream but it wasn't fixing it. 
Everything seemed to stop working, and he couldn't pull, push or merge anything. We double checked that he didn't have any local branches that weren't pushed to remote, then we decided to just remove the entire repo folder from the pc, then clone it again. That fixed it.

While we were doing this, Malte cleaned up the folders and moved unused files to a seperate folder, like we had discussed yesterday.

I now started working on documentation for functions. Similar to javadoc, which has been mentioned in the course, I found jsdoc. It was mentioned in the article [Whats the best way to document Javascript](https://gomakethings.com/whats-the-best-way-to-document-javascript/). The article is a bit too opiniated regarding self documented code, but jsdoc seemed interesting so I looked through the examples and looked up the [official jsdoc documentation](https://jsdoc.app/). 

I've now added documentation dor the functions I've written. I've tried to avoid commenting too much, and avoided explaining what each line does, and instead tries to explain the entire function as a whole.

Something I noticed was that a lot of the functions I've made are very specific, and they could be made a lot more general and easier to use, if I add another 1 or 2 arguments. I'm gonna try to look into this if we have a bit if time left before the assignment deadline.

It says in the assignment that each method and each container should be documented, but I'm not certain where the container documentation should be. Documenting/commenting in the dockerfiles seem unnecessary. I think you could add a description at the top of each of the 3 components main files.

Tomorrow we're gonna try to finish the documentation for functions, containers and the big project documentation with "how to start" Instructions for the project. I think we'll put the project documentation in the README.md. Right now in the README.md, there are some git commands and short descriptions that I wrote and added about right when we started the project. They're no longer necessary, it feels like we've gotten more comfortable with using git.

We'll also look into a testing framework to make tests more efficient and easier to do. I found some recommendations for [Jest](https://jestjs.io/) when testing JavaScript. I'll look into it more tomorrow.

---
### 2024-10-07

Today we did a lot with the project. I started up with documenting a few functions I've written, and I also made the outline for the README page, which I figured could work as a part of the project documentation. I filled in some information into the README as well.

Max has worked on the part that's going to get the data from the database. We're trying to get it working with the components we have. There's a function for connecting to the mongodb database using mongoose. I had some trouble connecting. I called on the function from the "listening to" part of the express app, but it wasn't working. I also tried adding it to a route but didn't seem to work. I tried adding it outside any routes, and it seems to be working, based on the fact that the function logs when connection has been established.

Reading on [mongoose docs about connection](https://mongoosejs.com/docs/connections.html), they say that mongoose.connect buffers. I don't fully understand it but from reading, it seems to be able to keep trying to connect, while the code is being run.

I tried getting the data from the database, to the Javascript but it wasn't working. It might have something to do with the Javascript being loaded through the express app. I also wasn't sure how I would access mongodb without mongoose, and since mongoose is for node.js, I think we should get the data from the website express app.

I felt very confused on how to go about it. I also had a hard time at first searching on google for examples or articles talking about it, since I wasn't sure how to describe what I wanted to do fully.

I ended up finding a few different sources and started making a endpoint in the burgerorderer express file. The website Javascript should first make a fetch request to that route, then the route should send everything from the database to the site script. It should then save it as a object. Then we can just replace some words when calling on key-value pairs, when generating the html.

I wasn't able to get it to work properly. I added console.log to a lot of places to see where I was going wrong. I'm sending it as a response in the form of .json() but I'm uncertain of the syntax.

Gabriel managed to get debuggers into the containers which is very good. Malte also made a makefile that does docker compose from root. It also is able to take down the docker compose like docker compose down, as well as having a reset command which removes containers, volumes and images.
This saves time when testing changes in the containers. It also automates the starting part of the project.

We decided to try to work on unit testing tomorrow.

---
### 2024-10-08

I wasn't able to get started working on unit testing today since I wasn't able to get the database fetch function to work until later.

I finally managed to get it working. I managed to get data to be sent to the website Javascript, verified with logging, but I wasn't sure how to get all objects that had a specific key-value combination. I found some stackoverflow threads mentioning the "filter()" function which filters based on given parameters. 
I found some examples on how to use it [here](https://forum.freecodecamp.org/t/filtering-json-object/244160/2) and also [here](https://medium.com/@melaniecp/filtering-an-arrays-objects-based-on-a-value-in-a-key-value-array-using-filter-and-includes-27268968308f). The first one is very similar to how I ended up doing it, but the second one was better at explaining what it was doing. So I checked all objects in the array which had the key-value pair "type: 'burger' ". This saves it into a new array, which I then use a foreach loop to add html elements, such as forms and input, to each burger. 
I also have a foreach loop for each ingredient for the burgers. The way it makes html based on data is pretty much the same as before, changed from using static data to data from the database.
Something which also helped was removing the .find() method from the model and put it directly into the endpoint which gets the data from the database.

The rest of the team worked on other things. Gabriel and Malte were also looking into frameworks for unit testing. They mentioned that they had heard recommendations for [Mocha](https://mochajs.org/). I think Gabriel managed to get Mocha into the containers through NPM.

Since the site now takes the data from the database then sends it to kitchenview, I think we can consider the "combine parts" goal done. Before heading home, we sat and worked on some more documentation, and decided to continue work on unit testing tomorrow. The plan is to all work on it together, preferably using a group room and connecting one persons laptop to the tv, then work together to get the automatic unit testing fully implemented.

Some additional improvements I should consider making when we got the necessities in place:
- Make the database container stop "spamming" the log with output. It makes it hard to see KitchenViews terminal from vscodes integrated terminal, when using docker compose and all 3 containers output is shown in the same terminal. Using docker-desktop makes it easy to see individual containers terminals, but it would be nice to clean up the shared terminal view.
- Right now some functions I made are very "specific", but they could be made more "general" by adding some arguments, and making them more "reusable". One example is the function for generating burgers. I should instead make it so that it generates whatever is put into the argument.
- I am only generating burgers on the site right now. We have other "types" in the database (sides, drinks, salad) and it should be easy to add since I've already saved all the types in their corresponding arrays, but I'll have to do the above step first to keep the code as DRY as possible. If I just copied, pasted it but changed the names then it would just be a big chunk of text that is mostly just repeats.

However these things I feel can wait until the necessities are in place.

---
### 2024-10-09

Today we all worked on unit testing. It went well. We're using mocha, and we also added [Chai](https://www.chaijs.com/), which provide more assertions.

We all worked on the same laptop today. Malte connected his laptop to the tv in the grouproom.

Problem solving all together was effective, especially since we're all new to unit-testing. Looking up how to use the testing framework was easy, since we all used our own laptops to look for the information, communicate it and share it in our project channel. We then tried it and if we got an error then we evaluated where to go from there based on the error message received.

We managed to add a unit test for a express route in our burgerorderer to check if it's running, which is working.

We tried to make a unit test for the route that takes data from the forms, cakes on the function which sends it to kitchenview then calls on the function which makes a html-formatted string. We've set up a vakue we post to it, then a substring that the response should have. We couldn't get it to work. We've logged the data at several points and it should be correct. We've also used the debugger to follow the data and see it'd type.

We also tried to make it so that it should only check that the respons is a string, but we get error that you can't compare a object to string, or something like that.

---
### 2024-10-10

We worked in a similar way to yesterday, we used my laptop and connected it to the tv. 

We fixed the issue from yesterday and correctly implemented the unit test. The response was an object with a lot of stuff like headers and such, but we only wanted the response body. We found that the solution to this was to add .text to the response in our Mocha/Chai script.

We then tried to make a unit test for the route that gets data from the database. This was very difficult, the test came back as positive, even when we didn't start the database container. We then tried to import just the function which connects to the database, and instead of specifying a route and get/post/etc, and .end, we only had the function call inside, then a done().

We didn't quite get it working. We're considering if it might be better to unit test some other part, the connect to database function has a catch inside which does warn when there's a problem with the database.

---
### 2024-10-13

During the weekend I worked a bit on some tests. I copied a package.json and moved it into root. I also removed some unused packages from the containers package.json files. This will hopefully reduce the amount of time it takes to do docker compose by a little bit.

I made some tests for a few functions, and added both a correct input and a incorrect input, and what the expected response should be.

I also generated html page for our documented functions using jsdocs. At first, only a few of the functions from the files I chose got rendered. I tried a lot of different things and searched around. There was an issue posted regarding jsdoc and not rendering some functions. Some of the solutions that people were suggesting was to add different tags to the jsdoc documentation, e.g adding the @global, the @public and the @function tags. 

After awhile I got all functions to get added to the jsdoc index.html page in ./function_documentation. I also made a makefile command called make docs which opens the jsdoc index.html in google-chrome.

Tomorrow we'll start working on the reflections for each assignment, we're close to being done with the project.

---
### 2024-10-14

Today we sat all together and worked on the reflections for the 3 parts of the assignment. We connected Max laptop to a tv and discussed the questions in each of the reflection assignments, and how it had gone, then wrote each of the reflections as a group. The only part left in the reflections is to link everyones individual debug sessions in the reflection for assignment 3: Testing and Debugging.

The make docs was changed from using 'google-chrome' to 'open' which apparently opens the users default browser instead.

It went well. I'm gonna do a debug session tomorrow.

We're pretty much done. Some things I think might be left:
1. Clean up structure of project, move unused files to ./other_versions
2. Finish the project documentation. I'm gonna send an email to Mikael and ask if the projects overall documentation should be a README.md, or if it should be some seperate file.

---
### 2024-10-15
Today we finished the projects README.md, where the general project documentation is. I ended up not writing an email yesterday since I saw in the documentation lecture that it talked about having the project documentation in the README.md. We also ended up adding a couple things to one of the reflection parts.

We got debugging sessions left, a couple of people have already finished their debug sessions. I'm gonna do a debug session now, and tomorrow we'll hopefully be ready to turn in the project.

I also quickly changed the package.json "description" since it used our previous readme where I had just listed a few useful git commands from the first week. I just changed the description to the component name. Hovering over the 'description' says "This helps people discover your package, as it's listed in 'npm search'." and since I don't want other people to find our private repo, this seems irrelevant for this project. The actual description is in the README and documentation.

---
##### [Back to Top](#oscar-larm-engineers-journal)

### Debug Session

Date: 2024-10-15

I started up the debugger inside the containers "burgerorder" and "kitchenview" using our make command "make debug".
I get output in the burgerorder terminal: 

```bash
burgerorder  | 
burgerorder  | > burger@1.0.0 start-debug
burgerorder  | > node --inspect=0.0.0.0 index.js
burgerorder  | 
burgerorder  | Debugger listening on ws://0.0.0.0:9229/ee3ef073-c170-4475-8c31-4cf459974eed
burgerorder  | For help, see: https://nodejs.org/en/docs/inspector
burgerorder  | Connected to MenuStore
burgerorder  | app running on http://localhost:3000
```

and in the kitchenview terminal I get:

```bash
kitchenview  | 
kitchenview  | > burger@1.0.0 start-debug
kitchenview  | > node --inspect=0.0.0.0 KitchenView.js
kitchenview  | 
kitchenview  | Debugger listening on ws://0.0.0.0:9229/9d4a9708-95ff-484c-b6a6-2a6e792d9775
kitchenview  | For help, see: https://nodejs.org/en/docs/inspector
```

Which means that the debuggers are running.

I decide to debug burgerorder.

First I set a breakpoint for the function "orderpage()" on (at the time of writing this) line 46.

The orderPage function is the function which makes the page after a order has been made, informing the user which items has been ordered. 

I then click the "Run and Debug" tab to the left in VSCode. I then choose "Docker:Attach to BurgerOrderer" from the dropdown menu, then click "start debugging".

I can tell that it's running. VsCode switches to the debug console, and it adds a "debug interface" to the top. Currently there are the options "Pause", "Restart" and "Disconnect". 

I open the website, but nothing gets loaded. Looking at the console, I see that I get an error in burger.js, because of a line we added earlier to test something but forgot to remove, so I comment out the line and restart. Now the page loads as it should and I can continue debugging.

I click the checkbox for "original Chicken Burger" which ticks all "ingredient" checkboxes aswell, then I click buy.
The breakpoint for orderPage stops at the first line:

```js
JSON.stringify(data)
```

Checking the Variables, I look at "Local:orderPage" and see "this= global" and "data". It is "data" that I'm interested in right now. I click on the "data" variable and seee that it has 

"fooditem = 'Original Chicken Burger'" and "ingredients = (4) ['Fried Chicken Patty', 'Bread', 'Dressing', 'Brioche bread',]. Copying the value from 'data' gives the following:

```json
{
  foodItem: "Original Chicken Burger",
  ingredients: [
    "Fried Chicken Patty",
    "Bread",
    "Dressing",
    "Brioche bread",
  ],
}
```

I right click on the data variable and "Add to Watch". I also right click on the 'page' variable which is a string which will be changed depending on what gets sent in the 'data' variable.

I click 'Step Into' in the debugger. I continue 'stepping into' the function, and see that the 'page' variable changes. Currently the string only contains a header element and the text "order sent". It then adds a 'hr' element. It then gets to the line:
```js
page += `<p>One ${data["foodItem"]}`
```
Which checks the data variables value for "foodItem" which is 'Original Chicken Burger', then adds it to the string. It then gets to the if statement, checking if the data variable has a 'ingredients' key. It does, so it enters the if statement and takes the array of ingredients, makes it into a string with join then adds it to 'page'. The page variable gets updated for the last time, before reaching the return statement. I then return to the '/order' route which is what calls on orderPage() and gets called on when a order is placed.

I retry the debugging but this time I try to not add any additional ingredients.
I keep the same breakpoint and uncheck all ingredients. Looking at the 'data' variable now, it has the value:

```bash
{
  foodItem: "Original Chicken Burger",
}
```
Which means that the ingredients were not sent and the data variable does not have a key called 'ingredients'. I step into the function, seeing that the 'page' string is being changed as expected. When I reach the if statement, it checks if there is a 'ingredients' key in 'data', and since there isn't, it skips the block and continues successfully.

Overall, the orderPage() function seems to be working as intended.

I decide to debug the entire '/order' route as well. I set a breakpoint in the express post endpoint '/order', on (as of writing this) line 62, where the sendToKitchen function is being declared. I also set a breakpoint on line 80 and 81, where the OrderPage function is being called and then sent as a response. After that, I go back to the website and press Classic Cheese Burger with the ingredients Beef patty, Mustard and Sesame Bread checked in. I then press buy.

The current local variables are req, res and this. 'this' is undefined, 'req' is 'IncomingMessage' and res is 'ServerResponse'. I step into once and the 'sendToKitchen' variable is added to the local variables. req.body is declared to 'data'. 
If I go into the variable 'req' and copy the value from 'body' I get:

```bash
{
  foodItem: "Classic Cheese Burger",
  ingredients: [
    "Beef patty",
    "Mustard",
    "Sesame Bread",
  ],
}
```
Which is accurate and the expected value.

Another step into, sendToKitchen is being called with 'data' as the argument. Stepping into again opens a new file called async_hooks. This is most likely because sendToKitchen is a asynchronous function. Continuing to step into, jumps between different functions inside 'async_hooks'. I press 'Step Over' a few times until I am back to my function.

The variables for 'Local:sendToKitchen' are now 'this = global' and 'data' with the value: 

```bash
{
  foodItem: "Classic Cheese Burger",
  ingredients: [
    "Beef patty",
    "Mustard",
    "Sesame Bread",
  ],
}
```
This looks correct. I then continue to 'step into' but realise that I will have to restart to avoid going through all of the code/functions that 'await' and 'fetch' use from different files. So I restart and get back to where I was before, with the same data, and use step over instead when I get to the await fetch post.

I then get to where sentOrder is being assigned to the orderPage function with 'data' as the argument. I check the data variable from my 'watch' tab, and see that the data is still the same and accurate. 

The orderPage function works the same way as the previous debug test, without issues. I then step into the line where I send the return z from orderPage as a response, and the seperate file 'response.js' opens up. I use 'step out' to get back to my route. 

A new local variable is created, 'Return value = undefined'. I add this to 'watch' and it's value is:
```js
Uncaught SyntaxError: Unexpected identifier 'value'
```
I then step into again, and move to 'layer.js'. It seems to handle 'res.send'.

I then continue stepping through but then I reach the end and the debugger finishes. I didn't get to see the 'Return value' value, since all watched variables now have the value 'not available'. The Return value seems to stay as 'undefined' and 'Uncaught SyntaxError etc...'.

I also noticed that I got a typerror, 'fetch failed' at the sendToKitchen function when the data gets sent to kitchenView. The error seems to be 'Headers Timeout Error'. I've gotten this error before, and I think it has to do with the fact that the kitchenView endpoint isn't sending a response. 

Overall, I feel like this debug session went well, and the results were mostly as expected. The debuggers work very well in the containers. What wasn't as expected was the 'Return value' variable and its value. I am not sure what it is, but it seemed to have been created when I used res.send, so it must have something to do with that.

Something that would make debugging easier and smoother would be to refactor a lot of the functions, to make them simpler and have them do less things. Have the functions more specific, but also generalise them a bit more by adding more parameters to them.

I also noticed that inside the orderPage function there is a 'JSON.stringify and from what I can tell, it isn't doing anything. The data variable doesn't seem to change from it, so I don't think the statement has any purpose and can be safely removed.

With the help of this debug session, I was able to find a line of code that can be safely removed, effectively refactoring the code.

---
##### [Back to Top](#oscar-larm-engineers-journal)
