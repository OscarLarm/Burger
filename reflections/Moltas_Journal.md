5/9 We looked on how you put up commits on github through the terminal. We created a ssh key so we could link our computer to github. 
We did this thorugh a youtube video and google where they show you how to create a ssh key. We also went through the git commands 
we are going to use to update the project on github. An example is git push, git pull, git commit -m"text" and git add . 
We also began to plan the project. We also created journals where we can write what we have done.

7/9 Today we each created a product we are going to put on the meny and i choose salad. I put 2 salad on the meny caesar salad and 
chicken sallad. I also listed all ingredients so the user could choose which ingredients the whould want the thier salad. I got a 
task to make a website where we could show the menu. I got some very small experienced with to do websites. I need to bring back 
some memories. We also created a branches one head branch and one branch each where we could upload to and then later upload to 
the main branch.

8/9 Today i created two html files and one css file to style the htmls files. one start html file where you could press a button to go 
to the meny. The other html files is to the order. I also linked the html files to the css file. The starting site was done but i 
have to linked it to the order site in the future im so i have to search how you link a button to a another site. The ordersite is 
not finnish i most talk to my colleagues about if we have more products that are going on the website. I have not finnsih with the 
css to the order site and i most do the checkboxes to the menu. I used the https://www.w3schools.com/ to remember how to do some 
stuff like margin and borders on the button. I got som problem with git but i succeded to solved it im not 100% sure how i did it 
The ssh key password dissaperd so i hade to make a new one.

9/10 Fixed the link between the homepage and the menu selection page so that you can go from the homepage to the menu. 
I put all the options in a form on the selection page to make it easier to retrieve the information. I have created all 
the checkboxes, but I will move them so they are next to the items instead of below. I have divided the menu into two columns, 
but I can't get them to be next to each other. I have also read about fetch() and how to retrieve the information from the 
checkboxes and then send it to the server. I have also done CSS for the selection page. I got the CSS to work so that the columns 
are next to each other; I solved this by creating a div for .grid instead of using the body, which made it not work. I found out 
how to avoid merges, which I did by writing the diary in VSCode instead of on GitHub, which meant I had to merge since there were 
different versions on the computer and GitHub.

10/9 I fixed a button so that all checkboxes are next to the items instead of below, 
and I made sure that all checkboxes have a name that represents the item they refer to. Next time, 
I will start creating a JavaScript file where I will retrieve information from the HTML file. 
Then I will see how to make it so that when you want a hamburger, all the checkboxes below that hamburger are filled in, 
and then you can remove any you don't want for that particular hamburger.

September 14: I realize that we should do the opposite, which means we shouldn't retrieve information 
from the website and then send it to the server; instead, we should do the opposite, which means we retrieve 
information from the server and display it on the HTML file. This means that much of what I have done and read 
is completely unnecessary. I have linked the BurgersBal.html file to Burgers.js. I need to look at how to post 
information to the HTML file via the information retrieved from the server.

15/9 Today i changed the look on BurgersVal.html so it look better when you put infomation on it. 
I read a little about fetch and how you get infomation from the database. I used freecodecamp and 
w3school for infomation on api

20/9 Today i read more about database and how you send and get infomation from and to the database. 
Iam going to put more stuff on the database on a later date. I have also began to translate my journal to english.

23/9 Today i have transalting a bit more of the journal to english and i have put more stuff on the json.file on the database.
I gave each drink and salad a name, type and id.
i put the salad, drinks and the desserts on the file. I have also read a bit on json

25/9 Today we got togheter in the group and merges or work togheter. I also learn how to merge with other works.
I also updated the server.cjs with the other options. I created app.get() with salads and drinks.

29/9 Today i read index.js file on development i made a change in it that send a mail to the person 
ordering of the order went througt or if the order failed. I also translated more on my journal.

3/10 Translating the last text to from my journal to english. Iam reading the code the my colleagues have writin in dockers and in 
JavaScript file.

5/10 We meet on school and merge all our work and disccused what we have left. I was going to fix so that the 
text ends up further up the before. And also make so that you could press burger checkbox and all content becomes pressed
and you could later take away content if you dont want it. I also wanted to make a alert instead of you going to a new site 
that show what you order.

7/10 I removed the grid in the CSS, which made the content move higher up on the page. I changed it so that the burger input
 was on a line higher up. I created a document.querySelector to check elements with the class .burgerCheckboxes. Then, I added 
 an event listener that changes the checkbox. After that, I found all the forms in the burger. It then finds all the checkboxes 
 in the content. Finally, it sets all the checkboxes to match the state of the checkboxes for .burgerCheckboxes.

 8/10 Today we meet up and merge our work. We also decided to not do an alert becouse the format was wrong to do a alert.
 we looked into mochajs to test our project. i got docker compose up to work.

 9/10 Today we read about mochajs and try to make ut work with our project we had lite problem with it working. 
 We later got it to work and made one test. I moved a button and made it better.

 10/10 Today we made more test for the project. We decide to skip the database test.

 14/10 Today we made our a summry of the project. I also remade part of the checkboxes 
 and classes so its working i also moved some checkboxes.

 15/10 Today we mett up in group and all of us did our own debug. We also made a README file.
 
 ### DEBUGING!
 Today is my debugg session. I starter to make breakpoints on two functions which is getOrder in KitchenView.js and orderPage in 
 index.js to see what happend do the code. I watched messages in KitchenView and page variable in index.js.
 In page varaible should contain what you have order that is send you user. messages variable contains the order that is send to
 kitchenView terminal. To start the debug session i write make debug that start the project in debug mode. Make Debug run
 the dockerfile. When started its creat menustore, burgerorder and kitchenview. burgerorder debugger listning on 
 ws://0.0.0.0:9229/3411fc78-2c82-4133-96e1-a0319f7a2d02 and kitchenView listning on 
 ws://0.0.0.0:9229/a392c693-7603-410d-938a-974bd83f3b0a. Then i went to the website on localhost:3000 and order a 
 Original Chicken Burger and press buy so i can step in and then i go to index.js. My page got Order sent! in its variable.
 It later got what hamburger i orderd which was Original Chicken Burger. Then it got the burgers content which 
 is the patty, bread salad and dressing. 
 Then SendToKitchen function is sending data varaible that send it to kitchenview with a fetch. 
 After this and i step over i got to node modules. Then when i stop in i got to more nodules and libaries when i 
 step out i got to KitchenView.js and the messages variable is update with ----------New order -------- and what i order and what i choose in the burger thats is send to the terminal. Then on index.js the this is saved in another variable called sentOrder that i send back to user on the website. This was my debugg seson i followed två different variables which was page and messages.


