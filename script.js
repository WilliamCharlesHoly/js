const ENABLE_CAM_BUTTON = document.getElementById('enableCam');

ENABLE_CAM_BUTTON.addEventListener('click', enableCam);

function enableCam() {

document.getElementById("demo").innerHTML = "Action changed.";

    console.warn('getUserMedia() is not supported by your browser');
}