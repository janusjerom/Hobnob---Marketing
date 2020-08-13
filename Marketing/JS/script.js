var currentTab = 0; 
showTab(currentTab); 

var NextBtn = document.getElementById("nextBtn").disabled = true;

function enableNxt() {
  document.getElementById("nextBtn").disabled = false;
}

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }

  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

var checkList = document.getElementById('listInfluencer');
checkList.getElementsByClassName('anchor1')[0].onclick = function (evt) {
  if (checkList.classList.contains('visible1'))
    checkList.classList.remove('visible1');
  else
    checkList.classList.add('visible1');
}

var checkLists = document.getElementById('listTarget');
checkLists.getElementsByClassName('anchor2')[0].onclick = function (evt) {
  if (checkLists.classList.contains('visible2'))
    checkLists.classList.remove('visible2');
  else
    checkLists.classList.add('visible2');
}

var skipStep = document.getElementById('stepSkip');


// To color the first step boxes
var stepBoxes = 0;
function highlight(target) {
 if(target.style.border == ""){
   if(stepBoxes < 9){
      //target.style.border = "1px solid red";
      stepBoxes += 1;
   }
 }
 else{
   target.style.border = "";
   stepBoxes -= 1;
 }
}

// To color the influencer boxes
var influencer = 0;
function coloring(target) {
 if(target.style.backgroundColor == "white"){
   if(influencer < 4){
      target.style.backgroundColor = "#12648e";
      influencer += 1;
   }
 }
 else{
   target.style.backgroundColor = "white";
   influencer -= 1;
 }
}


// Change filter of image  --PS: Not working
var iconPack = 0;
function fn1(target) {
 if(target.style.filter == "grayscale(100%)"){
   if(iconPack < 4){
    target.style.filter = "";
    iconPack += 1;
   }
 }
 else{
  target.style.filter = "greyscale(100%)";
  iconPack -= 1;
 }
}
