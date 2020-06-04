// task#1
var city=prompt("Enter your city name...");
city=city.toLowerCase();
if(city=='karachi')
{
    alert("Welcome to the city of lights!")
}
// task#2
var gender=prompt("Enter your gender...");
gender=gender.toLowerCase();
if(gender=='male')
{
alert("Good Morning Sir");
}
else
{
    alert("Good Morning Ma'am");
}
// task#3
var color=prompt("Enter road colorl...");
color=color.toLowerCase();
if(color=='red')
{
    alert("Must Stop");
}
else if(color=='yellow')
{
    alert("Ready to Move");
}
else if(color=='green')
{
    alert("Move Now");
}
// task#4
var remaining_fule=prompt("Enter your car fule in liters..");
if(remaining_fule<0.25)
{
    alert("Please refill the fuel in your car");
}
// task#5
// answers(True,True,True,costs equals,True,Car is smaller than cat,);
// task#6
var total_marks=prompt("Enter total marks of three subjects...");
var obt_marks=prompt("Enter obtaine marks of three subjrcts...");
var percentage=(obt_marks/total_marks)*100;
if(percentage>=80.0)
{
    document.write("<h1>Marks Sheet</h1>Total Marks:"+total_marks+"<br>Obtained Marks:"+obt_marks+"<br>Percentage"+percentage+"%<br>Grade:A-one<br>Remarks:Excellent");

}
else if(percentage>=70.0);
{
    document.write("<h1>Marks Sheet</h1>Total Marks:"+total_marks+"<br>Obtained Marks:"+obt_marks+"<br>Percentage"+percentage+"%<br>Grade:A<br>Remarks:Good");
}
else if(percentage>=60)
{
    document.write("<h1>Marks Sheet</h1>Total Marks:"+total_marks+"<br>Obtained Marks:"+obt_marks+"<br>Percentage"+percentage+"%<br>Grade:B<br>Remarks:You need to improve");

}
else
{
    document.write("<h1>Marks Sheet</h1>Total Marks:"+total_marks+"<br>Obtained Marks:"+obt_marks+"<br>Percentage"+percentage+"%<br>Grade:Fail<br>Remarks:Sorry");
}
// task#7
var secter_num=5;
var guess_num=prompt("Guess a number in range of 1to10..");
if(guess_num==secter_num)
{
    document.write("Bingo! Correct answer");
}
else if(guess_num==1)
{
    document.write("Close enough to the correct answer");
}
// task#8
var num=prompt("Enter any positive integer number..");
if(num%3==0)
{
    alert("Yes!Entered number is divisible by 3");
}
else
{
    alert("No!Entered number is not divisible by 3");

}
// task#9
var num=prompt("Enter any positive integer number...");
if(num%2==0)
{
    document.write("It is an even number");
}
else
{
    document.write("It is an odd number");
}
// task#10
var temp=prompt("Enter current temperature...");
if(temp>40.0)
{
    alert("It is too hot outside");
}
else if(temp>30.0);
{
    alert("The Weather today is Normal");
}
else if(temp>20.0)
{
alert("Today’s Weather is cool");
}
else if(temp>10.0)
{
alert("OMG! Today’s weather is so Cool");
}
// task#11
var num_1=prompt("Enter First number...");
var num_2=prompt("Enter second number...");
var op=prompt("Enter operator...");
switch(op)
{
    case '+':
        document.write(num_1+"+"+num_2+"="+(num_1+num_2));
         break;
    case '-':
        document.write(num_1+"-"+num_2+"="+(num_1-num_2));
        break;
    case '*':
        document.write(num_1+"*"+num_2+"="+(num_1*num_2));
        break;
    case '/':
        document.write(num_1+"/"+num_2+"="+(num_1/num_2));
        break;
    case '%':
         document.write(num_1+"*"+num_2+"="+(num_1*num_2));
         break;
    default:
        alert("You have entered an invalid operator..");

}
