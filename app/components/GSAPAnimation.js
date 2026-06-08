"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimation() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Title Slide-Ins
    const internalText = document.querySelector(".hero-internal");
    const accountantsText = document.querySelector(".hero-accountants");
    
    if (internalText) {
      gsap.fromTo(
        internalText,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
      );
    }
    
    if (accountantsText) {
      gsap.fromTo(
        accountantsText,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
      );
    }

    // Helper to update the hanging string SVG coordinates
    const string = document.getElementById("hanging-string");
    const airplane = document.querySelector(".paper-airplane");
    
    const updateString = () => {
      if (string && airplane) {
        const x = gsap.getProperty(airplane, "x");
        const y = gsap.getProperty(airplane, "y");
        const opacity = gsap.getProperty(airplane, "opacity");
        const container = string.parentElement;
        if (container) {
          const rect = container.getBoundingClientRect();
          const startX = rect.width / 2;
          const startY = 0;
          
          // Attach string exactly to the center-top of the paper airplane:
          // Coordinates are offset slightly from the element center (which is at rect.height/2)
          const endX = rect.width / 2 + x;
          const endY = rect.height / 2 + y - 12;
          
          string.setAttribute("x1", startX.toString());
          string.setAttribute("y1", startY.toString());
          string.setAttribute("x2", endX.toString());
          string.setAttribute("y2", endY.toString());
          string.setAttribute("opacity", opacity.toString());
        }
      }
    };

    // Add resize listener to update string on window resize
    window.addEventListener("resize", updateString);

    // 2. Paper Airplane Swoop Flight Path & Constant Hovering Loop
    if (airplane) {
      const introTl = gsap.timeline({
        onUpdate: updateString,
        onComplete: () => {
          // Constant looping flight/hover animation simulating wind drift
          gsap.to(airplane, {
            repeat: -1,
            ease: "none",
            duration: 8,
            onUpdate: updateString,
            keyframes: [
              { x: 30, y: -25, rotation: 12, duration: 2, ease: "sine.inOut" },
              { x: -15, y: 20, rotation: 4, duration: 2, ease: "sine.inOut" },
              { x: -40, y: -15, rotation: 6, duration: 2, ease: "sine.inOut" },
              { x: 0, y: 0, rotation: 8, duration: 2, ease: "sine.inOut" }
            ]
          });

          // Add a high-frequency wind flutter to the child image for realism
          const airplaneImg = airplane.querySelector("img");
          if (airplaneImg) {
            gsap.to(airplaneImg, {
              rotation: "+=2.5",
              y: "+=3.5",
              x: "+=1.5",
              duration: 0.35,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          }
        }
      });

      introTl.fromTo(
        airplane,
        {
          x: -1200,
          y: 400,
          rotation: -35,
          scale: 2.0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 8,
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
          delay: 0.6,
        }
      );
    }

    // 2b. Purple Wind Swirl Flow Animations
    const windCurves = document.querySelectorAll(".wind-curve");
    windCurves.forEach((curve, index) => {
      gsap.fromTo(
        curve,
        {
          x: -250,
          opacity: 0,
          scaleX: 0.8,
        },
        {
          x: 250,
          opacity: (index % 2 === 0) ? 0.35 : 0.2,
          scaleX: 1.2,
          duration: 4.5 + index * 0.8,
          repeat: -1,
          ease: "sine.inOut",
          delay: index * 1.5,
        }
      );
    });

    // 3. Dual-Direction Velocity-Linked Scrolling Marquees
    const trackLeft = document.querySelector(".marquee-track-left");
    const trackRight = document.querySelector(".marquee-track-right");
    const marqueeSection = document.querySelector(".marquee-section");

    if (trackLeft && trackRight && marqueeSection) {
      // Endless linear timelines
      const tlLeft = gsap.to(trackLeft, {
        xPercent: -50,
        repeat: -1,
        ease: "none",
        duration: 18,
      });

      const tlRight = gsap.to(trackRight, {
        xPercent: 0,
        repeat: -1,
        ease: "none",
        duration: 18,
      });
      // Start Right track from left-shifted position
      gsap.set(trackRight, { xPercent: -50 });

      // ScrollTrigger to bind velocity
      ScrollTrigger.create({
        trigger: marqueeSection,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = Math.min(2000, Math.abs(self.getVelocity()));
          const multiplier = 1 + velocity * 0.006;
          
          if (self.direction === 1) {
            // Scroll down: Left track speeds up (negative xPercent), Right track reverses
            gsap.to(tlLeft, { timeScale: multiplier, duration: 0.3, overwrite: "auto" });
            gsap.to(tlRight, { timeScale: -multiplier, duration: 0.3, overwrite: "auto" });
          } else {
            // Scroll up: Left track reverses, Right track speeds up
            gsap.to(tlLeft, { timeScale: -multiplier, duration: 0.3, overwrite: "auto" });
            gsap.to(tlRight, { timeScale: multiplier, duration: 0.3, overwrite: "auto" });
          }
        },
        onLeave: () => {
          gsap.to(tlLeft, { timeScale: 1, duration: 0.5 });
          gsap.to(tlRight, { timeScale: 1, duration: 0.5 });
        },
        onEnterBack: () => {
          gsap.to(tlLeft, { timeScale: 1, duration: 0.5 });
          gsap.to(tlRight, { timeScale: 1, duration: 0.5 });
        }
      });
    }



    // 5. Generic block reveals
    const reveals = document.querySelectorAll(".gsap-reveal");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 6. Staggered child reveals (grids)
    const staggerGrids = document.querySelectorAll(".gsap-stagger-grid");
    staggerGrids.forEach((grid) => {
      const children = grid.children;
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // 7. Animated Stats Counters
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach((el) => {
      const targetVal = parseInt(el.getAttribute("data-target"), 10) || 0;
      const suffix = el.getAttribute("data-suffix") || "";
      const counterObj = { val: 0 };
      
      gsap.to(counterObj, {
        val: targetVal,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.innerText = Math.floor(counterObj.val).toLocaleString() + suffix;
        }
      });
    });

    // 8. Vertical Timeline Connection Line Progress
    const progressBar = document.querySelector(".timeline-progress-bar");
    const timelineContainer = document.querySelector(".process-timeline-container");
    
    if (progressBar && timelineContainer) {
      gsap.to(progressBar, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: timelineContainer,
          start: "top 35%",
          end: "bottom 65%",
          scrub: true,
        }
      });
    }

    // 9. Timeline Step Circle lighting up
    const stepRows = document.querySelectorAll(".timeline-step-row");
    stepRows.forEach((row) => {
      const circle = row.querySelector(".timeline-step-circle");
      if (circle) {
        gsap.fromTo(circle,
          {
            backgroundColor: "rgba(3, 46, 50, 0.6)",
            color: "var(--ia-text-secondary)",
            borderColor: "var(--ia-border)",
            scale: 1,
          },
          {
            backgroundColor: "var(--ia-blue)",
            color: "var(--ia-navy)",
            borderColor: "var(--ia-blue)",
            scale: 1.18,
            duration: 0.45,
            scrollTrigger: {
              trigger: row,
              start: "top 50%",
              end: "bottom 50%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      }
    });

    // 10. Showcase Image Zoom & Mask Reveals
    const revealOverlays = document.querySelectorAll(".image-reveal-overlay");
    revealOverlays.forEach((overlay) => {
      gsap.to(overlay, {
        xPercent: 101,
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: overlay.parentElement,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });

    const revealImgs = document.querySelectorAll(".image-reveal-img");
    revealImgs.forEach((img) => {
      gsap.fromTo(img,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // 11. Background Watermark Parallax Drifts
    const parallaxLeaves = document.querySelectorAll(".floating-parallax-leaf");
    parallaxLeaves.forEach((leaf, idx) => {
      gsap.to(leaf, {
        y: idx % 2 === 0 ? -140 : 140,
        rotation: idx % 2 === 0 ? 35 : -35,
        ease: "none",
        scrollTrigger: {
          trigger: leaf.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        }
      });
    });

    // 12. Ship Section Pinned & Scale Animation
    const shipSection = document.querySelector(".ship-section");
    const shipImage = document.querySelector(".ship-image");
    
    if (shipSection && shipImage) {
      const shipTl = gsap.timeline({
        scrollTrigger: {
          trigger: shipSection,
          start: "top top",
          end: "+=120%",
          scrub: 1.0,
          pin: true,
          anticipatePin: 1,
        }
      });
      
      // Scale down ship image on scroll to create an immersive zoom out
      shipTl.fromTo(shipImage,
        { scale: 1.15 },
        { scale: 1.0, ease: "none" }
      );
    }

    // Cleanup triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updateString);
    };
  }, []);

  return null;
}
