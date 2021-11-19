let showBtn = document.querySelectorAll(`.show_btn`);
let modul = document.querySelector(`.modul`);
let closeBtn = document.querySelector(`.close_btn`);
let overlay = document.querySelector(`.overlay`);

//Function To Open The Modul
function showModul() {
  modul.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
}
//Function To Close The Modul
function closeModul() {
  modul.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener("click", showModul);
}
closeBtn.addEventListener(`click`, closeModul);
overlay.addEventListener(`click`, closeModul);
document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape`) {
    closeModul();
  }
});
