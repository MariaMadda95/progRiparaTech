const traduzione = {
    it: {
        creat: "creatori",
        contat: "Contatti",
        cel:"Cellulare: 333 333 3333"
    },
    en: {
        creat: "creators",
        contat: "Contacts",
        cel:"Mobile: 333 333 3333"
    }
};

// Aggiungi un gestore di eventi per il cambio di lingua
document.getElementById("it-language").addEventListener("click", () => changeLanguage("it"));
document.getElementById("en-language").addEventListener("click", () => changeLanguage("en"));

// Funzione per cambiare la lingua
function changeLanguage(language) {
    document.getElementById("creat").textContent = traduzione[language].creat;
    document.getElementById("contat").textContent = traduzione[language].contat;
    document.getElementById("cel").textContent = traduzione[language].cel;

}