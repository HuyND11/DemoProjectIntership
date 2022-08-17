window.onscroll = function() {
    const header = document.getElementsByTagName('header');
    if(window.scrollY >= 80 || window.pageYOffset >= 80) {
        header[0].classList.add("box-shadow");
    }else {
        header[0].classList.remove("box-shadow");
    }
}  ;



