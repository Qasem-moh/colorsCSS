
var inputColor=document.getElementById("inputColor")
var selectorColor=document.getElementById("selectorColor")
// bodyPage.style.backgroundColorr=inputColor;
function myFunction() {
  console.log(inputColor)
  document.getElementById("myDIV").style.backgroundColor = inputColor.value;
}
function myFunction1() {
  console.log(selectorColor.value)
  document.getElementById("myDIV").style.backgroundColor = selectorColor.value;
}