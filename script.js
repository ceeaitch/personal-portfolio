// E-Mail-Adresse kopieren
const copyBtn = document.getElementById("copymail");
copyBtn.addEventListener("click", function () {
  const email = "christopherhellstern95@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      // Text ändern
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = "✔️ Kopiert!";

      // Nach 2 Sekunden wieder zurücksetzen
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    })
    .catch((err) => {
      console.error("Fehler beim Kopieren:", err);
    });
});

// Kontaktbutton
document.getElementById("contactBtn").addEventListener("click", function () {
  window.location.href =
    "https://www.linkedin.com/in/christopher-hellstern-70697629b/";
});

/*
// Kontaktformular öffnen
  contactBtn.addEventListener("click", function () {
    contactForm.style.display = "flex";
  });

  // Kontaktformular schließen
  closeForm.addEventListener("click", function () {
    contactForm.style.display = "none";
  });

  // Optional: Klicke außerhalb vom Modal = Schließen
  window.addEventListener("click", function (e) {
    if (e.target === contactForm) {
      contactForm.style.display = "none";
    }
  });
*/
