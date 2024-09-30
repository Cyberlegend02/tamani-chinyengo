function toggleMenu(){
    const menu = document.querySelector(".menulinks");
    const icon = document.querySelector(".hambugericon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    
    
}

function scrollToTop(){
    window.scrollTo(0, 0);
    
}