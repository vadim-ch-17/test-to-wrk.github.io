let swohHideProducts = document.getElementById('hide-products');
let buttonShowProduct = document.getElementById('show-more');
let bannerBtn = document.getElementById('banner__btn');
let productsBtn = document.getElementById('products__btn');
let headerSection = document.getElementById('header');

window.addEventListener('scroll', function(){
    if ( window.scrollY > 100 ) {
        headerSection.style.backgroundColor = "#f2f2f2";
    } else {
         headerSection.style.backgroundColor = "";
    }
   console.log( )
});


productsBtn.onclick = function(){
    console.log("Add product to shopping basket");
}

bannerBtn.onclick = function(){
    console.log("Shop product Now");
}
buttonShowProduct.onclick = function(){
    console.log( buttonShowProduct.children)
    if ( swohHideProducts.getAttribute('class') === 'hide-products' ) {
        buttonShowProduct.innerHTML = `<button class="btn btn_content">Show More</button>`;
        
    } else {
        buttonShowProduct.innerHTML = `<button class="btn btn_content">Hide More</button>`;
        
    }
    swohHideProducts.classList.toggle('d-none');
};

$(document).ready(function(){
	$('.header__burger').click(function(){
		$('.header__burger, .header__menu, .logo_nav_burger, .logo_icon').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
 
    $('.slider').slick({
    	
        arrows:true,
        nextArrow: '<i class="bi bi-chevron-right" aria-label="Next"></i>',
 		 prevArrow: '<i class="bi bi-chevron-left" aria-label="Previous"></i>',
         dots:true,
        adaptiveHeight:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:500,
        easing:'linear',
        infinite:true,
        autoplay:false, 
        autoplaySpeed: 1000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        drggable:false, 
        swipe:true, 
        centerMode:true,
        rows:1,
        responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
    ]

    });
});


