// QUESTION 01) Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName = prompt("enter your first name");
// let secondName = prompt("enter your secong name");
// let fullName = `Assalam o Alaikum, Good Morning ${firstName} ${secondName}`
// alert(fullName)

// QUSTION 02) Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// let favoriteMobilephone = prompt("enter your favorite mobile phone model");
// let lengthNum = favoriteMobilephone.length
// document.write(`My favorite phone is: ${favoriteMobilephone} <br/> Length of string: ${lengthNum}`)

// QUESTION 03)Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// let country = "Pakistani"
// let findIndex = country.indexOf("n")
// document.write(`String: ${country} <br/> Indexof 'n': ${findIndex}`)

// QUESTION 04)Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// let greet = "Hello World";
// let findLastindexOf = greet.lastIndexOf("l");
// document.write(`String: ${greet} <br/> Last indexOf 'l' ${findLastindexOf}`)

// QUESTION 05)Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// let country = "Pakistani";
// let findIndexOf = country.charAt(3);
// document.write(`String: ${country} <br/> Character at index 3: ${findIndexOf}`)


// QUESTION 06) Repeat Q1 using string concat() method.

// let firstName = prompt("enter your first name");
// let secondName = prompt("enter your secong name");
// alert(`Good morning ${firstName.concat(secondName)}`)

// QUESTION 07)Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// let city = "hyderabad";
// document.write(`City: ${city} <br/> after replacment: ${city.replace("hyder", "islam")}`)

// QUESTION 08)Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(`${message.replaceAll("and","&")}`)

// QUESTION 09)Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// let convert = "472";
// document.write(`Value: ${convert} <br/> TypeOf: ${typeof convert} <br/> Value: ${+convert} <br/> TypeOf: ${typeof +convert}`)

// QUESTION 10)Write a program that takes user input. Convert and show the input in capital letters.

// let convertInUppercase = prompt("Enter a word to captilize it");
// document.write(`User input: ${convertInUppercase} <br/> Upper case: ${convertInUppercase.toUpperCase()}`)

// QUESTION 11)Write a program that takes user input. Convert and show the input in title case.

// let convertInUppercase = prompt("Enter a word to captilize it");
// document.write(`User input: ${convertInUppercase} <br/> Title case: ${convertInUppercase.charAt(0).toUpperCase() + convertInUppercase.slice(1)}`)


// QUESTION 12)Write a program that converts the variable num to string.

// var num = 35.36 ;
// document.write(`Number: ${num} <br/> Result: ${num.toString().replace(".", "")}`)

// QUESTION 13)Write a program to take user input and store username in a variable. If the username contains any special symbolamong [@ . , !], prompt the user to enter a valid username.For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let userName = prompt("enter your name: ");

// for(let i=0; i<userName.length; i++){
//     let charCode = userName.charCodeAt(i);
//     if(charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64 ){
//         console.log("enter a valid variable");
//         break;
//     }
// }

// QUESTION 14)You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

// let bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
// let userAsk = prompt("welcome to abc bakkery. what do you want to order sir/ma'am?").toLowerCase()

// if(bakkeryItems.includes(userAsk)){
//     alert(`${userAsk} is available at index ${bakkeryItems.indexOf(userAsk)} in our bakkery`)
// }
// else{
//     alert(`We are sorry.${userAsk} is not available in our bakkery`)
// }

// QUESTION 15) Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// QUESTION 16)Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = "University of Karachi";
// let splitted = university.split('')
// for(let i of splitted){
//     console.log(`${i}`)
// }

// QUESTION 17)Write a program to display the last character of a user nput.

// let userinput = prompt("write any word to find last character of word")
// document.write(`User input: ${userinput} <br/> Last character of input ${userinput.charAt(userinput.length-1)}`)

// QUESTION 18) You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

let givenString = "The quick brown fox jumps over the lazy dog";






