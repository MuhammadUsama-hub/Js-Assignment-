// task#1
var students=[];
// task#2
var students="";
// task#3
var names=["Usama","Ali","Adnan"];
// task#4
var num=[0,1,2,3,4,5,6,7,8,9,10];
// task#5
var boolean=[true,false];
// task#6
var mix=[1,"Usama",2.5];
//task#7
var qualification=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
document.write("<h1>Qualifications:</h1>"+qualification[0]+"<br>"+qualification[1]+"<br>"+qualification[2]+"<br>"+qualification[3]+"<br>"+qualification[4]+"<br>"+qualification[5]+"<br>"+qualification[6]+"<br>"+qualification[7]);
// task#8
var names=["usama","ali","adnan"];
var scores=[320,220,320];
var total=500;
document.write("Score of "+names[0]+" is "+scores[0]+"<br>.Percentage:"+((scores[0]/total)*100)+"Score of "+names[1]+" is "+scores[1]+"<br>.Percentage:"+((scores[1]/total)*100)+"Score of "+names[2]+" is "+scores[2]+".Percentage:"+(scores[2]/total)*100);
// task#9
var colors=["Red","Green","Blue","white"];
document.write(colors[0]+"<br>"+colors[1]+"<br>"+colors[2]+"<br>"+colors[3]);
var color_choise=prompt("What color to add in beinging og array...");
colors.unshift(color_choise);
document.write("Now The array becomes:"+colors);
var color_choise=prompt("What color to add in the end of array...");
colors.push(color_choise);
document.write("Now The array becomes:"+colors);
colors.unshift("Seagreen","Mergenda","Gry");
document.write("Now The array becomes:"+colors);
colors.shift();
document.write("Now The array becomes:"+colors);
colors.pop();
document.write("Now The array becomes:"+colors);
colors.splice(2,0,"purple","black","gry");
document.write("Now The array becomes:"+colors);
var del_color=prompt("enter index number from where you want to delete colors...");
var quantity_color=prompt("how many colors you want to delete...");
colors.splice(del_color,quantity_color);
document.write("Now The array becomes:"+colors);
// task#10
var students_scores=[320,230,480,120];
document.write("Scores of students:"+students_scores);
students_scores.sort();
document.write("Ordered Scores of students:"+students_scores);
// task#11
var cities=["karachi","islamabad","lahore","peshawer","quetta"];
document.write("Cities list:<br>"+cities+"Selected cities list:<br>"+cities[:3]);
// task#12
var arr = ["This","is","my","cat"];
document.write("<h1>Array</h1>"+arr+"<br>String:<br>"+arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]);
// task#13
var devices=["keyboard","mouse","printer","moniter"];
for(var i=0;i<4;i++)
{
    document.write("Out:<br>"+devices[i]+"<br>");
}
// task#14
var devices=["keyboard","mouse","printer","moniter"];
for(var i=3;i>=0;i--)
{
    document.write("Out:<br>"+devices[i]+"<br>");
}
// task#15
var mobile=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select name='mobile' id=''>Companies<option value=''>"+mobile[0]+"</option><option value=''>"+mobile[1]+"</option><option value=''>"+mobile[2]+"</option><option value=''>"+mobile[3]+"</option><option value=''>"+mobile[4]+"</option><option value=''>"+mobile[5]+"</option></select>");
