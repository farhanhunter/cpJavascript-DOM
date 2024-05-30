const button = document.querySelector("#clickme");
const button2 = document.querySelector("#clickadd");

button.onclick = function () {
  console.log("You clicked me");
};

button2.onclick = function () {
  console.log("You add me");
};

const scream = () => {
  console.log("Dont touch me");
};

button.onmouseover = scream;

const scream2 = () => {
  console.log("Grab me");
};

button2.onmouseover = scream2;

const eventbtn = document.querySelector("#eventbtn");
eventbtn.addEventListener("click", stepSatu);
eventbtn.addEventListener("click", stepDua);

function stepSatu() {
  console.log("step satu");
}

function stepDua() {
  console.log("step dua");
}

const eventbtn2 = document.querySelector("#eventbtn2");
eventbtn2.addEventListener("click", stepSatu1);
eventbtn2.addEventListener("click", stepDua2);

function stepSatu1() {
  console.log("step satu");
}

function stepDua2() {
  alert("step dua");
}

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
