const { act } = require("react");

// les sections a oberver
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// IntersectionObserver =  detecte quand un element entre dans le viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Retire active de tout les liens
        navLinks.forEach((link) => link.classList.remove("active"));

        // Ajoute active au lien correspondant a la section visible
        const id = entry.target.id;
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.5 },
); // 50% de la section doit etre visible pour etre considerer comme intersecting

sections.forEach((section) => observer.observe(section));

// Ajoute dans script.js
const animerElements = () => {
  const elements = document.querySelectorAll("article, .skill-card");

  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Une fois visible, on arrête d'observer
          animObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => animObserver.observe(el));
};

animerElements();
