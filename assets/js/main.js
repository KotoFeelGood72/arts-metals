


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');

	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['about']);
		pageWidget(['contacts']);
		pageWidget(['policy']);
		pageWidget(['ready-made']);
		pageWidget(['shop']);
		pageWidget(['stairs']);
		getAllClasses('html', '.elements_list');
	}

	
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	modal();
	loadVisibleContent();
	checkSubmenu();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})









$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})


const PROJECT_SLIDER = new Swiper('.project_slider_home', {
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,			
		},
		1200: {
			slidesPerView: 2.5,
			spaceBetween: 40,
		}
	},
	navigation: {
		nextEl: '.p-next',
		prevEl: '.p-prev',
	},
	// centerMode: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	speed: 700,
})

const PROJECT_SLIDER_ABOUT = new Swiper('.project_slider_about', {
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,			
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		}
	},
	navigation: {
		nextEl: '.p-next',
		prevEl: '.p-prev',
	},
	// centerMode: true,
	centeredSlides: true,
	centeredSlidesBounds: true,
	speed: 700,
})


const REVIEW_SLIDER = new Swiper('.reviews_slider', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,			
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 112,
    }
  },
  pagination: {
    el: '.reviews_pagination',
    renderBullet: function (index, className) {
      var bulletNumber = (index + 1) >= 10 ? (index + 1) : '0' + (index + 1);
      return '<span class="' + className + '">' + bulletNumber + '</span>';
    },
  },
  speed: 700,
});



function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}



function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			popup.forEach((el) => {
				initSlider();
				checkSubmenu();
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}

function initSlider() {
	const popupSlider = new Swiper('.popup_slider', {
		spaceBetween: 40,
		speed: 500,
		navigation: {
			nextEl: '.pro-next',
			prevEl: '.pro-prev',
		}
	})
}


function loadVisibleContent() {
  let seoBlocks = document.querySelectorAll(".seo-block_w");

  Array.from(seoBlocks).forEach((seoBlock) => {
    let loadMoreButton = seoBlock.querySelector(".link-more");
    let smallBlock = seoBlock.querySelector(".seo_block");
    smallBlock.classList.remove("visible");

    loadMoreButton.addEventListener("click", function (e) {
			e.preventDefault();
      if (smallBlock.classList.contains("visible")) {
        smallBlock.classList.remove("visible");
        loadMoreButton.querySelector("p").innerHTML = "Показать больше";
      } else {
        smallBlock.classList.add("visible");
        loadMoreButton.querySelector("p").innerHTML = "Скрыть";
      }
    });
  });
}


function checkSubmenu() {
	const menuList = document.querySelectorAll('.burger_nav--list');

	Array.from(menuList).map((menuParentItem) => {
		let menuItem = menuParentItem.querySelectorAll('li')
	
		Array.from(menuItem).map((el) => {
			let checkItems = el.children
			Array.from(checkItems).map((items) =>{
				let icon = document.createElement('div')
				icon.className = 'icon-submenu'
				if(items.classList.contains('sub-menu')) {
					let iconSet = el.appendChild(icon)

					iconSet.addEventListener('click', (e) => {
						const target = e.target.parentElement

						if (target.classList.contains('current-children-item')) {
							target.classList.remove('current-children-item')
						} else {
							target.classList.add('current-children-item');
						}

					})
				}
			})
		})
	})
}
























































