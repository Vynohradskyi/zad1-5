// Tworzenie elementu i ustawianie jego stylu za pomocą CSS
const text = document.createElement("div");
text.style.color = "#C0C0C0";
text.style.fontWeight = "bold";
text.style.fontSize = "6rem";
text.innerHTML = `Ostatnia modyfikacja strony: <s>${document.lastModified}</s>`;

// Dodanie elementu do strony
document.body.appendChild(text);
