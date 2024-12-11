//Q#1

//Write a program that displays current date and time in
//your browser
let currentDate = new Date();
document.write (`Current Date : ${currentDate}<br>`);

// Q#2
// Write a program that alerts the current month in words.
// For example December.


// document.write('Displays current Month');

let Today = new Date();
let monthNames = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
];
let currentMonth = monthNames[Today.getMonth()];
document.write(`${currentMonth}`);

// Q#3
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// document.write('Displays current Day');
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
 var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay] ;
document.write(`; ${nameOfToday}`);


// Q#4
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today

let now_1 = new Date();

let day = now_1.getDay(); 
if (day === 0 || day === 6) {
    document.write(`Message: It's Fun day!<br>`);
} else {
    document.write("Message: It's a regular day!<br>");
}

// Q#5
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
let monthDays= new Date();

let date_1 = monthDays.getDate(); 

 if (date_1 < 16) {
  document.write('First fifteen days of the month<br>');
 } else {
 document.write('Last days of the month.<br>');
 }
//  Q#6
//  . Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let currentDate_1 = new Date();
document.write(`CURRENT DATE: ${currentDate_1}<br>`);

let millisecondsSinceEpoch = currentDate_1.getTime();

let minutesSinceEpoch = millisecondsSinceEpoch / 60000;
document.write(`${Math.floor(minutesSinceEpoch)} minutes since midnight, Jan. 1, 1970<br>`);

// Q#7
// 7. Write a program that tests whether it's before noon and
///alert “Its AM” else “its PM”.

let now_2 = new Date();
document.write(`CURRENT DATE: <b>${now_2}</b><br>`);

let hours = now_2.getHours(); 
document.write(`CURRENT Hours: ${hours} hrs.<br>`);

if (hours < 12) {
    document.write('Result: It\'s AM.<br>'); 
} else {
    document.write('Result: <b>It\'s PM.');
}

// Q#8
// . Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
laterDat

let laterDate = new Date(2020, 11, 31); 
document.write(`Later Date: ${laterDate}<br>`);


// Q#9
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let ramadanStartDate = new Date(2015, 5, 18); 

let currentDate_2 = new Date();

// // Calculate the difference in milliseconds
let differenceInMilliseconds = currentDate_2 - ramadanStartDate;

// Convert milliseconds to days (1 day = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours)
let daysSinceRamadan = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

document.write(`Result: ${daysSinceRamadan} days have passed since 1st Ramadan, 2015</br>`);

// Q#10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

 let referDate = new Date(2015, 11, 5); 
document.write(`Reference Date: ${referDate}</p>`);

 let start = new Date(2015, 0, 1);
 document.write(`Starting Date: ${start}`); 

// // Calculate the difference in milliseconds
let differInMilliseconds = referDate - start;

// Convert milliseconds to seconds
let secondsElapsed = Math.floor(differInMilliseconds / 1000);
document.write(`Result: ${secondsElapsed} seconds have passed since the beginning of 2015.</br>`);

// Q#11
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

let currentDate_3 = new Date();
document.write(`Current Date: ${currentDate_3} <br/>`); 

let currentHours = currentDate_3.getHours();
document.write(`Current Hours: ${currentHours} hours to go <br/>`); 

currentDate_3.setHours(currentHours + 1);
document.write(`Updated Date and Time: ${currentDate_3}`);

// Q#12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let currentDate_4 = new Date();
document.write(`${currentDate_4}`); 

// Alert the date 100 years back
alert(`Date 100 years back: ${currentDate_4}`);

// Q#13
// . Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

let age = prompt("Enter your age:");
document.write(`Your age is: <b>${age}`);

// Current year
let currentYear = new Date().getFullYear();

// Birth year
let birthYear = currentYear - age;

document.write(`Your birth year is: <b>${birthYear}<br>`);

// Q#14
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

let customerName = "Kainat Haq"; 
let current_Month = "October"; 
let numberOfUnits = 190; 
let chargesPerUnit = 25; 

// Calculation
let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
let latePaymentSurcharge = 50;
let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

document.write(`Customer Name:${customerName}><br>`);
document.write(`Number of Units: ${numberOfUnits}<br>`);
document.write(`Current Month: ${current_Month}<br>`);
document.write(`<b>Charges per Unit: ${chargesPerUnit.toFixed(2)}<br>`);
document.write(`Net Amount Payable (within Due Date): ${netAmountPayable}<br>`);
document.write(`Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}<br>`);
document.write(`Gross Amount Payable (after Due Date): ${grossAmountPayable}<br>`);


