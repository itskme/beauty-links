

let initialDt = new Date(); 
let dateTime = document.querySelector(".dateTime");

dateTime.innerHTML =
  ("0" + initialDt.getDate()).slice(-2) +
  "." +
  ("0" + (initialDt.getMonth() + 1)).slice(-2) +
  "." +
  initialDt.getFullYear() +
  "&nbsp; - &nbsp;" +
  ("0" + initialDt.getHours()).slice(-2) +
  ":" +
  ("0" + initialDt.getMinutes()).slice(-2);


setInterval(() => {
  let updatedDt = new Date();
  dateTime.innerHTML =
    ("0" + updatedDt.getDate()).slice(-2) +
    "." +
    ("0" + (updatedDt.getMonth() + 1)).slice(-2) +
    "." +
    updatedDt.getFullYear() +
    "&nbsp; - &nbsp;" +
    ("0" + updatedDt.getHours()).slice(-2) +
    ":" +
    ("0" + updatedDt.getMinutes()).slice(-2);
}, 5_000);
