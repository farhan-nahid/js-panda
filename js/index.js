const title = document.getElementsByTagName("h2");
for (const h2 of title) {
  h2.style.color = "lightblue";
}

document.getElementById("bags").style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

const btn = document.getElementsByClassName("btn");
for (const b of btn) {
  b.addEventListener("click", (e) => {
    const hidingTheButton = e.target;
    hidingTheButton.style.visibility = "hidden";
    const card = e.target.parentNode.parentNode;
    const p = card.getElementsByTagName("p")[1];
    p.style.textAlign = "center";
    if (p.innerText === "") {
      p.innerText = "Buy Complete";
    } else {
      return false;
    }
    card.appendChild(p);
  });
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

const cardImage = document.getElementsByClassName("card-img-top");
for (const singleImage of cardImage) {
  singleImage.addEventListener("mouseenter", function () {
    singleImage.src = "../images/cool.png";
    singleImage.style.backgroundColor = "lightGray";
    singleImage.style.borderRadius = "30px";
  });
}

function dblClick() {
  document.getElementById("contact__us").style.backgroundColor = "lightblue";
}
