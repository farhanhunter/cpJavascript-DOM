const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};
