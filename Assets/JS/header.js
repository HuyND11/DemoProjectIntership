const showNavMobile = () => {
    const x = document.querySelector(".header-nav");
    if(x.classList.contains("active")) {
        x.classList.remove("active");
    }else {
        x.classList.add("active");
    }
}

