// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  task = document.getElementById("task");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    second = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(second)}<span> </span>${amPm}`;

  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(number) {
  return (parseInt(number, 10) < 10 ? "0" : "") + number;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Afternoon";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    document.body.style.backgroundSize = "cover";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Your Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
// Set Name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      // Only Enter
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
// Get Task
function getTask() {
  if (localStorage.getItem("task") === null) {
    task.textContent = "[Enter Task]";
  } else {
    task.textContent = localStorage.getItem("task");
  }
}
// Set Task
function setTask(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      // Only Enter
      localStorage.setItem("task", e.target.innerText);
      task.blur();
    }
  } else {
    localStorage.setItem("task", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
task.addEventListener("keypress", setTask);
task.addEventListener("blur", setTask);

// Run
showTime();
setBgGreet();
getName();
getTask();
