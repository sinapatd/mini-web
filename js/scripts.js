/*!
 * Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(document).ready(function () {
  const navPath = getRelativePath();

  // Load the navigation bar into the navbar div
  $("#navbar").load(`${navPath}/navbar.html`);

  // Fix the navigation bar on scroll
  $(window).scroll(function () {
    var navOffset = $("nav").offset().top;
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });

  loadTheme();
});

const getRelativePath = () => {
  const currentPath = window.location.pathname;
  // console.log(currentPath);
  const dirList = currentPath.split("/");
  // console.log(dirList);

  let navPath = "common";
  if (dirList.length === 3) {
    navPath = "../" + navPath;
  }

  return navPath;
};

function activateNightMode() {
  const element = document.body;
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
    element.classList.remove("dark-mode");
  } else {
    localStorage.setItem("theme", "dark");
    element.classList.add("dark-mode");
  }
  // element.classList.toggle('dark-mode')
}

const loadTheme = () => {
  const element = document.body;
  const theme = localStorage.getItem("theme");
  // theme || localStorage.setItem('theme', 'light');
  if (theme === "dark") {
    element.classList.add("dark-mode");
  } else {
    element.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
};

function add() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("result").innerHTML =
    "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}

function subtract() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("result").innerHTML =
    "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}

function multiply() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("result").innerHTML =
    "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
}

function divide() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  if (num2 === 0) {
    document.getElementById("result").innerHTML =
      "The sum of " + num1 + " and " + num2 + " is " + "Undefined" + ".";
  } else {
    let sum = num1 / num2;
    document.getElementById("result").innerHTML =
      "The sum of " + num1 + " and " + num2 + " is " + sum + ".";
  }
}
