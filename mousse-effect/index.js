// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

window.addEventListener("mousemove", (e) => {
  round1.style.left = e.pageX + "px";
  round1.style.top = e.pageY + "px";

  round2.style.left = e.pageX + "px";
  round2.style.top = e.pageY + "px";

  round3.style.left = e.pageX + "px";
  round3.style.top = e.pageY + "px";
});

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
