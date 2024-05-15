 
 //Question 1: have already been done "Installation".

 //Qustion 2: Store a person's name in variable 
//and print a message to them. like "Hello ...... , would you like to 
//learn some typescript today."

//Program
//let name: string = "Shabbir";
//console.log(`Hello! ${name} would you like to learn some typescript today? `);

//Question 3: 
//Name Cases: Store a person’s name in a variable, and then print that 
//person’s name in lowercase, uppercase, and titlecase.

//Program
// let name: string = "Shabbir";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());

// Question 4:Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. 
//Your output should look something like the
//following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake 
//never tried anything new.”

//Program
// let famous_person: string = "Albert Einstein";
// console.log(`${famous_person} Once said, "A person who never made a mistake never tried anything new."`)

// Question 5: Famous Quote 2: Repeat Exercise 4, but this time store 
//the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message.
// Print your message.

//Program
// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} Once said, "A person who never made a mistake never tried anything new."`
// console.log(message);

// Question 6: Stripping Names: Store a person’s name, 
//and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.

//Program
// let personName: string = "\t\n Shabbir \n\t";
// console.log(personName);
// console.log(personName.trim());

// Question 7: Number Eight: Write addition, subtraction, multiplication, 
//and division operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results. 

//Program
// console.log(5 + 3); //To add two numbers and answer is 8
// console.log(11 - 3); //To Subtract a number and answer is 8
// console.log(4 * 2); //To Multiply two numbers and answer is 8
// console.log(16 / 2); //To Divide a number with another anad answer is 8

// Question 8: You should create four lines that look like this:

//_____________________________________________

//console.log(5 + 3)

//_____________________________________________

//Your output should simply be four lines with the number 8 
//appearing once on each line.

//Program
// console.log("==".repeat(20));
// console.log(5 + 3); //To add two numbers and answer is 8
// console.log("==".repeat(20));
// console.log(11 - 3); //To Subtract a number and answer is 8
// console.log("==".repeat(20));
// console.log(4 * 2); //To Multiply two numbers and answer is 8
// console.log("==".repeat(20));
// console.log(16 / 2); //To Divide a number with another anad answer is 8
// console.log("==".repeat(20));

//Question 9: Favorite Number: Store your favorite number in a variable. 
//Then, using that variable, create a message that reveals 
//your favorite number. Print that message.

//Program
//let favoriteNumber: number = 8;
//console.log(`This is my Favorite number: ${favoriteNumber}`);

// Question 10: Adding Comments: Choose two of the programs you’ve written,
// and add at least one comment to each. If you don’t have anything 
//specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.

//Program Date: 22/04/2024
//The following progrm will print favorite number with the same message.
// let favoriteNumber: number = 8;
// console.log(`This is my Favorite number: ${favoriteNumber}`);

// Question 11: Names: Store the names of a few of your friends in a 
//array called names. Print each person’s name by accessing each element in 
//the list, one at a time.

//Program
// let names: string[]= ["Aamir", "Ahsan", "Kamran", "Imran", "Tariq"];

// for ( let i= 0; i < names.length; i++){
//     console.log(names[i]);
// }

// Question 12:Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, print a message to them. 
//The text of each message should be the same, but each message should be 
//personalized with the person’s name.

//Program
// let names: string[]= ["Aamir", "Ahsan", "Kamran", "Imran", "Tariq"];

// for ( let i= 0; i < names.length; i++){
//      console.log(`Hi dear, ${names[i]} Eid Mubarak`);
// }

// Question 13:Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”

//Program
// let transportsName: string[]=["BMW car", "Suzuki Motorbike","Harculus Bicyle"];
// transportsName.forEach(transportsName =>{
//     console.log(`I would like to own a ${transportsName}.`)
// })

// Question 14:Guest List: If you could invite anyone, living or deceased, 
//to dinner, who would you invite? Make a list that includes at least 
//three people you’d like to invite to dinner. Then use your list to 
//print a message to each person, inviting them to dinner.

//Program with for loop and with .forEach()function.
//let guestList: string[] = ["Amir", "Imran", "Kamran", "Afzal"];
//for (let i = 0; i < guestList.length; i++){
  //  console.log(`Hi, ${guestList[i]} Your are cordially invited to have dinner with us tonight`);
//}
//guestList.forEach(guestList => {
  //  console.log(`Hi dear, ${guestList} You are cordially invited to have dinner with us toningh`);
//})
// Question 15:Changing Guest List: You just heard that one of your guests
// can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//Program
// let guestList: string[] = ["Amir", "Imran", "Kamran", "Afzal"];
// let unavailabelGuest: string = "Imran";
// console.log(`${unavailabelGuest} is busy and can't attened the dinner tonight`)
// let newGuest: string = "Izhan";
// guestList[guestList.indexOf(unavailabelGuest)] = newGuest;

// guestList.forEach(guestList => {
//     console.log(`Hi dear, ${guestList} Your are cordially invited to have dinner with us toninght.`);
// })

//Question 16: More Guests: You just found a bigger dinner table, so now more 
//space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end 
//of your program informing people that you found abigger dinner table.
//Add one new guest to the beginning of your array.Add one new guest to 
//the middle of your array.Use append() to add one new guest to the end of 
//your list.Print a new set of invitation messages, one for each person in 
//your list.

//Program
//  let guestList: string[] = ["Amir", "Imran", "Kamran", "Afzal"];
//  guestList.forEach(guestList => {
//      console.log(`Hi dear, ${guestList} Your are cordially invited to have dinner with us toninght.`);
//  });

//     console.log("We have found a bigger table for dinner, Now we can invite more guests");
//      guestList.unshift("Izhan", "Farhan", "Mubeen");
//      guestList.forEach(guestList => {
//       console.log(`Hi dear, ${guestList} Your are cordially invited to have dinner with us toninght.`);
//      }) 


//Question 17:Shrinking Guest List: You just found out that your new dinner 
//table won’t arrive in time for the dinner, and you have space for only 
//two guests.
//• Start with your program from Exercise 16. Add a new line that prints a 
//message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in 
//your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite 
//them to dinner.
//• Print a message to each of the two people still on your list, letting them
// know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end
//of your program.

//Program
// let guestList: string[] = ["Amir", "Imran", "Kamran", "Afzal"];
//  guestList.forEach(guestList => {
//      console.log(`Hi dear, ${guestList} Your are cordially invited to have dinner with us toninght.`);
//  });

//   console.log("We apologise, Unfortunately! we can only invite only two person for dinner");
//   while (guestList.length > 2){
//    let removedGuest = guestList.pop();
//     console.log(`Sorry ${removedGuest} we cannot invite you tonight for dinner`);
//   }
//     guestList.forEach(guestList => {
//       console.log(`Dear  ${guestList} you are still invited to have dinner with us tonight`);
//     });
//       guestList.splice(0 , guestList.length);
//       console.log(guestList);


//Question 18:Seeing the World: Think of at least five places in the world 
//you'd like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//Program
// let places: string[] = ["KabaTullah", "MadinaAlmunawara", "Baghdad", "Najaf", "St"];

// for (let i =0; i < places.length; i++) {
//   console.log(`I would like to visit,  ${places[i]}`)
// }
// console.log("Original Order:" , places);
// console.log("Alphabetical Order:" , [...places].sort());
// console.log("Original Order:" , places);
// console.log("Reverse Alphabetical Order:" , [...places].sort().reverse());
// console.log("Original Order:" , places);
// places.reverse();
// console.log("Reversed Original Order:" , places);
// places.sort();
// console.log("Alphabetical Order:" , places);
// places.reverse();
// console.log("Reversed Alphabetical Order:" , places);

// Question 19:Dinner Guests: Working with one of the programs from 
//Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.

//Program
//Program with for loop and with .forEach()function.
// let guestList: string[] = ["Amir", "Imran", "Kamran", "Afzal"];
// for (let i = 0; i < guestList.length; i++){
//    console.log(`Hi, ${guestList[i]} Your are cordially invited to have dinner with us tonight`);
// }
// guestList.forEach(guestList => {
//    console.log(`Hi dear, ${guestList} Your are cordially invited to have dinner with us toningh`);
// })
// console.log(`There are ${guestList.length}  members at todays dinner`);

// Question 20:Think of something you could store in a array. For example, 
//you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing 
//these items.

//Program
// let newplaces: string[] = ["Kashmir", "Nanga Parbat", "khunjrab", "Shangrilla"];
// for (let i = 0; i< newplaces.length; i++) {
//   console.log(`I would like to go ${newplaces[i]}`);
// }
// console.log("List of wonderful places:" ,[...newplaces] )

// Question 21: They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

//Program

// let car: {title: string; maker: string; model: number } = {
//   title : "Yaris",
//   maker: "Toyota",
//   model: 2022

// };
// console.log(`About car the ${car.title}  of ${car.maker} is the best selling car 
// of the year ${car.model}`)

//Question 22:Intentional Error: If you haven’t received an array index error in one
// of your programs yet, try to make one happen. Change an index in one of 
//your programs to produce an index error. Make sure you correct the error 
//before closing the program.

//Program
// let family: string[] = ["Father", "Mother", "Brothers", "Sisters"];
// console.log(family[5]); //an Error occur "undefined"
// console.log(family[0]); // Error removed

//Question 23:Conditional Tests: Write a series of conditional tests. 
//Print a statement describing each test and your prediction for the results 
//of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand 
// why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and 
// another 5 tests evaluate to False.

//Program
// let car:string = "subaru";
// console.log("is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// console.log("is car == 'toyota' ? I predict False.");
// console.log(car == 'toyota');
// console.log("is car == 'honda' ? I predict False.");
// console.log(car == 'honda');
// console.log("is car != 'subaru'? I predict False.");
// console.log(car == 'honda');
// console.log("is car != 'subaru'? I predict True.");
// console.log(car != 'honda');

//Question 24:More Conditional Tests: You don’t have to limit the number 
//of tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, 
//and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

//Program
// let fruit:string = "apple"; //to compare a string with string.
// console.log(fruit == "apple");// same spelling with lowercase true.
// console.log(fruit == "Apple");// same spelling but first letter uppercase false.
// console.log(fruit.toLowerCase() =="apple");//same spelling with toLowerCase method true.
// console.log(fruit.toUpperCase()== "Apple");//same spelling with toUpperCase method false.
// console.log(fruit.toLowerCase() =="Apple");//false
// console.log(fruit.toUpperCase() =="apple");//false
// let num:number = 20;
// console.log(num == 10+10); //true
// console.log(num == 10+20); //false
// console.log(num > 10); //true
// console.log(num < 10); //false
// console.log(num >= 20); //true two conditional statement if anyone true ans.true
// console.log(num >= 10); //true
// console.log(num <= 20); //true
// console.log(num <= 10); //false
// console.log(true && false);
// console.log(true || false);

// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log("is banana in fruits? ");
// console.log(fruits.includes("banana"));
// console.log("is banana not in fruits? ");
// console.log(!fruits.includes("banana"));

// Question 25:Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 
//'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. 
//If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another 
//that fails. (The version that fails will have no output.)

//Program
// let alien_color: string = "green";
// if (alien_color == "green"){
//   console.log("you earn 10 points")
// }

// let alien_color: string = "yellow";
// if (alien_color == "green"){
//   console.log("you earn 10 points")
// }

//Question 26:
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
//and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just 
//earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player 
//just earned 10 points.
//• Write one version of this program that runs the if block and another 
//that runs the else block.

//Program
// let alien_color: string = "yellow";
//  if (alien_color == "green"){
//    console.log("you earn 10 points")
//  } else console.log("you earned 15 points")
// let alien_color: string = "green";
//   if (alien_color == "green"){
//     console.log("you earn 10 points")
//   } else console.log("you earned 15 points")


//Question 27:
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an 
//if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

//Program
// let alien_color: string = "green";
//   if (alien_color == "green"){
//     console.log("you earned 5 points")
//   } else if (alien_color == "yellow"){
//   console.log("you earned 10 points")
//   } else console.log ("you earned 15")

// let alien_color: string = "yellow";
//   if (alien_color == "green"){
//     console.log("you earned 5 points")
//   } else if (alien_color == "yellow"){
//   console.log("you earned 10 points")
//   } else console.log ("you earned 15")

  // let alien_color: string = "red";
  // if (alien_color == "green"){
  //   console.log("you earned 5 points")
  // } else if (alien_color == "yellow"){
  // console.log("you earned 10 points")
  // } else console.log ("you earned 15")


//Question 28:Stages of Life: Write an if-else chain that determines 
//a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that 
//the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message 
//that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message 
//that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message 
//that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message 
//that the person is an adult.
//• If the person is age 65 or older, print a message that the person is 
//an elder.

//Program
// let age: number = 25;

//  if (age < 2) {
//     console.log("The person is a baby");
//  } else if (age  < 4){
//     console.log("The person is a toddler");
//  }  else if (age < 13){
//     console.log("The person is a kid");
//  }    else if (age  < 20){
//     console.log("The person is a teenager");
//  } else if (age  < 65){
//     console.log("The person is an adult");
//  }    else if (age >= 65){
//     console.log("The person is an elder");
//  } 

 //Question 29:Favorite Fruit: Make a array of your favorite fruits, 
 //and then write a series of independent if statements that check for 
 //certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits
//• Write five if statements. Each should check whether a certain kind 
//of fruit is in your array. If the fruit is in your array, the if block 
//should print a statement,such as You really like bananas!

//Program
// let favorite_fruits: string [] = ["Apple", "Banana", "Grapes", "Oranges"];

// if (favorite_fruits.includes("Apple")){
//   console.log("your favorite fruit is Apple");
// } if (favorite_fruits.includes("Banana")){
//     console.log("your favorite fruit is Banana");
// }   if (favorite_fruits.includes("Grapes")){
//       console.log("your favorite fruit is Grapes");
// }     if (favorite_fruits.includes("Oranges")){
//         console.log("your favorite fruit is Oranges");
// }       if (favorite_fruits.includes("Guava")){
//            console.log("your favorite fruit is Guava");
// }

//Question 30: Hello Admin: Make a array of five or more usernames, including 
//the name 'admin'. Imagine you are writing code that will print a greeting to
// each user after they log in to a website. Loop through the array, and print
// a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for 
//logging in again.

//Program
// let usernames: string [] =["admin", "user1", "user2", "user3", "user4", "user5"];

// usernames.forEach(usernames => {
//   if (usernames === "admin" ){
//     console.log("Hello admin would you like to see status report");

//   } else console.log(`Hello! ${usernames}  Thanks for logging in again`); 
// })

//Question 31:No Users: Add an if test to Exercise 28 to make sure the list 
//of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct
// message is printed.

//Program
// let usernames: string [] =[];

//   if (usernames.length === 0 ){
//     console.log("We need some users");

//   } else  {
    
//   }
//Question 32:Checking Usernames: Do the following to create a program that 
//simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already 
//been used. If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that 
//the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 
//'JOHN' should not be accepted.

//Program
// let current_users: any[] = ["john", "michale", "amar", "anthony", "richard"];
// let new_users: any[] = ["sahil","ashraf","MICHALE", "JOHN", "Sharif"];
//   new_users.forEach(new_users => {
//     if (new_users.some(current_users => current_users.toLowerCase() === new_users.toLocaleLowerCase())) {
//         console.log(`${new_users} Please try with another name`);
//     }else 
//          {
//       console.log(`${new_users} is available `);
// }  })

//Question 33:Ordinal Numbers: Ordinal numbers indicate their position in an
// array, such as 1st or 2nd. Most ordinal numbers end in th, 
//except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending 
//for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.

//Program
// let ordinalNumbers: number[]= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  ordinalNumbers.forEach(ordinalNumbers => {
//   if (ordinalNumbers == 1){
//     console.log(`${ordinalNumbers}st`);}
//     else if (ordinalNumbers == 2){
//       console.log(`${2}nd`);
//     } else if (ordinalNumbers == 3){
//       console.log(`${3}rd`);
//     } else if (ordinalNumbers == 4){
//       console.log(`${4}th`);
//     } else if (ordinalNumbers == 5){
//       console.log(`${5}th`);
//     } else if (ordinalNumbers == 6){
//       console.log(`${6}th`);
//     } else if (ordinalNumbers == 7){
//       console.log(`${7}th`);
//     } else if (ordinalNumbers == 8){
//       console.log(`${8}th`);
//     } else if (ordinalNumbers == 9){
//       console.log(`${9}th`);
//     } else if (ordinalNumbers == 10){
//       console.log(`${10}th`);
//     }
//  })

//Question 34:Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print 
//the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza
//instead of printing just the name of the pizza. For each pizza you should
//have one line of output containing a simple statement like I like pepperoni
//pizza.
//• Add a line at the end of your program, outside the for loop, that states
//how much you like pizza. The output should consist of three or more lines
//about the kinds of pizza you like and then an additional sentence, such as
//I really love pizza!

//Program
// let pizzaFlavors: string[] = ["Fajita", "Afghani Tikka", "Pepperoni"];
//  for (let i= 0; i < pizzaFlavors.length; i++) {
//   console.log(`${pizzaFlavors[i]}`);
//  }
//  for (let i =0; i < pizzaFlavors.length; i++ ) {
//    console.log(`I like very much ${pizzaFlavors[i]} pizza flavor`);
// }
// console.log("I like to eat pizza, It is very healthy food we eat, ")


//Question 35:Animals: Think of at least three different animals that have a 
//common characteristic.Store the names of these animals in a list, and then 
//use a for loop to print out the name of each animal.
//• Modify your program to print a statement about each animal, such as
//A dog would make a great pet.• Add a line at the end of your 
//program stating what these animals have in common. You could print a 
//sentence such as Any of these animals would make a great pet!

//Program
// let animals: string[] = ["dog", "cat", "rabbit"];

// animals.forEach(animals => {
//   console.log(`A ${animals} would make a great pet`);
// })
//     console.log("Any of these animals would make a great pet");

//Question 36:T-Shirt: Write a function called make_shirt() that accepts 
//a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and 
//the message printed on it.Call the function.

//Program
// function make_shirt( size: string = "medium" , text:string = "Happy World"){
//   console.log(`make a T-Shirt of ${size} size with a text written on it ${text}`);
// }
// make_shirt()
// make_shirt("small", "newman" )

//Question 37:Large Shirts: Modify the make_shirt() function so that shirts 
//are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

//Program
// function make_shirt(size:string = "Large" , message:string ="I love TypeScript"){
//   console.log(`Please make a shirt of ${size} size with a message written on it ${message}`);
// }
// make_shirt();
// make_shirt("medium" ,);
// make_shirt("XL" , "TypeScript is my Passion");

//Question 38:Cities: Write a function called describe_city() that accepts 
//the name of a city and its country. The function should print a simple 
//sentence, such as Karachi is in Pakistan. Give the parameter for the 
//country a default value.Call your function for three different cities, 
//at least one of which is not in the default country.

//Program
// function describe_city(city:string = "Karachi", country:string = "Pakistan"){
//   console.log(`${city} is in ${country}.`);
// }
// describe_city();
// describe_city("Lahore" ,);
// describe_city("Delhi" , "India")

//Question 39: City Names: Write a function called city_country() that 
//takes in the name of a city and its country. The function should return a 
//string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the 
//value that’s returned.

//Program
// function city_country(city: string, country: string) :string {
//  return`${city} ${country}`
// }
// console.log(city_country("Karachi" , "Pakistan"));
// console.log(city_country("Delhi" , "India"));
// console.log(city_country("New York" , "America"));

//Question 40:Album: Write a function called make_album() that builds 
//a Object describing a music album. The function should take in an 
//artist name and an album title, and it should return a Object containing 
//these two pieces of information. Use the function to make three 
//dictionaries representing different albums. Print each return value to show 
//that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the
//number of tracks on an album. If the calling line includes a value for the 
//number of tracks, add that value to the album’s Object. Make at least one
// new function call that includes the number of tracks on an album.

//Program

// function make_album(artist: string , title: string , tracks: number){
//   let album = {artist , title , tracks};
//   if (tracks) {
//     album['tracks'] = tracks;

//   } return album;
// }
//   console.log(make_album("Atif Aslam" ,"song" ,1 ));
//   console.log(make_album("Alamgir" , "urdu song" ,3))

//Question 41:Magicians: Make a array of magician’s names. Pass the array 
//to a function called show_magicians(), which prints the name of 
//each magician in the array.

//Program
// let magician: string[] = ["Magician1" , "Magician2" , "Magician3" , "mag4"];
// function show_magicians( magician:string[] ) {
// magician.forEach(magician => {
//   console.log(magician);
// })
  
// } show_magicians(magician);

//Question 42:Great Magicians: Start with a copy of your program from Exercise
// 39. Write a function called make_great() that modifies the array of 
//magicians by adding the phrase the Great to each magician’s name. Call 
//show_magicians() to see that the list has actually been modified.

//Program
// let magician1: string[] = ["Magician1" , "Magician2" , "Magician3" , "mag4"];
// function make_great( magician1:string[] ) {
// magician1.forEach(magician1 => {
//   console.log(`${magician1} He is a great magician`);
// })
  
// } make_great(magician1);

//Question 43:Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store
//it in a separate array. Call show_magicians() with each array to show that 
//you have one array of the original names and one array with the Great added 
//to each magician’s name.


// let magician1:string []= ["samri", "goga" , "prithwi"];

//  function show_magicians( magician1:string[] ) {
//  magician1.forEach(magician1 => {
//    console.log(`${magician1} He is a  magician`);
//  });
  
//  } show_magicians(magician1);

//  function great_magician(magician1: string []){
//   return magician1.map(name =>`The Great ${name}`);

//  }
//     great_magician(magician1);
    
//     let copy_magician1: string []= magician1.slice();
//     console.log(copy_magician1);
//     let copy_great_magician = great_magician(copy_magician1);
//     console.log(copy_great_magician);
//     show_magicians(magician1);
//     show_magicians(copy_magician1);
//     console.log(great_magician);

//Question 44:Sandwiches: Write a function that accepts a array of 
//items a person wants on a sandwich. The function should have one 
//parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.

//Program
// function make_sandwich(...items: string[]){
//   console.log(`Make a sandwitch with  ${items.join(',')}.`);
// }
//   make_sandwich("cheese" , "ham");
//   make_sandwich("lettuce" , "Turkey" , "");
//   make_sandwich("cheese" , "ham");
  
//Question 45:Cars, Write a function that stores information about a car in 
//an Object.The function should always receive a manufacturer and a model 
//name. It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value 
//pairs, such as a color or an optional feature. Print the Object that’s 
//returned to make sure all the information was stored correctly.

//Program

// function make_car(manufacturer:string, model:string, ...options: any[]) {
//   let car ={ 
//     manufacturer: manufacturer,
//      model: model, 
// };
//    options.forEach(options => {
//     let [key, value] = options.split(":");
//     car[key.trim()] =  value.trim();

//    });

//    return car
// }
//     let myCar = make_car("Honda" , "Civic" , "color : red" , "year :2024 ");
//     console.log(myCar);