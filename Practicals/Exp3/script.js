function reverse()
{
    var s1 = document.getElementById("string1").value;
    document.getElementById("rev").innerHTML= s1.split("").reverse().join("");
}

function is_pal()
{
    var s1 = document.getElementById("string1").value;
    var s2 = s1.split("").reverse().join("");
    if(s1 === s2)
    document.getElementById("pal").innerHTML = "Yes";
    else 
    document.getElementById("pal").innerHTML = "No";
}

function replaced()
{
    var s1 = document.getElementById("string3").value;
    var c1 = document.getElementById("char1").value;
    var c2 = document.getElementById("char2").value;
    var newstr = s1.replace(c1,c2);
    document.getElementById("rep").innerHTML = newstr;
}

function reverse(){
var s1=document.getElementById("s").value;

document.getElementById("display1").innerHTML= s1.split("").reverse().join("");
}