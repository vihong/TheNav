const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    console.log(nav);

    burger.addEventListener('click', () => {
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                // console.log(index / 7);
            }
        });

        //Burger rotation
        burger.classList.toggle('toggle');
    });

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
    });

    burger.addEventListener('click', () => {
   //Toggle Nav
        nav.classList.toggle('nav nav-active');

    });


};  



navSlide();