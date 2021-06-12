var windw = $(window);
/*
|--------------------------------------------------------------------------
	COLOR SCHEME
|--------------------------------------------------------------------------
*/

const styleToggler = document.querySelector(".style-toggler");
styleToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

//hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
});

//Theme Background color
function lightFunction() {
    $('.about-section').css("background-color", "#ffffff");
    $('.service-section').css("background-color", "#f9f9f9");
    $('.success-story').css("background-color", "#fff");
    $('.portfolio-section').css("background-color", "#f9f9f9");
    $('.team-section').css("background-color", "#fff");
    $('.testimonial-section').css("background-color", "#f9f9f9");
    $('.pricing-section').css("background-color", "#ffffff");
    $('.news-section').css("background-color", "#f9f9f9");
    $('.contact-section').css("background-color", "#ffffff");

    $('.team-box,.testimonial-box,.post-box').css("background-color", "#fff");
    $('.counter-wrap,.pricing-wrap').css("background-color", "#fff");
    $('.text-color-dark,.light-icon').css("color", "#000");


}

function darkFunction() {

    $('.about-section').css("background-color", "#111111");
    $('.service-section').css("background-color", "#000000");
    $('.success-story').css("background-color", "#111111");
    $('.portfolio-section').css("background-color", "#000000");
    $('.team-section').css("background-color", "#111111");
    $('.testimonial-section').css("background-color", "#000000");
    $('.pricing-section').css("background-color", "#111111");
    $('.news-section').css("background-color", "#000000");
    $('.contact-section').css("background-color", "#111111");

    $('.team-box,.testimonial-box,.post-box').css("background-color", "#111111");
    $('.counter-wrap,.pricing-wrap').css("background-color", "#000");
    $('.text-color-light,.light-icon').css("color", "#fff");
}

// color
$(document).ready(function() {

    $('.themes-btn ').click(function() {

        $('.colors, span').toggleClass('active');

    });

    // text-color 
    $('ul.text-colors li').click(function() {
        $('.color,.social-icon,.counter-icon').css('color', $(this).css('color'));

        //  $('.color-scheme,.color, .quote ,.active,.typewrite,.read,.soci-link1,.soci-link2,.soci-link3,.soci-link4,.f,.in,.p,.t').css('color', $(this).css('color'));

        $('.btn,.btn-clr,.service-icon,.price-rate').css('background-color', $(this).css('color'));
        $('.social-icon').css('border-color', $(this).css('color'));

    });
});


/// mouse-hover

// $(document).ready(function() {
//     $("#service-box1").mouseover(function() {
//         $(".service-title1,.service-subtitle1").css("color", "#fff");
//     });
//     $("#service-box1").mouseout(function() {
//         $(".service-title1,.service-subtitle1").css("color", "#000");
//     });
// });
// $(document).ready(function() {
//     $("#service-box2").mouseover(function() {
//         $(".service-title2,.service-subtitle2").css("color", "#fff");
//     });
//     $("#service-box2").mouseout(function() {
//         $(".service-title2,.service-subtitle2").css("color", "#000");
//     });
// });
// $(document).ready(function() {
//     $("#service-box3").mouseover(function() {
//         $(".service-title3,.service-subtitle3").css("color", "#fff");
//     });
//     $("#service-box3").mouseout(function() {
//         $(".service-title3,.service-subtitle3").css("color", "#000");
//     });
// });

//success

// $(document).ready(function() {
//     $(".counter-hov1").mouseover(function() {
//         $(".counter-hov1").css("background-color", "#4169E1");
//     });
//     $(".counter-hov1").mouseout(function() {
//         $(".counter-hov1").css("background-color", "#fff");
//     });
// });
/*
|--------------------------------------------------------------------------
	 NAVBAR SCROLL
|--------------------------------------------------------------------------
*/

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });

    //toggle menu/navbar script
    $('.navbar-toggler').click(function() {
        $('.navbar-nav').toggleClass("active");
        $('.navbar-toggler i').toggleClass("active");

    });
});

/*
|--------------------------------------------------------------------------
	SMOOTH SCROLL
|--------------------------------------------------------------------------
*/
$(document).on('click', 'a[href*="#"]:not([href="#"])', function(event) {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        var topBar_height = $('.TopBar').outerHeight() - 3;
        if (!topBar_height)
            topBar_height = 0;

        var header_height = 50 + topBar_height;

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - header_height
            }, 1000);
            return false;
        }
    }
});

/*
|--------------------------------------------------------------------------
	Text typing text
|--------------------------------------------------------------------------
*/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};


/*
|--------------------------------------------------------------------------
	 Skill / Progress Bar
|--------------------------------------------------------------------------
*/


console.log("JavaScript is amazing!");
$(document).ready(function($) {
    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle-inner').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle-inner').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 14,
                    fill: {
                        color: '#4169E1'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('.circle').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});
console.log("JavaScript is amazing!");
$(document).ready(function($) {
    function animateElements() {
        $('.progressbar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle-inner').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle-inner').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 14,
                    fill: {
                        color: '#4169E1'
                    }
                }).on('circle-animation-progress', function(event, progress, stepValue) {
                    $(this).find('.circle').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
});

/*
|--------------------------------------------------------------------------
	Counter
|--------------------------------------------------------------------------
*/

$(".counter").counterUp({
    delay: 10,
    time: 1000,

});

/*
|--------------------------------------------------------------------------
	isotope Filter Start
|--------------------------------------------------------------------------
*/
var myTheme = window.myTheme || {},
    $win = $(window);

myTheme.Isotope = function() {
    // 4 column layout
    var isotopeContainer = $('.isotopeContainer');
    if (!isotopeContainer.length || !jQuery().isotope) return;
    $win.on('load', function() {
        isotopeContainer.isotope({
            itemSelector: '.isotopeSelector'
        });
        $('.isotopeFilters').on('click', 'a', function(e) {
            $('.isotopeFilters').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer.isotope({ filter: filterValue });
            e.preventDefault();
        });
    });
};
myTheme.Isotope();

/*
|--------------------------------------------------------------------------
    Lighbox
|--------------------------------------------------------------------------
*/
lightbox.option({
    'albumLabel': "Item %1 of %2",
    'positionFromTop': 40,
    'resizeDuration': 500,
    'disableScrolling': false
});

if ($(document.body).width() > 1200) {
    lightbox.option({
        'disableScrolling': true
    });
}

windw.resize(function() {

    if ($(document.body).width() < 1200) {
        $(".lb-dataContainer").css("width", "80%");
        $(".lb-dataContainer").css("height", "80%");
        $(".lb-outerContainer").css("width", "80%");
        $(".lb-outerContainer").css("height", "80%");
        $(".lb-image").css("width", "100%");
        $(".lb-image").css("height", "100%");
    }

});

/*
|--------------------------------------------------------------------------
	owl carousel
|--------------------------------------------------------------------------
*/

var owl = $('#testimonial-carousel');
owl.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 3
        },

        1200: {
            items: 3
        }
    }
});

var owl2 = $('#blog-carousel');
owl2.owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 3
        },

        1200: {
            items: 3
        }
    }
});



/*
|--------------------------------------------------------------------------
	Window scroll button
|--------------------------------------------------------------------------
*/
// <!-- get the btn -->

mybutton = document.getElementById("myBtn");
window.scroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}