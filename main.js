let btn = document.getElementById("submit");
let firedMl = document.getElementById("firedMl");
let firedWidth = document.getElementById("firedWidth");
let firedHeigh = document.getElementById("firedHeigh");
btn.addEventListener("click", function () {
  let r = parseInt(document.getElementById("width").value);
  let h = parseInt(document.getElementById("height").value);
  let FiredMl = ((r * 0.85 * 0.5) ** 2 * 3.14 * h * 0.85) / 1000;
  let FiredWidth = r * 0.85;
  let FiredHeigh = h * 0.85;
  firedMl.innerHTML = FiredMl.toFixed(2);
  firedWidth.innerHTML = FiredWidth.toFixed(2);
  firedHeigh.innerHTML = FiredHeigh.toFixed(2);
});
