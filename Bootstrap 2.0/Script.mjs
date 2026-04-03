"use strict";

// ===== Popup =====
function togglePopup() {
  const popup = document.getElementById("popup");

  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}

// ===== Svar =====
function svarJa() {
  document.getElementById("svarTekst").innerText = "Så gøy! Trykk på profilbildet da 👍";
}

function svarNei() {
  document.getElementById("svarTekst").innerText = "Så kjedelig da, ikke trykk på profilbildet 😅";
}

// ===== Når siden lastes =====
document.addEventListener("DOMContentLoaded", () => {

  // Popup vises automatisk
  togglePopup();

  // Profilbilde animasjon
  const bilde = document.getElementById("profilbilde");

  bilde.addEventListener("click", () => {
    bilde.classList.add("spin");

    setTimeout(() => {
      bilde.classList.remove("spin");
    }, 1000);
  });

  // Høy kontrast
  document.getElementById("contrastBtn")
    .addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });
});

// Funksjoner tilgjengelig i HTML
window.togglePopup = togglePopup;
window.svarJa = svarJa;
window.svarNei = svarNei;