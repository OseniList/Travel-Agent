function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navLinks = document.querySelectorAll('.nav-link');

	navBtn.addEventListener('click', function() {
		menuIcon.classList.toggle('nav-icon--active');
		nav.classList.toggle('mobile-nav--open');

		navLinks.forEach(function(navLink){
			navLink.addEventListener('click', function(){
				nav.classList.remove('mobile-nav--open');
				menuIcon.classList.remove('nav-icon--active');
			})
		})
	})
}

export default mobileNav;