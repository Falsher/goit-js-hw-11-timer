class CountdownTimer {
  timeNum = { days: 0, hours: 0, mins: 0, secs: 0 };
  constructor({selector, targetDate}) {
    const target = document.querySelector(selector);
    this.dateFields = target.querySelectorAll(".value");
    this.targetDate = targetDate
  }

  calculateTimeNum(time) {
    this.timeNum.days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.timeNum.hours = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.timeNum.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    this.timeNum.secs = Math.floor((time % (1000 * 60)) / 1000);
  }
  updateDate() {
    this.dateFields[0].innerText =this.timeNum.days
    this.dateFields[1].innerText = this.timeNum.hours
    this.dateFields[2].innerText = this.timeNum.mins
    this.dateFields[3].innerText = this.timeNum.secs
  }
  startTimer() {
    setInterval(() => {
      this.calculateTimeNum(this.targetDate- Date.now());
      this.updateDate();
    }, 1000);
  }
}

const birthdayTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 03, 2021"),
});
birthdayTimer.startTimer();
