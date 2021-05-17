class CountdownTimer {
  constructor(conf) {
    const target = document.querySelector(conf.selector);
    const dateFields = target.querySelectorAll(".value");
    setInterval(() => {
      const currentTime = new Date();
    
      const dateDiffSec = conf.targetDate - currentTime;
      dateFields[0].innerHTML = this.days(dateDiffSec);
      dateFields[1].innerHTML = this.hours(dateDiffSec);
      dateFields[2].innerHTML = this.mins(dateDiffSec);
      dateFields[3].innerHTML = this.secs(dateDiffSec);
    }, 1000);
  }

  days = (time) => Math.floor(time / (1000 * 60 * 60 * 24));
  hours = (time) =>
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  mins = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  secs = (time) => Math.floor((time % (1000 * 60)) / 1000);
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2019"),
});
