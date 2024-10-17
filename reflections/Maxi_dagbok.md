5 sep 2024 - idag fixade vi github och ssh nyckel och vi har även börjat planera. Vi bestämde oss för att vi skulle använda Github som en git-server. Vi satte upp ett Git-repo och sedan så testade alla att använa push, pull, add och commit.

7 sep 2024 - idag så har vi planerat och jag har skivit in de desserterna som vi ska ha i våran meny. Ett problem som vi stätte på var att vi ändrade i main, så vi löste det problemet genom att skapa en ny branch som si mergar in i main.

17 sep 2024 - Jag har kollat runt och samlat fakta och information om de olika sakerna som vi använder oss av och som vi använt oss av. Jag tycker personligen att det är mycket iformation att ta in t.ex databaser, vad som ska skickas vart och hur saker kommer dit de ska. 

24 sep 2024 - jag har testat ett litet JavaScript för att se hur det fungerar. Ett problem uppstår när jag ska testa det i terminalen, jag får upp 'Error: Cannot find module' så detta ska jag försöka hitta en lösning på och sedan fortsätta med JS när det fungerar.
                                  
25 sep 2024 - Today we planned out the final part of the project and assigned tasks to make sure everything is completed on time. I also solved the problem with my JavaScript code—it turned out to be some missing characters that was causing the program not to run. Now that it's fixed, I can continue working.

26 sep 2024 - Today I wrote some JavaScript. I found it difficult at first, but then I came across this site https://mongoosejs.com/docs/guide.html that explained the different parts and how it all works. I also watched a lot of YouTube clips and tutorials on how to use Mongoose. After that, I felt like things started to flow more smoothly, but it's not fully developed yet, so I still have a few days left to work on it.

1 oct 2024 - Today, I continued working with JavaScript. What I had written before wasn't completely correct, so I have to take parts of it and incorporate them into something else to make it work as it should. I find it difficult to get it to function properly and to find the right information.

3 oct 2024 - Today i have been working on trying to import from the database. I think it´s difficult to figure out how i should do it and implement it into the burgerstore. It seems that there´s a few diffrent ways to do it, so i think that´s why i find it so difficult.

9 oct 2024 - Today we sat as a group and worked on the testing part of the project. We added Chai to our package.json file and we added a new file called testing.js inside the BurgerOrderer. we added a makefile that is where we store the different commands etc. 'make up' to run the docker containers and 'make test' to run the docker containers and also test the scripts.

10 oct 2024 - We worked on the test frmaework. We where trying to get it to work. The first test we made worked when we changed the response body should be a ('string') to ('name of the burger'). We also wrote some tests for wrong input and that it should respond in a certain way.

14 oct 2024 - Today we met as a group and started writing the docunentation and summary for these  3.3 ,4.3 ,5.4 in the assignment description. We made sure that everyone got to say what they thougt about the project and how it went.

15 oct 2024 - Today we wrote the last thing on the project, the read.me file. 

### DEBUG 

1. Select some functionality, e.g. Order a “Dripping With Lard Heartstopper” menu

I choose to debug the kitchen view when you order a classic cheese burger. That i order on the localhost site.

2. What breakpoints do you set in order to start the debug session? Where do you find the files to set the breakpoints in?

I set i breakpoint on line 18 in KitchenView.js to start the debug session. I put a breakpont there so i can follow the whole function and see what is happening for each step

3. How do you continue? How do you use the buttons for “Continue”, “Step Over, ”Step Into“, and ”Step out“?

I start by starting the the program and order a burger. Then i get all the buttons so i can start the debug. i start by stepping into the function where it gets the data that i orderd. When i step again it finds the ingedients and it is looking for if i customized the burger which i did not. I stepped in i few more timed and at line 26 i get a string with the burger and all the ingedients. And then it retuns the message. I step down to line 32 - 34 and this is where it prints it out in the terminal. When i stepped in to that i got o a node module where i pressed continue.

4. Watch some variable
- How do you do this?
I put the variable i wanted to watch in the debug console under "watch". In that way i can follow the 'message' and see what is happening and when the value changes.

- What is its current value?
 
"\n-------------------NEW ORDER-------------------\nA Classic Cheese Burger"
 This is the current value at line 18.

- Can you find out when the value changes? How? The value changes at line 19 when i step into the function. Because then it gets the new information so the value changes.


5. Try some different “paths” through the functionality, e.g. order something else, cancel half-way through, etc.
- How does this effect which code is being executed?
i customized the burger that i orderd so it is a different order then before. The fist thing i see is that the start value has customized with pickles and mustard. Now it only as two items in the array but before it had six, and when it printed in the terminal i saw the changes.

- How does this effect your watched variables
"\n-------------------NEW ORDER-------------------\nA Classic Cheese Burger customized with Mustard,Pickles." This is the new value at the breakpoint, when i customized the burger. It affected them because when i customized it only picked those items.
