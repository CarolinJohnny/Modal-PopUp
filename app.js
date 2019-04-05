let modal = document.querySelector(".modal");
let results = document.querySelector(".results");
let againButton = document.querySelector(".again-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

results.addEventListener("click", toggleModal);
againButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//
var totalStars = document.querySelector(".stars").innerHTML;
gamerMoves.innerHTML = moves
document.getElementById("moves").innerHTML = moves;
document.getElementById("totalStars").innerHTML = totalStars;
