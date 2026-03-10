// Finn knappen for kontrastmodus
const contrastButton = document.getElementById("contrastButton");

// Legg til klikk-hendelse
contrastButton.addEventListener("click", toggleHighContrast);


// Funksjon som slår høy kontrast av/på
function toggleHighContrast(){

const pageBody = document.body;

pageBody.classList.toggle("high-contrast");

}