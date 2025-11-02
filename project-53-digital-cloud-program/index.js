// Digital ClocK Program //

function updateClock() {
  const now = new Date();
  console.log(now);
  // --------------------------------------------------------- //
  let hour = now.getHours().toString().padStart(2, 0);
  console.log(hour);

  hour = hour % 12 || 12;
  console.log(hour);

  hour = hour.toString().padStart(2, 0);
  console.log(hour);
  // --------------------------------------------------------- //
  const minute = now.getMinutes().toString().padStart(2, 0);
  console.log(minute);

  const second = now.getSeconds().toString().padStart(2, 0);
  console.log(second);

  const meridiem = hour > 12 ? "PM" : "AM";
  console.log(meridiem);

  const template = `${hour}:${minute}:${second} ${meridiem}`;
  console.log(template);

  document.getElementById("clock").textContent = template;
}

updateClock();
setInterval(updateClock, 1000);
