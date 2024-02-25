
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "goodby";
  } else {
    x.innerHTML = "Hello";
  }
}