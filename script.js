const name = document.querySelector('h1');

name.addEventListener('click', () => {
	if (name.className === 'display-4') {
		name.className = 'display-4 color-change';
	} else if (name.className === 'display-4 color-change') {
		name.className = 'display-4';
	}
});
