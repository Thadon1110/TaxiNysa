const navbar = document.querySelector('.nav');
const hamBtn = document.querySelector('.nav__menu-burger .fa-bars');
const xBtn = document.querySelector('.nav__mobile .nav__mobile-exit');
const navMobile = document.querySelector('.nav__mobile');
const navMobileA = document.querySelectorAll('.nav__mobile a');
const body = document.querySelector('body');
const footerYear = document.querySelector('.footer__copyright-year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const menuToggle = () => {
	navMobile.classList.toggle('nav__mobile--active');

	if (navMobile.classList.contains('nav__mobile--active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

const navChangeBgc = () => {
	if (window.scrollY >= 80) {
		navbar.classList.add('nav__scroll');
	} else {
		navbar.classList.remove('nav__scroll');
	}
};

handleCurrentYear();
window.addEventListener('scroll', navChangeBgc);
hamBtn.addEventListener('click', menuToggle);
xBtn.addEventListener('click', menuToggle);
navMobileA.forEach((hrefs) => {
	hrefs.addEventListener('click', menuToggle);
});
