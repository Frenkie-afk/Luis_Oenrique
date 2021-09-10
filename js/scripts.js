$(document).ready(function(){
    //carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoHeight: true,
        nav:true,
        navText: [ '', ' ' ],
        navSpeed: 1000,
        dotsSpeed: 1000,
        touchDrag: false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav: false
            },
            425: {
                items:1,
                dots:true,
                nav: false
            },
            768: {
                items:1,
                dots:true,
                nav: false
            },
            1000:{
                items:1,
                nav: false
            }
        },
        animateOut: "fadeOut" ,
    });

});
