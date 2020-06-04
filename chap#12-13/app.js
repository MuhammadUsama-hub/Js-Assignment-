
// task#1
var char=prompt("Enter Any number or character...");
if(char>=65 && char<=90)
{
    alert(char+" it is an uppercase letter...");

}
else if(char>=97 && char<=122)
{
    alert(char+" it is an lowercase letter...");
}
else if(char>=48 && char<=57)
{
    alert(char+" it is a number...");
}

// task#2
var num_1=prompt("Enter first number...");
var num_2=prompt("Enter second number...");
if(num_1>num_2)
{
    alert(num_1+" is the larger.. ");
}
else if(num_1==num_2)
{
    alert(" They are Equal ");
}
else
{
alert(num_2+" is the larger...")
}
// task#3
var num=prompt("Enter any number...");
if(num>0)
{
    alert("It is a positive number");
}
else if(num<0)
{
    alert("It is a negative number");
}
else if(num==0)
{
    alert("It is a zero number");
}
// task#4
var char=prompt("Enter any letter...");
char=char.toLowerCase();
if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u')
{
    alert("yes!it is a vowel");
}
else 
{
    alert("No!it is not a vowel");
}
// task#5
var password=prompt("enter your password...");
if(password==null)
{
    alert("plz!enter your password...")
}
else if(password=='ali12345')
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect Password!");

}

// task#6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else
{
greeting = "Good evening";
}
// task#7
var time=prompt("Enter time in 24-hour format...");
if(time>=0000 && time<1200)
{
    alert("Good Morning!");
}
else if(time>=1200 && time<1700)
{
    alert("Good afternoon!");
}
else if(time>=1700 && time<2100)
{
    alert("Good evening!");

}
else if(time>=2100 && time<=2359)
{
    alert("Good night");
}
