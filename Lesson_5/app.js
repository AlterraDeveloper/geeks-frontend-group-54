const title = document.getElementById("title");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// moment.js

function clock() {
  const dateNow = moment();

  hours.textContent = dateNow.hour();
  minutes.textContent = dateNow.minute();
  seconds.textContent = String(dateNow.second()).padStart(2, "0");
}

function countdown() {
  const dateNow = moment();
  const futureDate = moment("01.01.2026 00:00:00", "DD.MM.YYYY HH:mm:ss");

  const dateDiff = moment.duration(futureDate.diff(dateNow));

  days.textContent = String(Math.floor(dateDiff.asDays())).padStart(2, "0");
  hours.textContent = String(Math.floor(dateDiff.hours())).padStart(2, "0");
  minutes.textContent = String(Math.floor(dateDiff.minutes())).padStart(2, "0");
  seconds.textContent = String(Math.floor(dateDiff.seconds())).padStart(2, "0");
}

setInterval(countdown, 1000);
