// task#1
var num_1=prompt("Enter first number");
var num_2=prompt("Enter second number");
var result=num_1+num_2;
document.write("Sum of "+num_1+" and "+num_2+" is "+result);
// task#2
var num_1=prompt("Enter first number it must larger than other");
var num_2=prompt("Enter second number");
var result=num_1-num_2;
document.write("Sum of "+num_1+" and "+num_2+" is "+result);

var num_1=prompt("Enter first number");
var num_2=prompt("Enter second number");
var result=num_1*num_2;
document.write("Sum of "+num_1+" and "+num_2+" is "+result);

var num_1=prompt("Enter first number");
var num_2=prompt("Enter second number");
var result=num_1%num_2;
document.write("Sum of "+num_1+" and "+num_2+" is "+result);
// task#3
var num;
document.write("Variable after variable declaration is "+num);
var num_1=5;
document.write("Initial Value :"+num_1);
num_1+=1;
document.write("Value after increment is :"+num_1);
num_1=num_1+7;
document.write("Value after addition is :"+num_1);
num_1-=1;
document.write("Value after decrement is :"+num_1);
num_1=num_1%3;
document.write("The remainder is :"+num_1);
// task#4
 var ticket=600;
 document.write("Total cost to buy 5 tickets to a movie is "+ticket*5+"PKR");
//  task#5
var num=prompt("Enter a table of..");
var limit=prompt("Enter a limit of table..");
var counter=1;
while(counter<=limit)
{
    document.write(num+"x = "+(num*counter));
    counter+=1;
}
// task#6(celsius to fahrenheit)
var temp_celsius=prompt("Enter temperature..");
var temp_fahr=(temp_celsius*9.0/5.0)+32.0;
document.write(temp_celsius+"<sup>0</sup>C is "+temp_fahr+"<sup>0</sup>F");

// (fahrenheit to celsius)
var temp_fahr=prompt("Enter temperature..");
var temp_celsius=(temp_fahr-32.0)*5.0/9.0;
document.write(temp_fahr+"<sup>0</sup>F is "+temp_celsius+"<sup>0</sup>C");
// task#7
var item_1_quantity=3;
var item_2_quantity=7;
var item_1_price=650;
var item_2_price=100;
var shipping_charges=100;
var total=(item_1_quantity*item_1_price)+(item_2_quantity*item_2_price)+shipping_charges;
document.write("<h1>Shopping</h1>"+"Price of item 1 is "+item_1_price+"<br>Quantity of item 1 is "+item_1_quantity+"<br>Price of item 2 is "+item_2_price+"<br>Quantity of item 2 is "+item_2_quantity+"<br>Shipping Charges is "+shipping_charges+"<br><hr> Total amount ="+total+"Rs" );
// task#8
var total_marks=prompt("Enter your total marks..");
var obt_mark=prompt("enter your obtained marks..");
var percentage=(obt_mark/total_marks)*100.0;
document.write("<h1>Mark Sheet</h1>"+"Total Marks ="+total_marks+"<br>Obtained Marks ="+obt_mark+"<br><br>Percentage ="+percentage+"%");
// task#9
var total_currency=(10.0*104.80)+(25.0*28);
document.write("<h1>Currency in PKR</h1>"+"Total Currency in PKR:"+total_currency);
// task#10
var Num=(5+5*10)/2;
// task#11
var current_year=prompt("Enter current year..");
var birth_year=prompt("Enter your birth year..");
var age=current_year-birth_year;
document.write("<h1>Age Calculator</h1>"+"Current Year:"+current_year+"<br>Birth year:"+birth_year+"<br>Your age is "+age);

// task#12
var R_circle=prompt("enter the radius of circle...");
var C_circle=2.0*3.142*R_circle;
var A_circle=3.142*(R_circle**2);
document.write("<h1>The Geometrizer</h1>"+"Radius of circle is:"+R_circle+"<br>Circumference of circle is :"+C_circle+"<br>Area of circle is :"+A_circle);
// task#13
var Favourite_snack=prompt("Enter your favourite snack...");
var age_current=prompt("Enter your current age...");
var age_max=prompt("Enter your maximum age...");
var per_day_snack=prompt("Enter amount of snacks pr=er day...");
var total=(age_max-age_current)*per_day_snack;
document.write("<h1>The LifeTime Supply Calculator</h1>"+"Favourite Snack:"+Favourite_snack+"<br>Current Age:"+age_current+"<br>Etimated Maximum Age"+age_max+"<br>Amount of snacks perday:"+per_day_snack+"<br>You will need"+total+" "+Favourite_snack+" to last you until the rip old agr of "+age_max);
