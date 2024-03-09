let btn = document.getElementById("submit");
let firedMl = document.getElementById("firedMl");
let firedMl2 = document.getElementById("firedMl2");
let firedWidth = document.getElementById("firedWidth");
let firedHeigh = document.getElementById("firedHeigh");
btn.addEventListener("click", function () {
  let r = parseInt(document.getElementById("width").value);
  let h = parseInt(document.getElementById("height").value);
  let FiredMl = ((r * 0.5 * 0.88) ** 2 * 3.14 * h * 0.88) / 1000;
  let FiredWidth = r * 0.88;
  let FiredHeigh = h * 0.88;
  firedMl.innerHTML = FiredMl.toFixed(2);
  firedWidth.innerHTML = FiredWidth.toFixed(2);
  firedHeigh.innerHTML = FiredHeigh.toFixed(2);
});
