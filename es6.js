"use strict";

function pp() {
  const THEORY = 7;
  var PRACTICE;

  document.querySelector('.resultclose').addEventListener("click", closeResults);

  function setPractice() {
    let a = document.querySelector('.setpractice').value;
    if (a === "1") {
      PRACTICE = 6;
    } else {
      PRACTICE = 7;
    }
  }

  function calculateSecondArgument(x, y, z) {
    let r = [x, y, z];
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
    let r = [a, b, c];
    let n = ["[name=\"resultall\"]", "[name=\"resulttheory\"]", "[name=\"resultpractice\"]"];
    for (let i = 0; i < n.length; i++) {
      document.querySelector(n[i]).innerHTML = r[i];
    }
    openResults();
  }

  function closeResults() {
    document.querySelector('.result').style.transform = "scale(0,0)";
    let n = ["[name=\"al\"]", "[name=\"th\"]", "[name=\"pr\"]"];
    for (let i = 0; i < n.length; i++) {
      document.querySelector(n[i]).value = '';
    }
  }

  function openResults() {
    document.querySelector('.result').style.transform = "scale(1,1)";
  }

  function menu() {
    let a = document.querySelector('.app');
    if (a.hasAttribute("style")) {
      a.removeAttribute("style");
    } else {
      a.style.transform = "translate(550px,0)";
    }
  }

  function initFunction() {
    setPractice();
    let x, y, z;
    x = parseInt(document.querySelector('[name="al"]').value);
    y = parseInt(document.querySelector('[name="th"]').value);
    z = parseInt(document.querySelector('[name="pr"]').value);
    calculateSecondArgument(x, y, z);
  }
  initFunction();
}



function menu() {
  let a = document.querySelector('.app');
  if (a.hasAttribute("style")) {
    a.removeAttribute("style");
  } else {
    a.style.transform = "translate(550px,0)";
  }
}
