"use Strict";
"use strict";

// --- Part 1: Rectangle Calculations ---
const txtBredde = document.getElementById("txtRectWidth");
const txtHoyde = document.getElementById("txtRectHeight");
const txtResultat1 = document.getElementById("txtTask1Output");
const btnBeregne = document.getElementById("cmbTask1Calculate");

btnBeregne.addEventListener("click", () => {
    const bredde = Number(txtBredde.value);
    const hoyde = Number(txtHoyde.value);
    const omkrets = 2 * (bredde + hoyde);
    const areal = bredde * hoyde;
    txtResultat1.innerText = "Omkrets = " + omkrets + ", Areal = " + areal;
});

// --- Part 2: Dynamic Word List ---
const txtOrdInput = document.getElementById("txtTask2Word");
const txtResultat2 = document.getElementById("txtTask2Output");
const listeOrd = [];

txtOrdInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        listeOrd.push(txtOrdInput.value);
        txtResultat2.innerText = "Antall ord = " + listeOrd.length + " | " + listeOrd.join(", ");
        txtOrdInput.value = "";
    }
});

// --- Part 3: Checkbox Evaluation ---
// --- Part 3: Checkbox Evaluation ---
const checkbokser = document.querySelectorAll('input[name="chkTask3"]');
const btnSjekk = document.getElementById("cmbTask3CheckAnswer");
const txtResultat3 = document.getElementById("txtTask3Output");

// Definer hvilke alternativer som er sanne
const sannhet = {
    "1": true,   // "Cat is an animal!" → sant
    "2": true,   // "Volvo is a car!" → sant
    "3": true,   // "Rose is a flower!" → sant
    "4": true,   // "Donald Trump is a human being!" → sant
    "5": false   // "Dette er en test" → usant
};

btnSjekk.addEventListener("click", () => {
    let resultatTekst = "";

    checkbokser.forEach(cb => {
        if(cb.checked) {
            const erSant = sannhet[cb.value];
            resultatTekst += cb.value + ": " + (erSant ? "Sant" : "Ikke sant") + "\n";
        }
    });

    if(resultatTekst === "") resultatTekst = "Ingen valg";
    txtResultat3.innerText = resultatTekst;
});


// --- Part 4: Radio Button Selection ---
const bilTyper = ["Volvo", "BMW", "Toyota", "Tesla"];
const divBiler = document.getElementById("divTask4Cars");
const txtResultat4 = document.getElementById("txtTask4Output");

bilTyper.forEach((bil, indeks) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "rbBiler";
    radio.value = bil;
    radio.id = "rbBil" + indeks;

    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.innerText = bil;

    divBiler.appendChild(radio);
    divBiler.appendChild(label);
    divBiler.appendChild(document.createElement("br"));

    radio.addEventListener("change", () => {
        if(radio.checked) txtResultat4.innerText = "Valgt bil: " + radio.value;
    });
});

// --- Part 5: Dropdown Selection ---
const selectDyr = document.getElementById("selectTask5Animals");
const txtResultat5 = document.getElementById("txtTask5Output");

selectDyr.addEventListener("change", () => {
    txtResultat5.innerText = "Valgt dyr: " + selectDyr.options[selectDyr.selectedIndex].text;
});

// --- Part 6: Dynamic Dropdown & Selection ---
const jentenavn = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid"];
const selectJenter = document.getElementById("selectTask6Girls");
const txtResultat6 = document.getElementById("txtTask6Output");

jentenavn.forEach(navn => {
    const option = document.createElement("option");
    option.value = navn;
    option.textContent = navn;
    selectJenter.appendChild(option);
});

selectJenter.addEventListener("change", () => {
    txtResultat6.innerText = "Du valgte: " + selectJenter.value;
});

// --- Part 7: Table Population ---
const txtFilmTittel = document.getElementById("txtMovieTitle");
const selectSjanger = document.getElementById("selectMovieGenre");
const txtRegissor = document.getElementById("txtMovieDirector");
const txtRating = document.getElementById("txtMovieRate");
const btnLeggTilFilm = document.getElementById("cmbAddMovie");
const tabell = document.getElementById("tblMovies");

// Populate genres dynamically
const filmSjangerListe = ["Action", "Drama", "Komedi", "Thriller", "Sci-Fi"];
filmSjangerListe.forEach(sjanger => {
    const option = document.createElement("option");
    option.value = sjanger;
    option.textContent = sjanger;
    selectSjanger.appendChild(option);
});

let filmNr = 1;

btnLeggTilFilm.addEventListener("click", () => {
    const rad = document.createElement("tr");

    const celler = [
        filmNr,
        txtFilmTittel.value,
        selectSjanger.value,
        txtRegissor.value,
        txtRating.value
    ];

    celler.forEach(verdi => {
        const td = document.createElement("td");
        td.innerText = verdi;
        rad.appendChild(td);
    });

    tabell.appendChild(rad);
    filmNr++;

    // Clear input fields
    txtFilmTittel.value = "";
    txtRegissor.value = "";
    txtRating.value = "5";
});
