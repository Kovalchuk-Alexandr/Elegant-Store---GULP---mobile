// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

function swiper () {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        // direction: "vertical",
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 16,
        grabCursor: true,
        freeMode: true /* Плавная прокрутка */,
        pagination: {
            el: ".dots",
            clickable: true,
            bulletActiveClass: "dot--active",
            bulletClass: "dot",
        },

        breakpoints: {
            820: {
                spaceBetween: 24,
            },
        },

        // If we need pagination
        // pagination: {
        //     el: ".swiper-pagination",
        // },

        // Navigation arrows
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: ".swiper-scrollbar",
        // },
    });
}

export default swiper;