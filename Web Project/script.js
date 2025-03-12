document.addEventListener("DOMContentLoaded", function () {
    const newsData = [
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771255/CARD-1_iv1xtp.webp",
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market...",
        },
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771256/CARD-2_idawfe.avif",
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market...",
        },
        {
            image: "https://res.cloudinary.com/ds2n1k6bz/image/upload/v1741771256/CARD-3_hs2kjo.avif",
            date: "March 11, 2025",
            category: "Gaming",
            title: "New Game Released",
            description: "A brand-new action-packed game is hitting the market...",
        }
    ];

    const newsContainer = document.getElementById("news-cards");
    
    newsData.forEach(news => {
        let card = document.createElement("div");
        card.classList.add("news-card");


        card.innerHTML = `
            <img src="${news.image}" alt="News Image">
            <div class="content">
                <div class="date-category">${news.date} | ${news.category}</div>
                <h3>${news.title}</h3>
                <p>${news.description}</p>
            </div>
        `;

        newsContainer.appendChild(card);
    });
});