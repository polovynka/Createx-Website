"use strict";
"use strict";var circle=document.querySelectorAll("svg[data-value] .circle");function calcStrokeDashoffset(){circle.forEach((function(e){var t=e.getTotalLength()*((100-parseInt(e.parentNode.getAttribute("data-value")))/100);e.style.strokeDashoffset=Math.max(0,t)}))}var observer=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&calcStrokeDashoffset()}))}));observer.observe(document.querySelector(".facts__list"));
"use strict";var portfolioSlider=new Swiper(".portfolio-section__items",{slidesPerView:3,spaceBetween:30,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".portfolio-section__next",prevEl:".portfolio-section__prev"}}),testimonialsSlider=new Swiper(".testimonials__items",{slidesPerView:1,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".testimonials__next",prevEl:".testimonials__prev"}});