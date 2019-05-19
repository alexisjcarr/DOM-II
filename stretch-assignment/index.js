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

// upward bound
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

// rightward bound
let move0 = 300;
let move1 = 300;
let move2 = 300;
let move3 = 300;
let move4 = 300;

redBlock.addEventListener("dblclick", event => {
  TweenLite.to(redBlock, 2, { x: move0 });
  move0 += 300;
});

blueBlock.addEventListener("dblclick", event => {
  TweenLite.to(blueBlock, 2, { x: move1 });
  move1 += 300;
});

greenBlock.addEventListener("dblclick", event => {
  TweenLite.to(greenBlock, 2, { x: move2 });
  move2 += 300;
});

pinkBlock.addEventListener("dblclick", event => {
  TweenLite.to(pinkBlock, 2, { x: move3 });
  move3 += 300;
});

grayBlock.addEventListener("dblclick", event => {
  TweenLite.to(grayBlock, 2, { x: move4 });
  move4 += 300;
});
