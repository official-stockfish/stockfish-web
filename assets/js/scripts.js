const body = document.querySelector('body')
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

function getUserOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) return "windows";
    if (userAgent.includes("android") || userAgent.includes("raspberry") || userAgent.includes("raspbian")) return "arm";
    if (userAgent.includes("linux")) return "linux";
    if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("ipod")) return "ios";
    if (userAgent.includes("mac")) return "macos";
    return "";
}

document.addEventListener("DOMContentLoaded", function() {
    const downloadCards = document.getElementById("download-cards");
    if (downloadCards) {
        const userOS = getUserOS();
        const recommendedCard = document.querySelector(`#${userOS}-card .card`);
        if (recommendedCard) {
            recommendedCard.classList.replace("border-dark", "border-success");
            recommendedCard.parentElement.classList.replace("col-md-6", "col-md-12");
            recommendedCard.parentElement.classList.add("order-first");
            const cardHeader = recommendedCard.querySelector(".card-header");
            if (cardHeader) {
                const badge = document.createElement("span");
                badge.className = "badge badge-success ml-1";
                badge.textContent = "Recommended";
                cardHeader.appendChild(badge);
            }
        }
        // Add event listeners for show more buttons
        document.querySelectorAll('.show-more').forEach(button => {
            button.addEventListener('click', function() {
                const items = this.previousElementSibling;
                items.classList.toggle('hidden');
                this.textContent = items.classList.contains('hidden') ?
                    'Show more options' : 'Show fewer options';
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("interfaceCarousel");
    if (carousel) {
        const items = carousel.querySelectorAll(".carousel-item");
        const indicators = carousel.querySelectorAll(".carousel-indicators li");
        const prevBtn = carousel.querySelector(".carousel-control-prev");
        const nextBtn = carousel.querySelector(".carousel-control-next");
        let currentIndex = 0;
        let intervalId = null;

        function showSlide(index) {
            if (index < 0) index = items.length - 1;
            if (index >= items.length) index = 0;
            currentIndex = index;

            items.forEach((item, i) => {
                item.classList.toggle("active", i === currentIndex);
            });

            indicators.forEach((ind, i) => {
                ind.classList.toggle("active", i === currentIndex);
            });
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function startAutoPlay() {
            stopAutoPlay();
            intervalId = setInterval(nextSlide, 5000);
        }

        function stopAutoPlay() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", function(e) {
                e.preventDefault();
                showSlide(currentIndex - 1);
                startAutoPlay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", function(e) {
                e.preventDefault();
                nextSlide();
                startAutoPlay();
            });
        }

        indicators.forEach((ind, i) => {
            ind.addEventListener("click", function(e) {
                e.preventDefault();
                showSlide(i);
                startAutoPlay();
            });
        });

        carousel.addEventListener("mouseenter", stopAutoPlay);
        carousel.addEventListener("mouseleave", startAutoPlay);

        startAutoPlay();
    }
});
