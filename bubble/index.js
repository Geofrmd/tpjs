// création d'un élément
const bubble = document.createElement("span");
// ajout de la class css "bubble"
bubble.classList.add("bubble");
// permet d'ajouter au body le span
document.body.appendChild(bubble);

const size = Math.random() * 200 + 100 + "px";

console.log(size);
