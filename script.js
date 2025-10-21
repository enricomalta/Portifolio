// Section Menu Icone
let menuIcon = document.querySelector('#menu-icon');
let navbarIcon = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbarIcon.classList.toggle('active');

}




// Script Auto Section
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => { 
    sections.forEach(sec => { 
    let top = window.scrollY; 
    let offset = sec.offsetTop - 100; 
    let height = sec.offsetHeight; 
    let id = sec.getAttribute('id'); 

        if(top >= offset && top < offset + height) { 
            // active navbar links
            navLinks.forEach(links => { 
                links.classList.remove('active');  
            }); 

            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        } 
    }); 
}

// Sticky Header
let header = document.querySelector('header'); 

    header.classList.toggle('sticky', window.scrollY > 100); 

    menuIcon.classList.remove('bx-x');
    navbarIcon.classList.remove('active');


