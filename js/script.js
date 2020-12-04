
//menu
const iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
	const body = document.querySelector('body');
	const menuBody = document.querySelector('.menu__body');
	const menuLink = menuBody.querySelectorAll('.menu__link');
	const menuClose = document.querySelector('.close-menu');

	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
		body.classList.toggle('lock');
	});

	//закрытие при нажатии на menu__link
	for (var i = 0; i < menuLink.length; i++) {
		menuLink[i].addEventListener("click", function(e) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		});
	}
	
	//закрытие при нажатии на .close-menu
	if (menuClose != null) {
		menuClose.addEventListener("click", function(e) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		});
	}

	//закрытие при нажатии не! на меню
	document.documentElement.addEventListener('click', function(e) {
		if (!e.target.closest('.menu')) {
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
			body.classList.remove('lock');
		}
	});	
}

//ibg
function ibg() {
	let ibg = document.querySelectorAll('.ibg');
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') +')';
		}
	}
}
ibg();

$(document).ready(function(){
	if($('.main-slider').length>0){
		$('.main-slider').slick({
			// autoplay: true,
			//infinite: false,
			dots: false,
			arrows: true,
			accessibility:false,
			slidesToShow:1,
			autoplaySpeed: 5000,
			adaptiveHeight: true,
			nextArrow:'<button type="button" class="slick-next"></button>',
			prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}
});