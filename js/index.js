const title = document.getElementsByTagName("h2");
for (const h2 of title) {
  h2.style.color = "lightblue";
}

document.getElementById("bags").style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");

for (const card of cards) {
  card.style.borderRadius = "30px";
}

function handleHide() {}

const input = document.getElementById("email");
input.addEventListener("keyup", function () {
  const button = document.getElementById("submit__button");
  if (input.value == "email") {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});

function dblClick() {
  document.getElementById("contact__us").style.backgroundColor = "lightblue";
}
