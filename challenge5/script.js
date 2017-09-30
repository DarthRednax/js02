var int = 7
var string = "the number 7"
var intstring = "7"
window.onload = function () {

document.getElementById("2").innerHTML = int+int;
document.getElementById("3").innerHTML = int+string;
document.getElementById("4").innerHTML = int+intstring;
document.getElementById("5").innerHTML = intstring+int;
document.getElementById("7").innerHTML = int+intstring+string;
document.getElementById("8").innerHTML = int+int+string;
document.getElementById("9").innerHTML = string+int+int;
document.getElementById("11").innerHTML = int-string;
document.getElementById("12").innerHTML = int-intstring;
document.getElementById("13").innerHTML = string-intstring;
document.getElementById("15").innerHTML = int==intstring;
document.getElementById("16").innerHTML = int===intstring;
}
