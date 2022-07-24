const sliderPlans = document.getElementById("slider_plans");
const containerCards = document.querySelectorAll(".container-card");
const containerCardsLast = containerCards[containerCards.length - 1];

const planArrowLeft = document.querySelector(".arrowLeftPlans");
const planArrowRight = document.querySelector(".arrowRightPlans");

sliderPlans.insertAdjacentElement('afterbegin', containerCardsLast);

function moveNext() {
  let containerCardsFirst = document.querySelectorAll(".container-card")[0];
  sliderPlans.style.marginLeft = "-200%";
  sliderPlans.style.transition = "all .5s";
  setTimeout(() => {
    sliderPlans.style.transition = "none";
    sliderPlans.insertAdjacentElement('beforeend', containerCardsFirst);
    sliderPlans.style.marginLeft = "-100%";
  }, 500);
}

function movePrev() {
  const containerCards = document.querySelectorAll(".container-card");
  const containerCardsLast = containerCards[containerCards.length - 1];
  
  sliderPlans.style.marginLeft = "0";
  sliderPlans.style.transition = "all .5s";
  setTimeout(() => {
    sliderPlans.style.transition = "none";
    sliderPlans.insertAdjacentElement('afterbegin', containerCardsLast);
    sliderPlans.style.marginLeft = "-100%";
  }, 500);
}

planArrowRight.addEventListener('click', () => {
  console.log("click");
  moveNext()
})

planArrowLeft.addEventListener('click', () => {
  console.log("click");
  movePrev()
})