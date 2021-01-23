(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

 //Magnific popup calls
 $(document).ready(function() {
  $('#portfolio').magnificPopup({
    closeBtnInside: false,
    items:[
       {src:'#producto1'},
       {src:'#producto2'},
       {src:'#producto3'},
       {src:'#producto4'},
       {src:'#producto16'},
       {src:'#producto17'},
       {src:'#producto18'},
       {src:'#producto19'},
    ],

    gallery: {
      enabled: true
    },
    type: 'inline' // this is default type
    
  });
});

$(document).ready(function() {
  $('#portfolio2').magnificPopup({
    closeBtnInside: false,
    items:[
       {src:'#producto5'},
       {src:'#producto6'},
       {src:'#producto8'},
       {src:'#producto9'},
       {src:'#producto10'},
    ],

    gallery: {
      enabled: true
    },
    type: 'inline' // this is default type
    
  });
});

$(document).ready(function() {
  $('#portfolio3').magnificPopup({
    closeBtnInside: false,
    items:[
       {src:'#producto11'},
       {src:'#producto12'},      
       {src:'#producto13'},
       {src:'#producto14'},
       {src:'#producto20'},
       {src:'#producto21'},      
       {src:'#producto22'},
       {src:'#producto23'},
       
    ],

    gallery: {
      enabled: true
    },
    type: 'inline' // this is default type
    
  });
});

$(document).ready(function() {
  $('#portfolio4').magnificPopup({
    closeBtnInside: false,
    items:[
       {src:'#producto15'},  
    ],

    gallery: {
      enabled: false
    },
    type: 'inline' // this is default type
    
  });
});

})(jQuery); // End of use strict
  

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


