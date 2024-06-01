let consoleLog = document.getElementById("console-log");

function logMessage(message) {
  consoleLog.innerHTML += `${message}<br>`;
}

document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      logMessage(`Key "${e.key}" pressed [event: keydown]`);
      break;
    case "ArrowDown":
      logMessage(`Key "${e.key}" pressed [event: keydown]`);
      break;
    case "ArrowLeft":
      logMessage(`Key "${e.key}" pressed [event: keydown]`);
      break;
    case "ArrowRight":
      logMessage(`Key "${e.key}" pressed [event: keydown]`);
      break;
    default:
      console.log("diabaikan");
  }
});

// input.addEventListener('keyup', () => {
// 	console.log('Tombol dirilis');
// });
