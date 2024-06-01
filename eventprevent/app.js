const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

input.addEventListener("change", () => {
  console.log("Nilai berubah");
});

input.addEventListener("input", () => {
  console.log("Nilai berhasil diinput");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value.trim();
  if (noteValue === "") {
    alert("Please enter a note before submitting.");
    return;
  }
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("myLink");

  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link click behavior
    const url = e.target.href; // Get the URL from the link's href attribute
    window.open(url, "_blank");
  });
});

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
