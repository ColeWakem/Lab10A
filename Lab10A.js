function addValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number(document.getElementById("numTwo").value);
  console.log(numTwo);
  var add = numOne + numTwo;
  console.log(add);
  document.getElementById("output").innerHTML= add;
}

function subtractValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number(document.getElementById("numTwo").value);
  console.log(numTwo);
  var sub = numOne - numTwo;
  console.log(sub);
  document.getElementById("output").innerHTML= sub;
}

function multiplyValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number(document.getElementById("numTwo").value);
  console.log(numTwo);
  var mult = numOne * numTwo;
  console.log(mult);
  document.getElementById("output").innerHTML= mult;
}

function divideValues(){
  var numOne = Number(document.getElementById("numOne").value);
  console.log(numOne);
  var numTwo = Number(document.getElementById("numTwo").value);
  console.log(numTwo);
  var div = numOne / numTwo;
  console.log(div);
  document.getElementById("output").innerHTML= div;
}
