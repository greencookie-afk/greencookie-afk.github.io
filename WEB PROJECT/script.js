
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
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market..."
        },
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771256/CARD-3_hs2kjo.avif",
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market..."
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
                <div class="date-category">${date} | ${category}</div>
                <h3>${title}</h3>
                <p>${description}</p>
            </div>`;
        fragment.appendChild(card);
    });

    newsContainer.appendChild(fragment);
});