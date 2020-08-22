var currentTab = 0; 
showTab(currentTab); 

// Making continue button to disabled by default
var NextBtn = document.getElementById("nextBtn").disabled = true;

// For disabling continue button until save is clicked
function enableNxt() {
  document.getElementById("nextBtn").disabled = false;
}

// It converts the continue button to submit in the last page
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

// Fixes for continue and previous button
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) {
    return false;
  }
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

//validates the input fields
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

// For step indicator at the bottom
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}

// Dropdown for list of influencers
var checkList = document.getElementById('listInfluencer');
checkList.getElementsByClassName('anchor1')[0].onclick = function (evt) {
  if (checkList.classList.contains('visible1'))
    checkList.classList.remove('visible1');
  else
    checkList.classList.add('visible1');
}

// Dropdown for target list
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
      target.style.border = "2px solid #F3D308";
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
      target.style.backgroundColor = "#F3D308"; //12648e
      influencer += 1;
   }
 }
 else{
   target.style.backgroundColor = "white";
   influencer -= 1;
 }
}

//For reward
var rewardBox = 0;
function splash(target) {
 if(target.style.border == ""){
   if(rewardBox < 4){
      target.style.border = "2px solid red";
      rewardBox += 1;
   }
 }
 else{
   target.style.border = "";
   rewardBox -= 1;
 }
}

// Changing social media icon stack
var socialMediaIcons= document.getElementsByClassName('social-media');
Array.from(socialMediaIcons).forEach((element, index)=>{
  element.addEventListener('click',(event)=>{
    
    element.classList.toggle('display')

  })

})


// On checking checkbox it should append a new class in influencers

//To separately click on close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// To create append a new container with close button on top
var newContainer = document.getElementsByTagName("checkedElements");
var i;
for (i = 0; i < newContainer.length; i++) {
  var span = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  newContainer[i].appendChild(span);
}

// To check whether the checkbox is checked
// function checkBoxEvt(){
//   var checkBox = document.getElementsByClassName('checkBoxes');
//   if (checkBox.checked == true){
//     newContainer()
//   } else {
//     close();
//   }
// }



var checkBoxes= document.getElementsByClassName('checkBoxes');
var checkName= document.getElementsByClassName('checkName');
var selectedItems= document.getElementById('selectedItem');
var inserted = document.getElementsByClassName('inserted');

Array.from(checkBoxes).forEach((element,index)=>{
  element.addEventListener('change',(event)=>{
    if(element.checked){
      var insertedValue=checkName[index].innerHTML;
      selectedItems.innerHTML +=`<span class="inserted">${insertedValue}</span>`
        }else if(element.checked != true){
          Array.from(inserted).forEach((value,loc)=>{
            if(value.innerHTML===checkName[index].innerHTML){
              value.parentNode.removeChild(value);
            }
          })  
        }  
  });
})

var targetCheckBox = document.getElementsByClassName('targetBox');
var targetName = document.getElementsByClassName('targetName');
var displayItems = document.getElementById('targetDisplay');
var insertedTargets = document.getElementsByClassName('insertedTargets');

Array.from(targetCheckBox).forEach((element, index)=>{
  element.addEventListener('change', (event)=>{
    if(element.checked){
      var insertTag = targetName[index].innerHTML;
      displayItems.innerHTML +=`<span class="insertedTargets">${insertTag}</span>`
        } else if(element.checked != true){
          Array.from(insertedTargets).forEach((value,loc)=>{
            if(value.innerHTML === targetName[index].innerHTML){
              value.parentNode.removeChild(value);
            }
          })
      }
  });
})
