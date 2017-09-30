function tbl() {
  if((document.getElementById("name").value != "")&&
  (document.getElementById("food").value != "") &&
  (document.getElementById("color").value) != ""){
    var para = document.createElement("tr");
    var nodea = document.createElement("td");
    var nodeb = document.createElement("td");
    var nodec = document.createElement("td");
    para.appendChild(nodea);
    para.appendChild(nodeb);
    para.appendChild(nodec);
    var nodex = document.createTextNode(document.getElementById("name").value);
    var nodey = document.createTextNode(document.getElementById("food").value);
    var nodez = document.createTextNode(document.getElementById("color").value);
    nodea.appendChild(nodex);
    nodeb.appendChild(nodey);
    nodec.appendChild(nodez);
    var element = document.getElementById("tabl");
    element.appendChild(para);
    document.getElementById("name").value = ""
    document.getElementById("food").value = ""
    document.getElementById("color").value = ""
    document.getElementById("nope").textContent = ""
  } else {
    document.getElementById("nope").textContent = "Please fill all the feilds"
  }
}
