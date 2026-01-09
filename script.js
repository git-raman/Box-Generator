let main = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let div = document.createElement("div");
  let c1 = Math.random() * 256;
  let c2 = Math.random() * 256;
  let c3 = Math.random() * 256;
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let rot = Math.random() * 361;
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.position = "absolute";
  div.style.rotate = rot + "deg";
  div.style.borderRadius = "8px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  main.appendChild(div);
});
