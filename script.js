// havent learned js yet :( so copying from online source

// 1) Elements pakdo
const daysEl = document.getElementById("days-number");
const hoursEl = document.getElementById("hours-number");
const minutesEl = document.getElementById("minutes-number");
const secondsEl = document.getElementById("seconds-number");

// 2) Target date set karo (1 Jan 2026, 00:00)
const target = new Date("Jan 1, 2026 00:00:00").getTime();

// 3) Har 1 second update function chalao
setInterval(function () {
  const now = new Date().getTime();
  const diff = target - now;  // milliseconds [web:319][web:325]

  // Agar time khatam ho gaya
  if (diff <= 0) {
    daysEl.textContent = 0;
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  // 4) ms -> days, hours, minutes, seconds [web:319][web:325]
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // 5) DOM update karo
  daysEl.textContent = days;
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}, 1000);  // 1000 ms = 1 second [web:324]
