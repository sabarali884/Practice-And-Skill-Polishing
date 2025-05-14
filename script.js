/*var userNumberValue = 123 ;
console.log(userNumberValue);

var userName1 = "Sabar Ali"
console.log(userName1);

var userName2 = `456 ${userName1}`;
console.log(userName2);

var a = 10;
var b = 20;
var c = a+b;
console.log(c);

c = a-b;
console.log(c);

c = a*b;
console.log(c);

c = a/b;
console.log(c);

c = a+4+10-5*2/2+b;
console.log(c);

c = 2*a+4-a/b-1;
console.log(c);

c = a%7;
console.log(c);

c = 7%a;
console.log(c);

c = 2%5+3*2-1/2;
console.log(c);

c = 2%(5+3)*2-1/2;
console.log(c);


/*Assignment Operators*/

var num = 10;
num += 5;
num -= 5;
num *= 2;
num /= 4;
num %= 5;
console.log(num);


/*Comparison Operator*/
/*Answer = Bullean (True/False)*/

/*var a = '10';
var b = '20';
var c = a==b;
console.log(c);

var a = '20';
var b = '20';
var c = a==b;
console.log(c);

/*Not equal to */

/*var a = 20;
var b = 20;
var c = a != b;
console.log(c);

/* "===" used to check value with data type*/

/*var a = "20";
var b = 20;
var c = a===b;
console.log(c);


/*Logical Operatord
// , && , || */

//Logical Operator AND (&&)
//T && T => T
//T && F => F
//F && T => F
//F && F => F

//Logical Operator OR (||)
//T || T => T
//T || F => T
//F || T => T
//F || F => F 

//Logical Operator NOT (!)
// !T => F


//Ternary Operator 
// ?: 
/*var result = 10 > 5 ? "True" : "False" ;
console.log(result);

var result2 = 2 * 2 >= 5 ? "Sabar" : "Ali" ; 
console.log(result2); 

var name = "Sabar"
var result3 = 2 * 2 >= 4 ? name : "Ali" ; 
console.log(result3);

//Birwise Operator 
//.& , .| , .~ , .^ , .<< , .>> 


var userInput = "4";
if(userInput % 2 == 0){
    console.log("Hello World")
}


var userNumber = prompt ("Enter A Number");
if(userNumber % 2 == 0){
    console.log("Number Is Even")
}
else{
    console.log("Number Is Odd")
}
*/

/*var userNumber1 = prompt ("Enter A Number");
if(userNumber1 == 0){
    console.log("Number Is Zero")
}
else if(userNumber1 % 2 == 0){
    console.log("Number Is Even")
}
else{
    console.log("Number Is Odd")
}

/*Write a Program That Take User Marks And Print The Grade Of The Student A, B, C, D, F*/

/*var userMarks = prompt ("Enter Your Marks");

if(userMarks > 100){
    console.log("Invalid Marks")
}
else if(userMarks >= 90 && userMarks <= 100){
    console.log("Your Grade Is A")
}else if(userMarks >= 80 && userMarks < 90){
    console.log("Your Grade Is B") 
}
else if(userMarks >= 70 && userMarks < 80){
    console.log("Your Grade Is C")
}
else if(userMarks >= 60 && userMarks < 70){
    console.log("Your Grade Is D")
}
else if(userMarks >= 0 && userMarks < 60){
    console.log("Your Grade Is F")
}else{
    console.log("Invalid Marks")
}*/

/*Write A Program That Take Usrt Input 1, 2, 3, 4, 5, 6, 7 And Print The Day Of The Week*/

/*var userInput = prompt ("Enter A Number Between 1 To 7");
if(userInput == 1){
    console.log("Monday")
}else if(userInput == 2){
    console.log("Tuesday")
}
else if(userInput == 3){
    console.log("Wednesday")
}
else if(userInput == 4){
    console.log("Thursday")
}
else if(userInput == 5){
    console.log("Friday")
}
else if(userInput == 6){
    console.log("Saturday")
}
else if(userInput == 7){
    console.log("Sunday")
}
else{
    console.log("Invalid Input")
}*/

/*Write A Program That Take Usrt Input 1, 2, 3, 4, 5, 6, 7 And Print The Day Of The Week*/

var userInput = prompt ("Enter A Number Between 1 To 7");
switch(userInput){
    case '1':
        console.log("Monday")
        break;
    case '2':
        console.log("Tuesday")
        break;
    case '3':
        console.log("Wednesday")
        break;
    case '4':
        console.log("Thursday")
        break;
    case '5':
        console.log("Friday")
        break;
    case '6':
        console.log("Saturday")
        break;
    case '7':
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Input")
}