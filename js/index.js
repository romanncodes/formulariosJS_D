var bt = document.getElementById("bt");
var bt2 = document.getElementById("btsum");
var tbody = document.getElementById("tbody");
var bt_load = document.getElementById("bt_load");

bt.addEventListener("click", function () {
  var txt = document.getElementById("txt");
  var res = document.getElementById("res");

  if (txt.value == "") {
    alert("enter your name");
    txt.focus();
  } else {
    //alert("Hi " + txt.value);
    res.style.color = "green";
    res.innerHTML += "Hi " + txt.value + "<br>";
    txt.value = "";
    txt.focus();
  }
});

bt2.addEventListener("click", () => {
  var txt1 = document.getElementById("n1");
  var txt2 = document.getElementById("n2");
  var res = document.getElementById("res2");

  var suma = parseInt(txt1.value) + parseInt(txt2.value);

  if (isNaN(suma)) {
    res.style.color = "red";
    res.innerHTML = "Hubo un problema con los valores :(";
  } else {
    res.style.color = "green";
    res.innerHTML = "Suma: " + suma;
  }
});

bt_load.addEventListener("click", () => {
  loadPaises();
});

function loadPaises() {
  var paises = ["Chile", "Argentina", "Peru", "Colombia", "Ecuador"];
  tbody.innerHTML = ""; //limipiar el tbody
  paises.forEach((item) => {
    var fila = tbody.insertRow();
    var celda = fila.insertCell();
    celda.innerHTML = item;
    tbody.append(fila);
  });
}
