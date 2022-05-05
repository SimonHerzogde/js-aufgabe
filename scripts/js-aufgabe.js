//Javascript Lösungen

// Aufgabe1
"use strict";
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
//Je nach Wunsch/Flexibiltät könnte man "day + "." + month + "." + year;" auch direkt innerHTML zuweisen
let fullDate = day + "." + month + "." + year;
//Kleine optische Verschönerung, wenn Monat kleiner 10 wird 0 vor Monat gesetzt.
if (month < 10) {
  fullDate = day + "." + "0" + month + "." + year;
}
document.getElementById("datum").innerHTML = fullDate;

//Aufgabe 2
function picChanger(id, path) {
  document.getElementById(id).src = path;
}

// Aufgabe 3
function formcheck() {
  let nachname = document.getElementById("nachname");
  let email = document.getElementById("email");
  if (nachname.value == "") {
    alert("Bitte gib deinen Nachnamen ein!")
    nachname.focus();
    return false;
  }
  if (email.value == "") {
    alert("Bitte gib deine Email-Adresse ein!")
    email.focus();
    return false;
  }
}
