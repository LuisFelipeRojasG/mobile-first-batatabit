const cardArrowLeft = document.getElementsByClassName("arrowLeft");
const cardArrowRight = document.getElementsByClassName("arrowRight");

const listCardPlan = ["plan_annual", "plan_biannual", "plan_quarterly"];
let index = 0;
const cardActive = () => listCardPlan[index].classList.add('active')

cardArrowLeft.addEventListener('click', () => {
    
    switch (index) {
        case 0:
            index++
        break;
        case 1:
            index++
        break;
    }
    return(
        cardActive()
    );
    
})




