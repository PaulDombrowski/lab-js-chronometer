class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if(printTimeCallback){
       return printTimeCallback();
      }
      this.currentTime++;
      },1000)
 }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60); 
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60); 
    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
        } else {
          return value.toString();
    }
    
  }

  stop() {
    clearInterval(this.IntervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
