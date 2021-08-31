const title = document.getElementsByTagName("h2");
for (const h2 of title) {
  h2.style.color = "lightblue";
}

document.getElementById("bags").style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

function handleHide(event) {
  const hidingTheButton = event.target;
  hidingTheButton.style.visibility = "hidden";
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

const shoes = document.getElementsByClassName("card-img-top");
for (const singleShoe of shoes) {
  singleShoe.addEventListener("mouseenter", function () {
    singleShoe.src = "../images/cool.png";
    singleShoe.style.backgroundColor = "lightGray";
    singleShoe.style.borderRadius = "30px";
  });
}

function dblClick() {
  document.getElementById("contact__us").style.backgroundColor = "lightblue";
}
