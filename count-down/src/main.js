import "./style.css";
import moment from "moment";
// actual date
const functionDate = moment().format("MMMM Do YYYY");
const date = document.querySelector(".date");
date.innerText = `Today is ${functionDate}`;
// select and set the limit date on today
const eventSel = document.querySelector(".dateInput");
eventSel.min = new Date().toISOString().split(".")[0];
eventSel.value = new Date().toISOString().split(".")[0];
// click on button to get the date of event
document.querySelector("button").addEventListener("click", () => {
  const deadLine = moment(eventSel.value);
  showDuration(deadLine);
});
// set time function

const showDuration = (deadLine) => {
  const count = () => {
    setInterval(() => {
      const now = moment();
      const distance = moment.duration(deadLine.diff(now));
      console.log(distance);
      if (distance._milliseconds > 0) {
        let days = Math.floor(distance.asDays());
        days = days < 10 ? "0" + days : days;
        let hours = Math.floor(distance.hours());
        hours = hours < 10 ? "0" + hours : hours;
        let minutes = Math.floor(distance.minutes());
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let seconds = Math.floor(distance.seconds());
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.querySelector(".day").innerText = days;
        document.querySelector(".hour").innerText = hours;
        document.querySelector(".minute").innerText = minutes;
        document.querySelector(".seconds").innerText = seconds;
      } else {
        clearInterval();
      }
    }, 1000);
  };
  return count();
};
