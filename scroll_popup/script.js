// Créer un événement au scroll
let playOnce = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
  // permet d'avoir le ratio de la page en pourcentage
  // innerHeight est la valeur de la bare de scroll
  let windowRatio =
    ((window.scrollY + window.innerHeight) / document.body.offsetHeight) * 100;

  if (windowRatio > 45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "translateX(0px)";
  }
  if (windowRatio > 85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(0px)";
  }
});
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(400px)";
  popup.style.opacity = 0;
  playOnce = false;
});

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
