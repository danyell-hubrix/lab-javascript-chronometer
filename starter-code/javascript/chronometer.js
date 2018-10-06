// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = -1;
    this.laptimes = [];
}

Chronometer.prototype.timerHandler = function () {
    this.currentTime += 1;  // seconds
    this.setTime(); // call our time-formatting function
    if (this.currentTime % 5 == 0)
        console.log("currentTime = " + this.currentTime);
}

/*
function GlobalTimerHandler(myChro) {
    myChro.currentTime += 1;
}
*/

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(this.timerHandler.bind(this),1000);
    // this.intervalId = setInterval(GlobalTimerHandler,1000,this);

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime / 60);
};
Chronometer.prototype.setSeconds = function () {
    return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    var fmtnum = '';
    if (num<10) { fmtnum = "0"+num; }
    else fmtnum = '' + num;
    // console.log("2Digits: Got " + num + ", returning '" + fmtnum +"'");
    return fmtnum;
}

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
}

Chronometer.prototype.setMilliseconds = function () {
    /* Not implemented for now! */
}

Chronometer.prototype.stopClick = function () {
    // if (-1 != this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = -1;
    // }
}

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime(); // update our other attributes also
}

Chronometer.prototype.splitClick = function () {
    // TODO: Not yet implemented!
}
