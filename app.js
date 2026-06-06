document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger plugin
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* ==========================================
       MULTI-PAGE ACTIVE NAVIGATION HIGHLIGHT
       ========================================== */
    const currentHref = window.location.href;
    const navLinks = document.querySelectorAll(".nav-menu a, .mobile-nav a");
    
    navLinks.forEach(link => {
        const linkHrefClean = link.href.split('#')[0];
        const currentHrefClean = currentHref.split('#')[0];
        
        const linkFilename = linkHrefClean.split('/').pop();
        const currentFilename = currentHrefClean.split('/').pop();

        if (linkFilename === currentFilename && linkFilename !== "") {
            link.classList.add("active");
        } else if ((currentFilename === "" || currentHrefClean.endsWith('/')) && linkFilename === "index.html") {
            link.classList.add("active");
        }
    });

    /* ==========================================
       MOBILE MENU ACCORDION/TOGGLE
       ========================================== */
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const siteHeader = document.getElementById("site-header");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", () => {
            siteHeader.classList.toggle("nav-active");
            mobileMenu.classList.toggle("active");
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener("click", () => {
                siteHeader.classList.remove("nav-active");
                mobileMenu.classList.remove("active");
            });
        });
    }

    /* ==========================================
       STICKY NAV BAR SCROLL EFFECT
       ========================================== */
    if (siteHeader) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                siteHeader.classList.add("scrolled");
            } else {
                siteHeader.classList.remove("scrolled");
            }
        });
    }

    /* ==========================================
       GSAP INFINITE HORIZONTAL SCROLL MARQUEE
       ========================================== */
    const marqueeContainer = document.querySelector(".text-scroller-container");
    if (marqueeContainer && typeof gsap !== 'undefined') {
        let marqueeAnimation = gsap.to(".text-scroller", {
            xPercent: -50,
            ease: "none",
            duration: 25,
            repeat: -1
        });

        gsap.to(marqueeAnimation, {
            timeScale: 3.5,
            scrollTrigger: {
                trigger: ".text-scroller-container",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    }

    /* ==========================================
       DYNAMIC BG SHIFTS ON SCROLL (Home Page radial colors)
       ========================================== */
    const bgs = document.querySelectorAll(".fixed-bg");
    if (bgs.length > 0 && typeof gsap !== 'undefined') {
        function setActiveBg(index) {
            bgs.forEach((bg, i) => {
                if (i === index) {
                    bg.classList.add("active");
                } else {
                    bg.classList.remove("active");
                }
            });
        }

        const proposalSec = document.getElementById("proposal");
        if (proposalSec) {
            ScrollTrigger.create({
                trigger: "#proposal",
                start: "top 60%",
                end: "bottom 30%",
                onEnter: () => setActiveBg(1),
                onLeaveBack: () => setActiveBg(0),
                onEnterBack: () => setActiveBg(1)
            });
        }

        const pricingSec = document.getElementById("pricing");
        if (pricingSec) {
            ScrollTrigger.create({
                trigger: "#pricing",
                start: "top 60%",
                onEnter: () => setActiveBg(2),
                onLeaveBack: () => setActiveBg(1)
            });
        }
    }

    /* ==========================================
       GSAP SPLIT-TEXT REVEAL ANIMATIONS (Titles)
       ========================================== */
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const textHeaders = document.querySelectorAll(".hero-title, .section-header h2");
        
        textHeaders.forEach(el => {
            // Avoid splitting headers containing icons or nested custom markups
            if (el.querySelector('i') || el.querySelector('.logo-accent')) return;

            const text = el.innerText.trim();
            const words = text.split(/\s+/);
            
            el.innerHTML = words.map(w => 
                `<span class="word-wrapper" style="display: inline-block; overflow: hidden; vertical-align: bottom;">
                    <span class="word-inner" style="display: inline-block; transform: translateY(110%);">${w}&nbsp;</span>
                 </span>`
            ).join('');
            
            gsap.to(el.querySelectorAll(".word-inner"), {
                y: "0%",
                duration: 1.1,
                stagger: 0.08,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Custom fade animation on subheads/reveals
        const reveals = gsap.utils.toArray(".reveal");
        reveals.forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, y: 35 }, 
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });
    }

    /* ==========================================
       INTERACTIVE ACCORDIONS (FAQS)
       ========================================== */
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");
        const content = item.querySelector(".accordion-content");

        if (title && content) {
            title.addEventListener("click", () => {
                const isCurrentlyActive = item.classList.contains("active");

                // Close all items
                accordionItems.forEach(innerItem => {
                    innerItem.classList.remove("active");
                    const innerContent = innerItem.querySelector(".accordion-content");
                    
                    if (typeof gsap !== 'undefined') {
                        gsap.to(innerContent, {
                            height: 0,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => {
                                innerContent.style.display = "none";
                            }
                        });
                    } else {
                        innerContent.style.display = "none";
                    }
                });

                // If item wasn't active, open it
                if (!isCurrentlyActive) {
                    item.classList.add("active");
                    content.style.display = "block";
                    content.style.height = "auto";
                    const autoHeight = content.offsetHeight;
                    content.style.height = "0px";
                    
                    if (typeof gsap !== 'undefined') {
                        gsap.to(content, {
                            height: autoHeight,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    } else {
                        content.style.height = "auto";
                    }
                }
            });
        }
    });

    /* ==========================================
       INTERACTIVE RUNWAY CALCULATOR MODULE
       ========================================== */
    const cashSlider = document.getElementById("calc-cash");
    const costsSlider = document.getElementById("calc-costs");
    const collectionsSlider = document.getElementById("calc-collections");

    if (cashSlider && costsSlider && collectionsSlider) {
        const valCash = document.getElementById("val-cash");
        const valCosts = document.getElementById("val-costs");
        const valCollections = document.getElementById("val-collections");
        
        const resultVal = document.getElementById("calc-result");
        const resultUnit = document.getElementById("calc-unit");
        const meterBar = document.getElementById("calc-meter");

        function updateCalculator() {
            const cash = parseFloat(cashSlider.value);
            const costs = parseFloat(costsSlider.value);
            const collections = parseFloat(collectionsSlider.value);

            // Set text values
            valCash.innerText = "$" + cash.toLocaleString();
            valCosts.innerText = "$" + costs.toLocaleString();
            valCollections.innerText = "$" + collections.toLocaleString();

            const netBurn = costs - collections;
            let runway = 0;
            let percentage = 0;

            if (netBurn <= 0) {
                runway = 99;
                percentage = 100;
                resultVal.innerText = "99+";
                resultUnit.innerText = "Months (Cash Flow Positive)";
            } else {
                runway = Math.min(99, Math.round(cash / netBurn));
                percentage = Math.min(100, (runway / 24) * 100); // scale bar against 24 months
                resultVal.innerText = runway;
                resultUnit.innerText = runway === 1 ? "Month of Runway" : "Months of Runway";
            }

            // Animate meter width using GSAP
            if (typeof gsap !== 'undefined') {
                gsap.to(meterBar, {
                    width: percentage + "%",
                    duration: 0.35,
                    ease: "power2.out"
                });
            } else {
                meterBar.style.width = percentage + "%";
            }
        }

        // Add input listeners for real-time calculations
        cashSlider.addEventListener("input", updateCalculator);
        costsSlider.addEventListener("input", updateCalculator);
        collectionsSlider.addEventListener("input", updateCalculator);

        // Initial trigger
        updateCalculator();
    }

    /* ==========================================
       FORM SUBMISSION STATE INTERACTION
       ========================================== */
    const contactForm = document.getElementById("standard-contact-form");
    const successMsg = document.getElementById("form-success");

    if (contactForm && successMsg) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.style.display = "none";
            successMsg.style.display = "block";
            
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(successMsg, 
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
                );
            }
        });
    }
});
