function triangle()
{
    var s1 = parseFloat(document.getElementById("side1").value);
    var s2 = parseFloat(document.getElementById("side2").value);
    var s3 = parseFloat(document.getElementById("side3").value);

    var sum = (s1+s2+s3)/2; 
    var area = Math.sqrt(sum*((sum-s1)*(sum-s2)*(sum-s3)));
    if (s1>0 && s2> 0 && s3>0){
        if(s1+s2 > s3 && s1+s3>s2 && s2+s3>s1){
            if (area > 0){
                document.getElementById("triangle").innerHTML = area.toFixed(2);
            }else{
                document.getElementById("triangle").innerHTML = "Invalid Input";
            }
        }
        else{
            document.getElementById("triangle").innerHTML = "Sides of triangle are invalid";
        }
       
    }
    else{
        document.getElementById("triangle").innerHTML = "Invalid Input";
    }
    

}

function rectangle()
{
    var s1 = parseFloat(document.getElementById("length").value);
    var s2 = parseFloat(document.getElementById("width").value);
    if(s1 >0 && s2 >0){
        var area = s1*s2;
        document.getElementById("rectangle").innerHTML = area.toFixed(2);
    }
    else{
        document.getElementById("rectangle").innerHTML = "Invalid Input";  
    }

}

function circle()
{
    var r = parseFloat(document.getElementById("radius").value);
    if(r > 0){
        var area = (22/7)*r*r;
        document.getElementById("circle").innerHTML = area.toFixed(2);
    }else{
        document.getElementById("circle").innerHTML = "Invalid Input";
    }
}

window.onload = function() {
    document.getElementById('side1').value = '';
    document.getElementById('side2').value = '';
    document.getElementById('side3').value = '';
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('radius').value = '';
    }
