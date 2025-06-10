const articoli = [
  { titolo: "Antonino Zichichi (Dio, Logos Eterno)", link: "zichichi.html" },
  { titolo: "Ignazio La Russa (\"Non sono antifascista\")", link: "LaRussa.html" },
  { titolo: "Logica", link: "logica.html" },
  { titolo: "Analisi degli argomenti", link: "analisi.html" },
  { titolo: "Imparare a dibattere", link: "impara.html" },
  { titolo: "Chi sono", link: "chisono.html" },
  { titolo: "Roberto Vannacci (\"Referendum delendum est\")", link: "Vannacci.html" }
];
const input = document.getElementById("search-bar");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  suggestions.innerHTML = "";

  if (query.length === 0) return;

  const results = articoli.filter(a => a.titolo.toLowerCase().includes(query));
  
  results.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a.titolo;
    li.onclick = () => window.location.href = a.link;
    suggestions.appendChild(li);
  });
});