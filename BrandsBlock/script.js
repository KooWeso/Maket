const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: {
        320: {slidesPerView: 1.2},
        400: {slidesPerView: 1.6},
        470: {slidesPerView: 2},
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
});


const brandBlock = document.querySelector(".brand-block")
const gridBox = document.querySelector(".brand-block__grid-box") 
const btnExpand = document.querySelector(".brand-block__btn--expand")
const btnExpandText = document.querySelector(".brand-block__btn--expand-text")
const btnExpandImg = document.querySelector(".btn--expand-img")


function expander() {
    if (btnExpandText.innerHTML === "Показать все") {
        btnExpandText.innerHTML = "Скрыть"
        btnExpandImg.style.transform = 'rotate(-180deg)'
        brandBlock.offsetWidth >= 1053?gridBox.style.height = '15.5rem':gridBox.style.height = '21rem';
    }
    else {
        btnExpandText.innerHTML = "Показать все"
        btnExpandImg.style.transform = 'rotate(0deg)'
        gridBox.style.height = '10rem';
    };
};