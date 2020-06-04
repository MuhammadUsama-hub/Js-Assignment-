// task#1
var a=10;
document.write("<h1>Result</h1>"+"The value of a is :"+a);
++a;
document.write("The value of ++a is :"+a);
document.write("Now The value of a is :"+a);
a++;
document.write("The value of a++ is :"+a);
document.write("Now The value of a is :"+a);
--a;
document.write("The value of --a is :"+a);
document.write("Now The value of a is :"+a);
a--;
document.write("The value of a-- is :"+a);
document.write("Now The value of a is :"+a);
// task#2
// stage1=pre decreement occurs in a
// stage2=predecrement occursin b then it will add with predecrement a
// stage3=there is pre increment occurs in b it will then add eith stage2
// stage4=there is post decrement occurs in b ..
// task#3
var name=prompt("Enter your name...");
alert("welcome to our site "+name);
// task#4
    var num=prompt("Enter a table of ...",5);
    var counter=1;
    while(counter<=10)
    {
        document.write(num+" x "+counter+"="+counter*num+"<br>");
        counter+=1;
    }
    // task#5
    var sub_1=prompt("enter english marks...");
    var sub_2=prompt("enter urdu marks...");
    var sub_3=prompt("enter math marks...");
    var total_marks=100;
    var percentage_1=(sub_1/total_marks)*100;
    var percentage_2=(sub_2/total_marks)*100;
    var percentage_3=(sub_3/total_marks)*100;
    var grand_total=300;
    var grand_obtain=sub_1+sub_2+sub_3;
    var garnd_percentafe=(grand_obtain/grand_total)*100;
    document.write("<table border='1px' bordercolor='black'><tr><th>Subject</th><th>Total Marks</th><th>Obtain Marks</th><th>Percentage</th>"+"</tr><tr><td>English</td><td>"+total_marks+"</td><td>"+sub_1+"</td><td>"+percentage_1+"%</td></tr><tr><td>Urdu</td><td>"+total_marks+"</td><td>"+sub_2+"</td><td>"+percentage_2+"%</td></tr><tr><td>Maths</td><td>"+total_marks+"</td><td>"+sub_3+"</td><td>"+percentage_3+"%</td></tr></table>");
    // task#6
    var sub_1=prompt("enter english marks...");
    var sub_2=prompt("enter urdu marks...");
    var sub_3=prompt("enter math marks...");
    var total_marks=100;
    var percentage_1=(sub_1/total_marks)*100;
    var percentage_2=(sub_2/total_marks)*100;
    var percentage_3=(sub_3/total_marks)*100;
    var grand_total=300;
    var grand_obtain=eval(sub_1)+eval(sub_2)+eval(sub_3);
    var garnd_percentage=(grand_obtain/grand_total)*100;
    document.write("<table border='1px' bordercolor='black'><tr><th>Subject</th><th>Total Marks</th><th>Obtain Marks</th><th>Percentage</th>"+"</tr><tr><td>English</td><td>"+total_marks+"</td><td>"+sub_1+"</td><td>"+percentage_1+"%</td></tr><tr><td>Urdu</td><td>"+total_marks+"</td><td>"+sub_2+"</td><td>"+percentage_2+"%</td></tr><tr><td>Maths</td><td>"+total_marks+"</td><td>"+sub_3+"</td><td>"+percentage_3+"%</td></tr><tr><td></td><th>"+grand_total+"</th><th>"+grand_obtain+"</th><th>"+garnd_percentage+"%</th></tr></table>");
   