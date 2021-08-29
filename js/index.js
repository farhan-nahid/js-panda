const title = document.getElementsByTagName("h2");
for (const h2 of title) {
  h2.style.color = "lightblue";
}

document.getElementById("bags").style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}
/*
function handleHide() {
  const allButton = document.getElementsByClassName("main__button");
  for (const button of allButton) {
    button.style.display = "none";
  }
}
*/

function handleHide() {
  document.getElementById("shoe2").style.display = "none";
}

const input = document.getElementById("email");
input.addEventListener("keyup", function () {
  const button = document.getElementById("submit__button");
  if (input.value == "email") {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});

const shoes = document.getElementById("shoe1");
shoes.addEventListener("mouseenter", function () {
  shoes.src = "../images/category-shoe.png";
});

function dblClick() {
  document.getElementById("contact__us").style.backgroundColor = "lightblue";
}
