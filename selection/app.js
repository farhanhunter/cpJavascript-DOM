// const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//   // console.log(img.src);
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }

// const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg";
// }

const links = document.querySelectorAll("a");
const h1 = document.querySelector("h1");

for (let link of links) {
  link.style.color = "rgb(128, 0, 128)";
  link.style.textDecorationColor = "blue";
  link.style.textDecorationStyle = "solid";
}
