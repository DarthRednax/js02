
let x;
let y;
let start = () => {
  x = Number(document.getElementById('number').value);
  clearTimeout(y)
  launch()
};
let launch = () => {
  if (x > 0){
    document.getElementById('num').innerHTML = String(x);
    x=x-1;
    y = window.setTimeout(launch,1000);
    console.log(x);
  } else {
    document.getElementById('num').innerHTML = "BLAST OFF";
  }
}
