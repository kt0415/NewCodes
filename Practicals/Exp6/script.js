var Array=[];
var n;

function arrayip(){
    let arr=document.getElementById('arr').value;	
    Array=arr.split(',');
    var str="Array :"+Array;
    document.getElementById("res2").innerHTML=str;
    console.log(typeof(Array));
}
function del(){
    let val=document.getElementById('delete').value;
    var f=Array.indexOf(val); 	
    if(f==-1){
        var str="Value :"+val+" is not present in array";
        document.getElementById("res3").innerHTML=str;	
    }
    else{
        delete Array[f];
        var str="Value :"+val+" is deleted";
        document.getElementById("res3").innerHTML=str;		
    }	
}
function find(){
    var val=document.getElementById('fnd').value;
     var f=Array.indexOf(val);
    if(f==-1){
        var str="Value :"+val+" is not present in array";
        document.getElementById("res4").innerHTML=str;	
    }
    else{
        var str="Value :"+val+" is present in array at index "+f;
        document.getElementById("res4").innerHTML=str;	
    }
}
function Empty(){
    Array=[];
    document.getElementById("res5").innerHTML="Array is Emptied";
}
function Display(){
    var str="";
    for(var i=0;i<Array.length;i++){
        if(Array[i]!=undefined)
            str+=Array[i] + " ";
    }
    document.getElementById("res6").innerHTML=str;
}