const sliderPlans = document.getElementById("sliderPlans");
const containerCards = document.querySelectorAll(".slider__cards--containerCard");
const containerCardsLast = containerCards[containerCards.length - 1];

const planArrowLeft = document.querySelector(".arrowLeftPlans");
const planArrowRight = document.querySelector(".arrowRightPlans");

sliderPlans.insertAdjacentElement('afterbegin', containerCardsLast);

function moveNext() {
  let containerCardsFirst = document.querySelectorAll(".slider__cards--containerCard")[0];
  sliderPlans.style.marginLeft = "-100%";
  sliderPlans.style.transition = "all .5s";
  setTimeout(() => {
    sliderPlans.style.transition = "none";
    sliderPlans.insertAdjacentElement('beforeend', containerCardsFirst);
    sliderPlans.style.marginLeft = "0";
  }, 500);
}

function movePrev() {
  const containerCards = document.querySelectorAll(".slider__cards--containerCard");
  const containerCardsLast = containerCards[containerCards.length - 1];
  
  sliderPlans.style.marginLeft = "100%";
  sliderPlans.style.transition = "all .5s";
  setTimeout(() => {
    sliderPlans.style.transition = "none";
    sliderPlans.insertAdjacentElement('afterbegin', containerCardsLast);
    sliderPlans.style.marginLeft = "0";
  }, 500);
}

planArrowRight.addEventListener('click', () => {
  moveNext()
})

planArrowLeft.addEventListener('click', () => {
  movePrev()
})