const button = document.getElementById("changeColor");
const container = document.getElementById("container");
// const tombol = document.querySelector("div");
// const kotak = document.querySelector("button");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = generateRandomColor();
  e.stopPropagation();
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
