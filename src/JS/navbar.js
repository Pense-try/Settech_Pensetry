function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./src/Img/navbar/menu-aberto.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./src/Img/navbar/excluir.png";
    }
}