const sliderCurrency = document.getElementById("sliderTables");
const containerCurrency = document.querySelectorAll(".tablesContainer__sliderTables");
const containerCurrencyLast = containerCurrency[containerCurrency.length - 1];

const currencyArrowLeft = document.querySelector(".arrowLeftCurrency");
const currencyArrowRight = document.querySelector(".arrowRightCurrency");

sliderCurrency.insertAdjacentElement('afterbegin', containerCurrencyLast);

function nextCurrency() {
    let containerCurrencyFirst = document.querySelectorAll(".tablesContainer__sliderTables")[0];
    sliderCurrency.style.marginLeft = "-200%";
    sliderCurrency.style.transition = "all .4s";
    setTimeout(() => {
        sliderCurrency.style.transition = "none";
        sliderCurrency.insertAdjacentElement('beforeend', containerCurrencyFirst);
        sliderCurrency.style.marginLeft = "-100%";
    }, 400);
}
  
  function prevCurrency() {
    const containerCurrency = document.querySelectorAll(".tablesContainer__sliderTables");
    const containerCurrencyLast = containerCurrency[containerCurrency.length - 1];
    
    sliderCurrency.style.marginLeft = "0";
    sliderCurrency.style.transition = "all .4s";
    setTimeout(() => {
        sliderCurrency.style.transition = "none";
        sliderCurrency.insertAdjacentElement('afterbegin', containerCurrencyLast);
        sliderCurrency.style.marginLeft = "-100%";
    }, 400);
  }
  
  currencyArrowRight.addEventListener('click', () => {
    nextCurrency();
  })
  
  currencyArrowLeft.addEventListener('click', () => {
    prevCurrency();
  })

