// Button Animation
let element = document.getElementById("generateBtn");
let emoji = document.getElementById("emoji");
element.addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    emoji.classList.remove("emojiAnimation");
    element.classList.remove("buttonAnimation")
    void emoji.offsetWidth;
    emoji.classList.add("emojiAnimation");
    element.classList.add("buttonAnimation");
  },
  false
);

// Color Generator
let letters = "0123456789ABCDF";
const body = document.querySelector("body");
const colorElement = document.querySelector(".color");

function getColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
    }
    body.style.backgroundColor = color;
    colorElement.innerHTML = color;
}
