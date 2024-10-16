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
- [2024-10-07](#2024-10-07)
- [2024-10-08](#2024-10-08)
- [2024-10-14](#2024-10-14)
- [Debug](#Debug)

### Bra saker att komma ihåg medans man skriver ###
Det här är er Ingenjörsdagbok 
Vilka git-kommandon använder ni? Vad gör de? 
Vilka svårigheter stöter ni på? Hur löser ni dem? 
Finns det något som ni inte vet hur man gör? Hur kan ni ta reda på det? 

### Dagboken ###
### 2024-09-05 ###
We familiarized ourselves with using Git as well as github and figured out how to both upload and download parts and the project.
[Link to our projekt](https://github.com/oscar-larm/Burger).
this is were we did the <MAIN> Branche.

- We created SSH Keys. We managed to solve it by reading through Git-hubs' official documentation for SSH Keys.
- How you generate new SSH-key: [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- How to att a SSH key to git-hub: [Adding a new SSH key to your Github account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

We encountered some Problems With Push / Pull because we were all in the same branch at the same time trying to add to it.
To solve this issue we created a <Developer> branch from there to make "feature" branches.

### 2024-09-06 ###

I created and committed file Reflation and Summarizing 3.3-4.3-5.4. they are text files we can use to write our summary of the project in. Reflect on what we could have done differently and better.

### 2024-09-07 ###
We sat down and made a base list of what should be on the menu want products to be "sold" that will be subject to change but at least we have a list that we can take from. 

We walked through the team and made sure that everyone knew how to commit push/pull files from github.
- Oscar created a branch to start with the data base, and there for made the first ''feature Branch''
[Link to Oscar's Branch](https://github.com/oscar-larm/Burger/tree/database)

- Moltas created a ''feature branch'' to make a HTML side with CSS 
[Link to Moltas Branch](https://github.com/oscar-larm/Burger/tree/Moltas)

### 2024-09-10 ###
- Gabriel created a ''feature Branch'' to work on docker
[Link to Gabriel's Branch](https://github.com/oscar-larm/Burger/tree/G_branch)

### 2024-09-16 ###
We have now committed the HTML website and some commits about the docker and data bas tho its now completely finished. I wanted to learn how to make a HTML,CSS with JS to make an interactive Kitchenview website for eventually use for later 

I started to look online for how to make a html site and used this link to help me get a understanding of it [HTML](https://www.hostinger.in/tutorials/making-website-with-html)

### Things i have lear how to do:
- I Learned how to create a simple website with HTML and the basic of a HTML frame work <Kitchenview.html>
- Then i complimented that with a CSS file to make it look better <Kitchenview.css>
- Also went over how to how to make a js script in a separate file to get information from a static json file. <test_index.js>
- How to make buttons and reactive links in my .js file so when i click something happens so i also had to make separate files 
<information.html> and <information.css>

### 2024-09-17 ###
i created a branch that i can commit to and try to make things work.
A local branch called Kitchenview that i plan to marge with development.


### 2024-09-18 ### 

I took some notes on todays lecture 

then later continued with my personal project on how to make my website and i had to download the extension <Open in browser> in vscode to be able to open it as a server.


### 2024-09-19 ###
I stared the day with doing git pull in the terminal in hopes that an issue we had yesterday was gonna be solved because i had a problem getting a folder down from the git-hub server. We had a map that was names <MenuStore> and one that was named <menuSore> and for sme reason i only got one of the folders i changed name of one of the folders do to that i did not get both the folders to my computer my thinking is that git-hub for some reason reads it as the same folder and only sends me one of them. So  i changed the name of one of then and this resoled the issue and also makes it easier to differentiate them as well.
I put the files in respective folders so its easier to find and navigate for the rest of the group but also for the future me.

i also got extension <live server>

### 2024-09-25 ###
we all sat down today and tried to push everything we have done individually. We are now trying to connect everything re-group and looking at that the next step in development will be, if we have followed the general time line our plan was to do this te 26th but we had time today and it saves time because we all felt like we were pretty done with our projects.

its all supposed to work before 1 october.
so now we need to decide who needs to do what in the upcoming week

### 2024-10-05 ###
we meet today again after a few days to see were everyone is at i implemented my docker file in to the program to make sure it works while 2 of the others tried to get a overview of the project and make sure that everything works as planned.

We have everything gup and running at this point of the project everything works as planned 

now we only need to do the rearranging the files to make a better structure of the file system so its not as confusing and easier to navigate.

### 2024-10-06 ### 
Today i fixed the file system with help of 2 others in the group and made sure that it was easier to navigate and put some unused files to a specific map so we still have them if needed but they don't clutter and confuse the project itself.

today we are gonna spend time to document all the files and make a description on how to start the project from a docker compose file.

we noticed that Gabriel's commits was under another name tho to some local problems he had so Gabriel- and Gabe-Hog is the same user.

i changed the 3.3/4.3/5.3 to an md and made the structure of it so its easier for us all to sit down later and write the text and hopefully it goes faster.

### 2024-10-07 ###

I made the makefile more relevant with some lines of code that makes it so you can both do an up command down and also a reset to clean the project if something goes wrong during it.

I have also build the structure so we can add a test later on. 
i will try next time try to build my own test file and a test hopefully we will have 5 separate tests in a file that you can test if everything is working properly 

### 2024-10-08 ###
Looking up how to create a test for the projekt and how to test a varible that will be sent from a to b through out a proses in the propgram.
And the goal is to be able to see if the flow of informasion is correct.

I started looking up on youtube to be able to get  the basics of setting one up using <Mocha JS & Chai> this is a video i found that i looked at to help me set up the basics around it [Link to video](https://www.youtube.com/watch?v=MLTRHc5dk6s).

We made 3 tests thats cheaks if everything works as it should.


### 2024-10-14 ###

Today we meet as a groupp to do the absolute last things for the 3.3,4.3,5.4 Reflecting and Summarizing we spent a few hours making sure that everyone got to have input in what was writen in to it.

### Debug ###

This is the finnal Debug to make sure that wee can follow the flow of the program and make sure that is works and get a pretty good ide on how tha informasion runs throw it.

1. Select some functionality, e.g. Order a “Dripping With Lard Heartstopper” menu
I decided to look if the verible "message" in kitchen view takes the correct informasion and that is sent from the burger order.


2. What breakpoints do you set in order to start the debug session? Where do you find the files to set the breakpoints in?
for the kitchen view i sat the breaking points at primarly on
function getOrder (data)
so i can from there look throw the code and follow what happends with the varible before it is hopefully retuned.

3. How do you continue? How do you use the buttons for “Continue”, “Step Over, ”Step Into“, and ”Step out“?
I started with using Step into (F11) to be able to go thrugh the function step by step that you can see is that the varible starts by being ineselisied as 

message = ----------NEW ORDER------------ 
This is to smake it esier and more visable in the terminal 

The next line that we see is 

message += `A ${data["foodItem"]}`

+= is a simple and more clean way to add to an exsisting varible.
`A ${data["foodItem"]}` is how we did it to add the data from the Burger order that is named "foodItem" in this case its "Original Kidney Killer"
that gets added to the message string so now the whole varible is 

----------NEW ORDER------------ 
A Original Kidney Killer 

Then we use step into (F11)

Then we get to the line with a IF statments that is, that says IF data key ["ingredients"] has a vlaue in it then we go in to the if statment and follow it 

Becuse we did not have one now it jumps right down to the return message.

After that funcsion is done we have a full string in our messeage varible 
that looks like this 

------------------NEW ORDER-------------------
A Original Kidney Killer

IF we add something to customize the burger with we go in to the if statment and adds to it i tried to do it with Dressing. 

and that results in the message varible looking like this 

-------------------NEW ORDER-------------------
A Original Kidney Killer customized with Dressing.

and then it goes down still using the step into (F11) to continue throw the code to the next step we go down to my next stop that is app.post that simply takes this string an dprint it out in the terminal. 

and that concludes this part of the debbuging i was able to follow the messege varible with and without cosomaziasion and can conclude that the funcsion does do what it inteends to do.

4. Watch some variable
- How do you do this?
- What is its current value?
- Can you find out when the value changes? How?

5. Try some different “paths” through the functionality, e.g. order something else, cancel half-way through, etc.
- How does this effect which code is being executed?
- How does this effect your watched variables



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

