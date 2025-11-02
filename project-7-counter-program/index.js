let count = 0;
document.getElementById("myH1").textContent = count;

// Decrease
document.getElementById("myDecrease").onclick = function () {
  document.getElementById("myH1").textContent = --count;
};

// Increase
document.getElementById("myIncrease").onclick = function () {
  document.getElementById("myH1").textContent = ++count;
};

// Reset
document.getElementById("myReset").onclick = function () {
  count = 0;
  document.getElementById("myH1").textContent = 0;
};
