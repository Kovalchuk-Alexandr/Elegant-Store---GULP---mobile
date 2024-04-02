function mobileNav() {
    // Mobile nav button
    const navBtnOpen = document.querySelector("#mobile-nav-btn");
    const navBtnClose = document.querySelector("#close-mobile-nav");
    const mobileNavFade = document.querySelector(".mobile-nav-fade");
    const nav = document.querySelector(".mobile-nav");

    // Открыть мобильную навигацию
    navBtnOpen.onclick = openMobileNav;

    // Закрыть мобильную навигацию
    navBtnClose.onclick = closeMobileNav;

    /* Клик за пределами навигации и по фейду закрывает меню */
    mobileNavFade.onclick = closeMobileNav;

    function openMobileNav() {
        nav.classList.add("mobile-nav--open");
        mobileNavFade.classList.add("mobile-nav-fade--open");
        document.body.classList.add("no-scroll");
    }

    function closeMobileNav() {
        nav.classList.remove("mobile-nav--open");
        mobileNavFade.classList.remove("mobile-nav-fade--open");
        document.body.classList.remove("no-scroll");
    }

	// Запретить всплытие кликов из мобильной навигации (если она внутри фейда)
    // nav.addEventListener("click", function (e) {
    //     e.stopPropagation;
    // });
}

export default mobileNav;