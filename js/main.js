const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');

if (menuToggle && mainMenu) {
	const menuLinks = mainMenu.querySelectorAll('a');

	const setMenuState = (isOpen) => {
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
		mainMenu.setAttribute('aria-hidden', String(!isOpen));
		mainMenu.classList.toggle('is-open', isOpen);
	};

	menuToggle.addEventListener('click', () => {
		const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
		setMenuState(!isOpen);
	});

	menuLinks.forEach((link) => {
		link.addEventListener('click', () => setMenuState(false));
	});

	document.addEventListener('click', (event) => {
		if (!event.target.closest('.menu-wrap')) {
			setMenuState(false);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setMenuState(false);
			menuToggle.focus();
		}
	});
}
