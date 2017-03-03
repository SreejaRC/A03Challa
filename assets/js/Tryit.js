function Even(){
    document.getElementById("result").innerHTML = " ";
    num1=parseInt($("#lowerlimit").val());
    num2=parseInt($("#upperlimit").val());
    var i;
    for(i=num1;i<=num2;i++){
        if ((i%2)==0)
            document.getElementById("result").innerHTML += i + "<br/>";
    }
}
function Odd(){
    document.getElementById("result").innerHTML = " ";
    num1=parseInt($("#lowerlimit").val());
    num2=parseInt($("#upperlimit").val());
    var i;
    for(i=num1;i<=num2;i++){
        if ((i%2)==1)
            document.getElementById("result").innerHTML += i + "<br/>";
    }
}
