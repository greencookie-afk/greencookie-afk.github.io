document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector('.navbar');
    const newsContainer = document.getElementById("news-cards");
    

    let lastScrollPosition = 0;
    let ticking = false;


    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollPosition = window.pageYOffset;
                if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
                    navbar.classList.add('hidden');
                } else {
                    navbar.classList.remove('hidden');
                }
                lastScrollPosition = currentScrollPosition;
                ticking = false;
            });
            ticking = true;
        }
    });


    const newsData = [
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771255/CARD-1_iv1xtp.webp",
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market..."
        },
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771256/CARD-2_idawfe.avif",
            title: "New Arcane Learnings"
        },
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771256/CARD-3_hs2kjo.avif",
            title: "March New Update 2025"
        }
    ];

    const fragment = document.createDocumentFragment();
    
    newsData.forEach(({ image, date, category, title, description }) => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
            <div class="img-container">
                <img src="${image}" alt="${title}">
            </div>
            <div class="content">
                <h3>${title}</h3>
                <h2>INSIDER</h2>
            </div>`;
        fragment.appendChild(card);
    });

    newsContainer.appendChild(fragment);
});

// Menu Animation
const mobileMenu = document.querySelector('.mobile-menu');
const menuContainer = document.querySelector('.menu-container');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuContainer.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuContainer.contains(e.target)) {
        mobileMenu.classList.remove('active');
        menuContainer.classList.remove('active');
    }
});

// Close menu when clicking on a menu item
const menuItems = document.querySelectorAll('.menu-container a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuContainer.classList.remove('active');
    });
});