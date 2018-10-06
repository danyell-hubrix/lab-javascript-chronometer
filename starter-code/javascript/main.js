var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var listSplits  = document.getElementById('splits');

function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Remember our TimerID for Browser Window
var winTimerId = -1;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    var currClass = btnLeft.className;
    if (currClass === "btn stop") {
        // We were running, and should now stop
        console.log("Stopping Chrono");
        btnLeft.className = "btn start";
        btnRight.className = "btn reset";
        btnLeft.innerHTML = "START";
        btnRight.innerHTML = "RESET";
        chronometer.stopClick();
        if (-1 != winTimerId) {
            window.clearInterval(winTimerId);
        }
    }
    else {
        // We were stopped, and should now start
        console.log("Starting Chrono");
        btnLeft.className = "btn stop";
        btnRight.className = "btn split";
        btnLeft.innerHTML = "STOP";
        btnRight.innerHTML = "SPLIT";
        chronometer.startClick();
        winTimerId = window.setInterval(myChronoTimer,1000);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    var currClass = btnRight.className;
    // console.log("btnRight class = '" + currClass + "'");
    if (currClass === "btn reset") {
        // We were stopped and should reset our Chrono
        chronometer.resetClick();
        updateClockDisplay();   // Clean up what is shown on-screen
        // Also zap all Splits
        while (listSplits.hasChildNodes()) {
            listSplits.removeChild(listSplits.childNodes[0]);
        }
    }
    else {
        // We are running and should mark a Split
        // console.log("SPLIT not yet implemented!");
        var newSplit = document.createElement('li');
        var splitText = document.createTextNode(
            chronometer.minutes
         + ':' + chronometer.seconds
          + ':00');
        newSplit.appendChild(splitText);
        listSplits.appendChild(newSplit);
    }

});

function updateClockDisplay() {
    var minD = chronometer.minutes.substr(0,1);
    var minU = chronometer.minutes.substr(1,1);
    var secD = chronometer.seconds.substr(0,1);
    var secU = chronometer.seconds.substr(1,1);
    minDec.innerHTML = minD;
    minUni.innerHTML = minU;
    secDec.innerHTML = secD;
    secUni.innerHTML = secU;
}

function myChronoTimer() {
    // Our BROWSER-WINDOW timer callback updates display only
    updateClockDisplay();
}

