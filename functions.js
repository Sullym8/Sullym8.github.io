function myCreateFunction() {
  var subject = document.getElementById("lol").value;
  var table = document.getElementById("TimeTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);
  var cell10 = row.insertCell(9);
  var div = document.createElement("div");
  div.innerHTML = "Replace with description.";
  cell1.innerHTML = subject;
  cell2.appendChild(div);

}