let btn = document.getElementById("submit");
// 燒製後容量/高變數
let firedMl = document.getElementById("firedMl");
let firedMl2 = document.getElementById("firedMl2");
let firedWidth = document.getElementById("firedWidth");
let firedHeigh = document.getElementById("firedHeigh");
btn.addEventListener("click", function () {
  let r = parseInt(document.getElementById("width").value);
  let h = parseInt(document.getElementById("height").value);
  let p = parseInt(document.getElementById("pa").value);
  let pa = (100 - p) / 100;
  let FiredMl = ((r * 0.5 * pa) ** 2 * 3.14 * h * pa) / 1000;
  let FiredWidth = r * pa;
  let FiredHeigh = h * pa;
  firedMl.innerHTML = FiredMl.toFixed(2);
  firedWidth.innerHTML = FiredWidth.toFixed(2);
  firedHeigh.innerHTML = FiredHeigh.toFixed(2);
});
