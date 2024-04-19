// for consloe
// let tableNo = +prompt("Enter Table Num")
// for (let i= tableNo; i<=tableNo*10; i=i+tableNo){
//     console.log(i);
// }

// for doucment
document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("output").innerHTML = "";
  let tableNo = parseInt(document.getElementById("input").value);
  if (tableNo < 0) {
    tableNo = Math.abs(tableNo);
  }
  for (let i = tableNo; i <= tableNo * 1; i = i + tableNo) {
    for (let j = 1; j <= 10; j++) {
      document.getElementById("output").innerHTML += `${i} x ${j} = ${
        i * j
      }<br>`;
    }
  }
});
