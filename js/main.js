
// Owl slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1600:{
            items:6
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// Header scroll

$(document).scroll(function() {
    if($(document).scrollTop() > 100) {
        $('header').addClass('header_scroll');
    }
    else {
        $('header').removeClass('header_scroll');
    }
});

// Mob button

$(".toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});


$(".toggle-menu").click(function() {
    $('nav').fadeToggle();;
});


// Back to top

$(document).scroll(function(){
  if($(this).scrollTop() > 700) {
    $('.scrollToTop').fadeIn();
  }else {
    $('.scrollToTop').fadeOut();
  }

})

$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop: 0},800);
});

// Slide down


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 265
        }, 3500);
        event.preventDefault();
    });
});

// Active btn

$(".nav li a").click(function(){
  $(".nav li a").removeClass("active");
  $(this).addClass("active");
});


// Video play

function initializeControls(container, video) {
    // Initialize play button
    if (video.paused) {
        container.querySelector("#supervideo-playbutton").innerHTML = ""
    } else {
        container.querySelector("#supervideo-playbutton").innerHTML = ""
    }
    container.querySelector("#supervideo-playbutton").addEventListener("click", function(){
        if (video.paused) {
            video.play();
            container.querySelector("#supervideo-playbutton").innerHTML = ""
        } else {
            video.pause();
            container.querySelector("#supervideo-playbutton").innerHTML = ""
        }
    });
}

function createVidElement() {
    var videos = document.body.querySelectorAll(".supervideo");

    [].forEach.call(videos, function(video) {
        // Hide controls if the player has tdem
        if (video.hasAttribute("controls")) {
            video.controls = false;
        }
        // Create video container
        var container = document.createElement('div');
        container.setAttribute("class", "supervideo-container");
        video.parentElement.appendChild(container);
        
      //container.appendChild(video);
        
      // Created media controls
        container.innerHTML = container.innerHTML + '<table cellpadding="0" cellspacing="0" id="supervideo-controls"><tr> <td><button id="supervideo-playbutton" type="button"></button></td> </table>';
        initializeControls(container, video);
    });
}

createVidElement();