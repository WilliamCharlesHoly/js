const ENABLE_CAM_BUTTON = document.getElementById('enableCam');


ENABLE_CAM_BUTTON.addEventListener('click', enableCam);

function enableCam() {

  document.getElementById("demo").innerHTML = "Action changed." + " " + square(4);

  console.warn('getUserMedia() is not supported by your browser');
  console.log("That's Great");
    
    
  var name;
  name = prompt("Pls enter your name")    
   window.alert("Your name is " + name)    
}

function square(y) {
  
  return y = y * y;
  
  
}