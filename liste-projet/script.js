// Les données de départ
const projets = [
  { nom: "Portfolio", techno: "HTML/CSS", statut: "terminé" },
  { nom: "Calculatrice température", techno: "JavaScript", statut: "terminé" },
  { nom: "Liste de projets", techno: "JavaScript", statut: "en cours" },
  { nom: "App Météo", techno: "JavaScript", statut: "en cours" },
  { nom: "Dashboard React", techno: "React", statut: "en cours" }
];

// --- Étape 1 : Afficher les projets ---
function afficherProjets(liste) {
  const container = document.querySelector("#projects-list");
  
  // On transforme chaque objet en chaîne HTML
  const htmlCartes = liste.map(projet => `
    <div class="project-card">
      <div>
        <p class="project-name">${projet.nom}</p>
        <p class="project-techno">${projet.techno}</p>
      </div>
      <span class="badge badge-${projet.statut.replace(" ", "-")}">
        ${projet.statut}
      </span>
    </div>
  `).join(""); // .join("") pour éviter les virgules entre les éléments

  // Injection dans le DOM
  container.innerHTML = htmlCartes;
}

// --- Étape 2 : Gérer les filtres ---
const filtresBoutons = document.querySelectorAll(".filter-btn");

filtresBoutons.forEach(bouton => {
  bouton.addEventListener("click", () => {
    // 1. Gestion des classes CSS (visuel)
    filtresBoutons.forEach(btn => btn.classList.remove("active"));
    bouton.classList.add("active");

    // 2. Logique de filtrage
    const filtreValeur = bouton.dataset.filter;

    if (filtreValeur === "tous") {
      afficherProjets(projets);
    } else {
      const projetsFiltres = projets.filter(p => p.statut === filtreValeur);
      afficherProjets(projetsFiltres);
    }
  });
});

// --- Étape 3 : Au chargement ---
// On affiche tout par défaut au lancement du script
afficherProjets(projets);