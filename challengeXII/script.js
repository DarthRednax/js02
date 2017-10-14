var x = []
var y = 0
var z = []
var h
var q
var e

window.onload = function() {

y = Math.floor(Math.random()*3+3)
for (i=0; i<y; i++){
  x[i] = Math.floor(Math.random()*101)
}
document.getElementById('homework').innerHTML = String(x)
z = x

y=0
for(i=0;i<x.length;i++){
  y = y + x[i]
}
h = y/(x.length)
document.getElementById('homework average').innerHTML = String(h)

x = []
y = Math.floor(Math.random()*4)
for (i=0; i<y; i++){
  x[i] = Math.floor(Math.random()*101)
}
if (y==0){
  document.getElementById('quiz').innerHTML = "No Quizzes"
  document.getElementById('quiz average').innerHTML = "No Quizzes"
  q = "no"
}else {
  document.getElementById('quiz').innerHTML = String(x)

  y=0
  for(i=0;i<x.length;i++){
    y = y + x[i]
  }
  q = y/(x.length)
  document.getElementById('quiz average').innerHTML = String(q)

}
z = z.concat(x)

x = []
y = Math.floor(Math.random()*2+1)
for (i=0; i<y; i++){
  x[i] = Math.floor(Math.random()*101)
}
document.getElementById('exam').innerHTML = String(x)
z = z.concat(x)

y=0
for(i=0;i<x.length;i++){
  y = y + x[i]
}
e = y/(x.length)
document.getElementById('exam average').innerHTML = String(e)

document.getElementById('scores').innerHTML = String(z)

if (q = "no"){
  y= (h + 3*e)/4
  document.getElementById('average').innerHTML = String(y)
} else {
  y=(h + 2*q + 3*e)/6
  document.getElementById('average').innerHTML = String(y)
}

if (y>=94){

} else if (y>=94){
  document.getElementById('l').innerHTML = "A"
  document.getElementById('n').innerHTML = "4.0"
}else if (y>=90){
  document.getElementById('l').innerHTML = "A-"
  document.getElementById('n').innerHTML = "3.7"
}else if (y>=87){
  document.getElementById('l').innerHTML = "B+"
  document.getElementById('n').innerHTML = "3.3"
}else if (y>=83){
  document.getElementById('l').innerHTML = "B"
  document.getElementById('n').innerHTML = "3.0"
}else if (y>=80){
  document.getElementById('l').innerHTML = "B-"
  document.getElementById('n').innerHTML = "2.7"
}else if (y>=77){
  document.getElementById('l').innerHTML = "C+"
  document.getElementById('n').innerHTML = "2.3"
}else if (y>=73){
  document.getElementById('l').innerHTML = "C"
  document.getElementById('n').innerHTML = "2.0"
}else if (y>=70){
  document.getElementById('l').innerHTML = "C-"
  document.getElementById('n').innerHTML = "1.7"
}else if (y>=67){
  document.getElementById('l').innerHTML = "D+"
  document.getElementById('n').innerHTML = "1.3"
}else if (y>=63){
  document.getElementById('l').innerHTML = "D"
  document.getElementById('n').innerHTML = "1.0"
}else if (y>=60){
  document.getElementById('l').innerHTML = "D-"
  document.getElementById('n').innerHTML = "0.7"
}else{
  document.getElementById('l').innerHTML = "F"
  document.getElementById('n').innerHTML = "0"
}

}
