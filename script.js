
document.getElementById("boxB").addEventListener("click", function() {
  if (document.getElementById("boxC").style.visibility === "visible") {
    document.getElementById("boxC").style.visibility = "hidden";
    document.getElementById("boxA").style.width = "300px";
    document.getElementById("boxB").style.width = "300px";
  } else {
    document.getElementById("boxC").style.visibility = "visible";
    document.getElementById("boxA").style.width = "200px";
    document.getElementById("boxB").style.width = "200px";
  }
});