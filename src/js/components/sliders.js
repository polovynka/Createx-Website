const portfolioSlider = new Swiper('.portfolio-section__items', {
	// Optional parameters
	slidesPerView: 3,
	spaceBetween: 30,
	watchSlidesProgress: true,

	loop: true,
	navigation: {
		nextEl: '.portfolio-section__next',
		prevEl: '.portfolio-section__prev',
	},

});
