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

const testimonialsSlider = new Swiper('.testimonials__items', {
	// Optional parameters
	slidesPerView: 1,
	watchSlidesProgress: true,

	loop: true,
	navigation: {
		nextEl: '.testimonials__next',
		prevEl: '.testimonials__prev',
	},

});
