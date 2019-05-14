/* ===== Selecting the blocks ===== */
const allBlocks = document.querySelectorAll(".block");
Array.from(allBlocks);

const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");

// /* ===== Event Listeners for all blocks ===== */

// LMAO Jk

/* ===== Event Listeners for EACH block ===== */
//upward bound

let count = 1;

redBlock.addEventListener("click", event => {
  event.target.style.order -= count;
  count++;
});

blueBlock.addEventListener("click", event => {
  event.target.style.order -= count;
  count++;
});

greenBlock.addEventListener("click", event => {
  event.target.style.order -= count;
  count++;
});

pinkBlock.addEventListener("click", event => {
  event.target.style.order -= count;
  count++;
});

grayBlock.addEventListener("click", event => {
  event.target.style.order -= count;
  count++;
});
