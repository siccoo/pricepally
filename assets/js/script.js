/*------ fixed-header-js-start ------ */
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.start-header').addClass('sticky-bg');
    } else {
        $('.start-header').removeClass('sticky-bg');
    }
})

/* ------ dropdown-menu-js-start ------ */
$(document).ready(function() {
    //the trigger on hover when cursor directed to this class
    $(".drop-menu li").hover(
        function() {
            //i used the parent ul to show submenu
            $(this).children('ul').slideDown('fast');
        },
        //when the cursor away 
        function() {
            $('ul', this).slideUp('fast');
        });
});

/* ------ dropdown-menu-js-end ------ */
/*------ fixed-header-js-end ------ */
/*------ CATOGERIES-SLIDER-JS-START -------*/
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<i class='material-icons'>west</i>",
        "<i class='material-icons'>east</i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        50: {
            items: 2
        },
        1000: {
            items: 6
        }
    }
})

/*------ CATOGERIES-SLIDER-JS-END -------*/

/*------ PRODUCTS-DETAIL-JS-START -------*/
$(".mini img").click(function() {

    $(".maxi").attr("src", $(this).attr("src").replace("120x100", "500x300"));

});
/*------ PRODUCTS-DETAIL-JS-END -------*/
/*------ PLUS-MINUS-BUTTON-JS-START -------*/
var unit = 0;
var total;
// if user changes value in field
$('.field').change(function() {
    unit = this.value;
});
$('.add').click(function() {
    unit++;
    var $input = $(this).prevUntil('.sub');
    $input.val(unit);
    unit = unit;
});
$('.sub').click(function() {
    if (unit > 1) {
        unit--;
        var $input = $(this).nextUntil('.add');
        $input.val(unit);
    }
});

/*------ PLUS-MINUS-BUTTON-JS-END -------*/
/*------ SEARCH-BAR-LIST-JS-START -------*/

/*------ SEARCH-BAR-LIST-JS-END -------*/