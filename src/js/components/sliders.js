const portSlider = document.querySelector(".portfolio-section__items");
const testimon = document.querySelector(".testimonials__items");
const relatedSlider = document.querySelector(".related-projects__items");

if (portSlider) {
  const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,

    loop: true,
    navigation: {
      nextEl: ".portfolio-section__next",
      prevEl: ".portfolio-section__prev",
    },
  });
}

if (testimon) {
  const tesimonials = new Swiper(testimon, {
    slidesPerView: 1,
    watchSlidesProgress: true,

    loop: true,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },
  });
}

if (relatedSlider) {
  const relatedProjSlider = new Swiper(relatedSlider, {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,

    loop: true,
    navigation: {
      nextEl: ".related-projects__next",
      prevEl: ".related-projects__prev",
    },
  });
}
