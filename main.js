function pp() {
  var THEORY = 7;
  var PRACTICE;

  function setPractice() {
    var a = document.querySelector('.setpractice').value;
    if (a === "1") {
      PRACTICE = 6;
    } else {
      PRACTICE = 7;
    }
  }

  function calculateSecondArgument(x, y, z) {
    var r = [x, y, z];
    switch (true) {
      case isNaN(x):
        r[0] = y + z;
        break;
      case isNaN(y):
        r[1] = x - z;
        break;
      case isNaN(z):
        r[2] = x - y;
        break;
    }
    convertToHours(r[0], r[1], r[2]);
  }

  function convertToHours(x, y, z) {
    y = y * THEORY;
    z = z * PRACTICE;
    x = y + z;
    outputResult(x, y, z);
  }

  function outputResult(a, b, c) {
    var r = [a, b, c];
    var n = ["[name=\"resultall\"]", "[name=\"resulttheory\"]", "[name=\"resultpractice\"]"];
    for (var i = 0; i < n.length; i++) {
      document.querySelector(n[i]).innerHTML = r[i];
    }
    openResults();
  }

  function closeResults() {
    document.querySelector('.result').style.transform = "scale(0,0)";
    var n = ["[name=\"al\"]", "[name=\"th\"]", "[name=\"pr\"]"];
    for (var i = 0; i < n.length; i++) {
      document.querySelector(n[i]).value = '';
    }
  }

  function openResults() {
    document.querySelector('.result').style.transform = "scale(1,1)";
  }

  function menu() {
    var a = document.querySelector('.app');
    if (a.hasAttribute("style")) {
      a.removeAttribute("style");
    } else {
      a.style.transform = "translate(550px,0)";
    }
  }

  function initFunction() {
    setPractice();
    var x, y, z;
    x = parseInt(document.querySelector('[name="al"]').value, 10);
    y = parseInt(document.querySelector('[name="th"]').value, 10);
    z = parseInt(document.querySelector('[name="pr"]').value, 10);
    calculateSecondArgument(x, y, z);
  }

  initFunction();
  document.querySelector('.resultclose').addEventListener("click", closeResults);
}

function menu() {
  var a = document.querySelector('.app');
  if (a.hasAttribute("style")) {
    a.removeAttribute("style");
  } else {
    a.style.transform = "translate(550px,0)";
  }
}
