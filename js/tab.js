const itemTab = document.querySelectorAll('.tab__item');

for (var i = 0; i < itemTab.length; i++) {
	itemTab[i].addEventListener("click", function(e) {
		if (!this.classList.contains('active')) {
			var id = this.getAttribute('data-tab');
			var content = document.querySelector('.tab__content[data-tab="'+ id +'"]');

			document.querySelector('.tab__item.active').classList.remove('active');
			this.classList.add('active');

			animationTabContent(content, 200); //время для transition
		} 
	});
}

function animationTabContent(content, timeout) {
	activeBlock = document.querySelector('.tab__content.active')
	content.style.opacity = '0';

	setTimeout(function() {
		activeBlock.classList.remove('active');
	}, timeout/2);

	setTimeout(function() {
		content.classList.add('active');
	}, timeout/2);

	setTimeout(function() {
		content.style.opacity = '1';
	}, timeout);
}
