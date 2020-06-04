// task#1
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// task#2
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<3;i++)
{
    for(var j=0;j<4;j++)
    {
        document.write(matrix[i][j])
    }
    document.write("<br>");
}
// task#3
for(var i=1;i<11;i++)
{
    document.write(i+"<br>");
}


// task#4
var num=prompt("Enter number to show it's table...");
var length=prompt("Enter lrngth multiplication table...");
for(var i=1;i<=length;i++)
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>");
}
// task#5
var fruits=["apple","banana","mango","orange","strawberry"];
for(var i=0;i<5;i++)
{
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<5;i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

// task#6
// counting
document.write("Counting:");
for(var i=1;i<16;i++)
{
    document.write(i+",");
}
// Reverse Counting
document.write("Reverse Counting:");
for(var i=10;i>=1;i--)
{
    document.write(i+",");
}
// even counting
document.write("Even:");
for(var i=0;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i+",");
    }
}
// odd counting
document.write("Odd:");
for(var i=0;i<=20;i++)
{
    if(i%2!=0)
    {
        document.write(i+",");
    }
}
// series
document.write("Series:");
for(var i=0;i<=20;i++)
{
    if(i%2==0)
    {
        document.write(i+"K,");
    }
}
// task#7
var A=["cake","apple-pie","cookie","chips","patties"];
var user_choice=prompt("Welcome to ABC bakery what do you want to order sir/ma'amm");
var counter=0;
for(counter=0;counter<5;counter++)
{
    if(A[counter]==user_choice)
    {
        document.write(user_choice+" is available at index"+counter+" in our bakery");
        break;
    }
}
if(counter>=5)
{
    document.write("We are sorry ."+user_choice+" is not available at our bakery");
}
// task#8
var arr=[24,53,78,91,12];
var larger=arr[0];
for(var i=0;i<5;i++)
{
    if(arr[i+1]>larger)
    {
        larger=arr[i+1];
    }
}
document.write(larger+" is larger in array.");
// task#9
var arr=[24,53,78,91,12];
var smallest=arr[0];
for(var i=0;i<5;i++)
{
    if(arr[i+1]<smallest)
    {
       smallest=arr[i+1];
    }
}
document.write(smallest+" is larger in array.");
// task#10
var num=5;
for(var i=1;i<=20;i++)
{
    document.write(num*i+",");
}
