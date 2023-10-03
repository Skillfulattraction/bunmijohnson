const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');




let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
};
function handleScroll() {
    const navbar = document.querySelector(".navbar");
    const scrolledClass = "nav-colored";
    const scrollY = window.scrollY;

    if (scrollY > 150) {
        navbar.classList.add(scrolledClass);
    } else {
        navbar.classList.remove(scrolledClass);
    }
}
window.addEventListener("scroll", handleScroll);


function setupProductGallery() {
    // Select elements
    const previewContainer = document.querySelector('.gallery__products-preview');
    const activeClass = "active";

    // Add click event listeners to product elements
    document.querySelectorAll('.gallery__products-container .gallery__product').forEach(gallery__product => {
        gallery__product.addEventListener('click', () => {
            // Display the preview container
            previewContainer.style.display = 'flex';

            // Get the data-name attribute of the clicked product
            const name = gallery__product.getAttribute('data-name');

            // Select preview boxes within the event handler
            const previewBox = previewContainer.querySelectorAll('.preview');

            // Loop through preview boxes and add/remove the active class
            previewBox.forEach(preview => {
                const target = preview.getAttribute('data-target');
                if (name === target) {
                    preview.classList.add(activeClass);
                } else {
                    preview.classList.remove(activeClass);
                }
            });
        });
    });

    const previewBox = document.querySelectorAll('.preview');

    previewBox.forEach(close => {
        close.querySelector('.bx-x').onclick = () => {
            close.classList.remove('active');
            previewContainer.style.display = 'none';
        };
    });
}

// Call the function to set up the product gallery
setupProductGallery();

// POPUP JAVASCRIPT

const openPopupButton = document.querySelector('[data-popup-target="#popup"]');
const closePopupButton = document.querySelector('[data-close-button]');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

// Add an event listener for when the page has finished loading
window.addEventListener('load', () => {
    // Delay the opening of the popup by 10 seconds (10,000 milliseconds)
    setTimeout(() => {
        openPopup();
    }, 10000); // 10,000 milliseconds = 10 seconds
});

openPopupButton.addEventListener('click', () => {
    openPopup();
});

closePopupButton.addEventListener('click', () => {
    closePopup();
});

function openPopup() {
    if (popup && overlay) {
        popup.classList.add('active');
        overlay.classList.add('active');
    }
}

function closePopup() {
    if (popup && overlay) {
        popup.classList.remove('active');
        overlay.classList.remove('active');
    }
}





new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 4.17,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },

    respnsive: [
        {
            // screens greater than >= 775px
            breakpoint: 1200,
            settings: {
                // send to`auto` and provide item width to adjust to viewport
                slidesToShow: '4.15',
                slidesToScroll: '2',

            }
        }, {
            // screens greater than >= 1024px
            breakpoint: 900,
            settings: {
                slidesToShow: 3.2,
                slidesToScroll: 1,
            }

        }, {
            // screens greater than >= 1024px
            breakpoint: 640,
            settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1,
            }

        }
        , {
            // screens greater than >= 1024px
            breakpoint: 304,
            settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
            }

        }
    ]
});
//CODE FOR SCROLL REVEAL

ScrollReveal({
    reset: true,
    distance: '200px',
    duration: 1600,
    delay: 700
});
ScrollReveal().reveal('.intro-section__img ', { delay: 400, distance: '100px', origin: 'bottom', rotate: { x: 700, z: 700 } });
ScrollReveal().reveal('.glider-contain ', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.intro-section__info', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.home__hero', { delay: 500 });
ScrollReveal().reveal('.checklist__item', { delay: 300 });
ScrollReveal().reveal('.gallery__product', { delay: 500,origin:'right' });











