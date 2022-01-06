"use strict";
"use strict";if(document.querySelector(".accordion"))var accordion1=new Accordion(".accordion-1",{speed:300}),accordion2=new Accordion(".accordion-2",{speed:300});
"use strict";var circle=document.querySelectorAll("svg[data-value] .circle");function calcStrokeDashoffset(){circle.forEach((function(e){var t=e.getTotalLength()*((100-parseInt(e.parentNode.getAttribute("data-value")))/100);e.style.strokeDashoffset=Math.max(0,t)}))}var circleList=document.querySelector(".facts__list");if(circleList){var observer=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&calcStrokeDashoffset()}))}));observer.observe(circleList)}
"use strict";var portSlider=document.querySelector(".portfolio-section__items"),testimon=document.querySelector(".testimonials__items"),relatedSlider=document.querySelector(".related-projects__items");if(portSlider)var portfolioSlider=new Swiper(portSlider,{slidesPerView:3,spaceBetween:30,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".portfolio-section__next",prevEl:".portfolio-section__prev"}});if(testimon)var tesimonials=new Swiper(testimon,{slidesPerView:1,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".testimonials__next",prevEl:".testimonials__prev"}});if(relatedSlider)var relatedProjSlider=new Swiper(relatedSlider,{slidesPerView:3,spaceBetween:30,watchSlidesProgress:!0,loop:!0,navigation:{nextEl:".related-projects__next",prevEl:".related-projects__prev"}});