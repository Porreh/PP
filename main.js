"use strict";

const THEORY = 7;
var PRACTICE;
var v = [];
var r = [];

function init() {
  setPractice();
  console.log("ВРЕМЯ:   " + PRACTICE + " часов.");
  getValues();
  console.log("ПОЛУЧЕНЫЕ ДАННЫЕ:   " + v);
  calculateSecondArgument(v[0], v[1], v[2]);
  console.log("ПОДСЧЕТ ТРЕТЕГО ЧИСЛА:   " + v);
  convertToHours(v[0], v[1], v[2]);
  console.log("ПЕРЕВОД ДНЕЙ В ЧАСЫ:   " + r);
  printResult();
}

function setPractice() {
  let a = document.querySelector('.setpractice').value;
  if (a === "1") {
    PRACTICE = 6;
  } else if (a === "2") {
    PRACTICE = 7;
  } else {
    PRACTICE = 8;
  }
}

function getValues() {
  let x, y, z;
  x = parseInt(document.querySelector('[name="al"]').value);
  y = parseInt(document.querySelector('[name="th"]').value);
  z = parseInt(document.querySelector('[name="pr"]').value);
  v.push(x, y, z);
}

function calculateSecondArgument(x, y, z) {
  switch (true) {
    case isNaN(y) && isNaN(z):
      break;
    case isNaN(y):
      v[1] = x - z;
      break;
    case isNaN(z):
      v[2] = x - y;
      break;
  }
}

function convertToHours(x, y, z) {
  y = y * THEORY;
  z = z * PRACTICE;
  x = y + z;
  r.push(x, y, z);
}

function printResult() {
  for (let i of r) {
    console.log(i);
  }

  function close() {
    document.querySelector('.result').style.transform = "scale(0,0)";
  }

  document.querySelector('[name="resultall"]').innerHTML = r[0];
  document.querySelector('[name="resulttheory"]').innerHTML = r[1];
  document.querySelector('[name="resultpractice"]').innerHTML = r[2];

  document.querySelector('.result').style.transform = "scale(1,1)";
  document.querySelector('.resultclose').addEventListener("click", close);

  document.querySelector('[name="al"]').value = '';
  document.querySelector('[name="th"]').value = '';
  document.querySelector('[name="pr"]').value = '';

  v = [];
  r = [];
}

function menu() {
  let a = document.querySelector('.app');
  if (a.hasAttribute("style")) {
    a.removeAttribute("style");
  } else {
    a.style.transform = "translate(550px,0)";
  }
}
