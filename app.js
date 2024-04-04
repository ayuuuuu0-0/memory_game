const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "chesseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "chesseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

//  returns back a number anywhere from 0 to -1, we are checking whether the number is smaller than 0.5 or larger than 0.5.
// basically a method for shuffling the array randomly.
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];
const cardsChosenIds = [];

// create element is a method that creates a new element with the specified name.
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    // gives a id to the every image card based on the index of the array.
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
    card.addEventListener("click", flipCard);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log("check for match");

  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match");
    // cards[cardsChosen[0]].setAttribute("src", "images/white.png");
    // cards[cardsChosen[1]].setAttribute("src", "images/white.png");
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  // creating a new array and pushing the name of the card that is clicked.
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  // setTimeout is a funcion which calls a function or evaluates an expression after a specified number of milliseconds.
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
