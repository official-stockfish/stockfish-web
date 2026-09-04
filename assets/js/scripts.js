const body = document.querySelector('body')
const menuTrigger = document.querySelector('#toggle-main-menu-mobile');
const menuContainer = document.querySelector('#main-menu-mobile');

if (menuTrigger && menuContainer) {
    menuTrigger.onclick = function() {
        menuContainer.classList.toggle('open');
        menuTrigger.classList.toggle('is-active')
        body.classList.toggle('lock-scroll')
    }
}

function getUserOS() {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
        const platform = navigator.userAgentData.platform.toLowerCase();
        if (platform.includes("win")) return "windows";
        if (platform.includes("android")) return "arm";
        if (platform.includes("linux")) return "linux";
        if (platform.includes("mac")) return "macos";
        if (platform.includes("ios") || platform.includes("iphone") || platform.includes("ipad")) return "ios";
    }

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
    if (!downloadCards) return;

    const userOS = getUserOS();
    const recommendedCardContainer = document.getElementById(`${userOS}-card`);

    if (recommendedCardContainer) {
        // Highlight and position recommended card
        recommendedCardContainer.className = "col-12 col-md-8 col-lg-6 mb-4 d-flex align-items-stretch";
        downloadCards.prepend(recommendedCardContainer);

        const recommendedCard = recommendedCardContainer.querySelector(".card");
        if (recommendedCard) {
            recommendedCard.classList.replace("border-dark", "border-success");
        }

        // Hide other OS cards behind toggle
        const allCards = Array.from(downloadCards.querySelectorAll('[id$="-card"]'));
        const otherCards = allCards.filter(card => card !== recommendedCardContainer);

        if (otherCards.length > 0) {
            otherCards.forEach(card => card.classList.add("d-none"));

            const toggleContainer = document.createElement("div");
            toggleContainer.className = "col-12 text-center mb-4";
            toggleContainer.innerHTML = `
                <button type="button" class="button button-secondary border-0 d-inline-block" aria-expanded="false">
                    <span>See other platforms</span> <i class="fa-solid fa-chevron-down ml-2"></i>
                </button>
            `;

            const toggleBtn = toggleContainer.querySelector("button");
            let isExpanded = false;

            toggleBtn.addEventListener("click", function() {
                isExpanded = !isExpanded;
                otherCards.forEach(card => card.classList.toggle("d-none", !isExpanded));
                toggleBtn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
                toggleBtn.querySelector("span").textContent = isExpanded ? "Hide other platforms" : "See other platforms";
                toggleBtn.querySelector("i").className = isExpanded ? "fa-solid fa-chevron-up ml-2" : "fa-solid fa-chevron-down ml-2";
            });

            recommendedCardContainer.after(toggleContainer);
        }

        // Only hide secondary architecture if user's OS is Windows
        if (userOS === "windows") {
            const remainingContainer = recommendedCardContainer.querySelector(".remaining-downloads");

            if (remainingContainer) {
                remainingContainer.classList.add("d-none");

                const archToggleBtn = document.createElement("button");
                archToggleBtn.type = "button";
                archToggleBtn.className = "btn btn-link text-decoration-none text-muted btn-sm w-100 py-1";
                archToggleBtn.setAttribute("aria-expanded", "false");
                archToggleBtn.innerHTML = '<span>Other architectures</span> <i class="fa-solid fa-chevron-down ml-1"></i>';

                let isArchExpanded = false;
                archToggleBtn.addEventListener("click", function() {
                    isArchExpanded = !isArchExpanded;
                    remainingContainer.classList.toggle("d-none", !isArchExpanded);
                    archToggleBtn.setAttribute("aria-expanded", isArchExpanded ? "true" : "false");
                    const icon = archToggleBtn.querySelector("i");
                    if (icon) {
                        icon.className = isArchExpanded ? "fa-solid fa-chevron-up ml-1" : "fa-solid fa-chevron-down ml-1";
                    }
                });

                remainingContainer.before(archToggleBtn);
            }

            // Async architecture check for Windows ARM vs x86-64
            if (navigator.userAgentData?.getHighEntropyValues) {
                navigator.userAgentData.getHighEntropyValues(["architecture"])
                    .then(ua => {
                        if (ua.architecture === "arm") {
                            const primaryBtn = recommendedCardContainer.querySelector(".primary-download a");
                            const secondaryBtn = recommendedCardContainer.querySelector(".remaining-downloads a[href*='arm64']");

                            if (primaryBtn && secondaryBtn) {
                                const primaryParent = primaryBtn.parentElement;
                                const secondaryParent = secondaryBtn.parentElement;

                                primaryBtn.className = "button button-secondary d-block rounded text-center w-100";
                                secondaryBtn.className = "button button-download w-100 text-center py-2 d-block rounded font-weight-bold";

                                primaryParent.appendChild(secondaryBtn);
                                secondaryParent.appendChild(primaryBtn);
                            }
                        }
                    })
                    .catch(() => {});
            }
        }
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
