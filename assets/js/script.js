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
var unit = 1;
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

// ****** RATING-JS-START ********//
$(document).ready(function() {
    $('.stars li').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10);
        $(this).parent().children('li.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function() {
        $(this).parent().children('li.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.stars li').on('click', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.smallstar');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('starselected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('starselected');
        }

        // JUST RESPONSE (Not needed)
        var ratingValue = parseInt($('.stars li.starselected').last().data('value'), 10);
        var msg = "";
        if (ratingValue > 1) {
            msg = "" + ratingValue + " (5.0).";
        } else {
            msg = "" + ratingValue + " (5.0)";
        }
        responseMessage(msg);

    });
});

function responseMessage(msg) {
    $('.success-box').fadeIn(200);
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
// ****** RATING-JS-ENDS ********//
/*------ MAIN-RATING-VIEW-LIST-JS-START -------*/
var starClicked = false;
$(function() {

    $('.star').click(function() {

        $(this).children('.selected').addClass('is-animated');
        $(this).children('.selected').addClass('pulse');

        var target = this;

        setTimeout(function() {
            $(target).children('.selected').removeClass('is-animated');
            $(target).children('.selected').removeClass('pulse');
        }, 1000);

        starClicked = true;
    })

    $('.half').click(function() {
        if (starClicked == true) {
            setHalfStarState(this)
        }
        $(this).closest('.rating-main').find('.js-score').text($(this).data('value'));

        $(this).closest('.rating-main').data('vote', $(this).data('value'));
        calculateAverage()
        console.log(parseInt($(this).data('value')));

    })

    $('.full').click(function() {
        if (starClicked == true) {
            setFullStarState(this)
        }
        $(this).closest('.rating-main').find('.js-score').text($(this).data('value'));

        $(this).find('js-average').text(parseInt($(this).data('value')));

        $(this).closest('.rating-main').data('vote', $(this).data('value'));
        calculateAverage()

        console.log(parseInt($(this).data('value')));
    })

    $('.half').hover(function() {
        if (starClicked == false) {
            setHalfStarState(this)
        }

    })

    $('.full').hover(function() {
        if (starClicked == false) {
            setFullStarState(this)
        }
    })

})

function updateStarState(target) {
    $(target).parent().prevAll().addClass('animate');
    $(target).parent().prevAll().children().addClass('star-colour');

    $(target).parent().nextAll().removeClass('animate');
    $(target).parent().nextAll().children().removeClass('star-colour');
}

function setHalfStarState(target) {
    $(target).addClass('star-colour');
    $(target).siblings('.full').removeClass('star-colour');
    updateStarState(target)
}

function setFullStarState(target) {
    $(target).addClass('star-colour');
    $(target).parent().addClass('animate');
    $(target).siblings('.half').addClass('star-colour');

    updateStarState(target)
}

function calculateAverage() {
    var average = 0

    $('.rating-main').each(function() {
        average += $(this).data('vote')
    })

    $('.js-average').text((average / $('.rating-main').length).toFixed(1))
}

/*------ MAIN-RATING-VIEW-LIST-JS-END -------*/
//*** PROGRESS-BAR--JS-START ***//

var delay = 500;
$(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now) + '%');
        }
    });
});

//*** PROGRESS-BAR--JS-END ***//
//*** SMILAR-PRODUCTS-SLIDER-JS-START ***/

$(document).ready(function() {
    $('#similarSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});


//*** SMILAR-PRODUCTS-SLIDER-JS-END ***/

//***CART-MODAL-JS-START ***/
$("body").on("click",".applycouponmodal",function(e){
   
    jQuery.noConflict();
    $('#checkpayeModal').modal('hide');
    $('#applycouponopnmodal').modal('show');
});
$("body").on("click",".back-arrow",function(e){

jQuery.noConflict();
$('#checkpayeModal').modal('show');
$('#applycouponopnmodal').modal('hide');
});


$("body").on("click",".directbankbtn",function(e){
   
    jQuery.noConflict();
    $('#checkpayeModal').modal('hide');
    $('#directbankopnmodal').modal('show');
});
$("body").on("click",".bnkback-arrow",function(e){

    jQuery.noConflict();
    $('#checkpayeModal').modal('show');
    $('#directbankopnmodal').modal('hide');
    });
    $("body").on("click",".purchase-btn",function(e){
   
        jQuery.noConflict();
        $('#directbankopnmodal').modal('hide');
        $('#purchaseopnmodal').modal('show');
    });
    
    $("body").on("click",".bnkback-arrow",function(e){
    
        jQuery.noConflict();
        $('#directbankopnmodal').modal('show');
        $('#purchaseopnmodal').modal('hide');
});   
//***CART-MODAL-JS-END ***/

// **** ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ****//
$("body").on("click",".unavailable-btn",function(e){
   
    jQuery.noConflict();
    $('#modal-right').modal('hide');
    $('#unavailable-modal').modal('show');
});
$("body").on("click",".order-bk",function(e){

jQuery.noConflict();
$('#modal-right').modal('show');
$('#unavailable-modal').modal('hide');
});
 

// **** ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ****//

// **** ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ****//
$("body").on("click",".viewdetail-btn",function(e){
   
    jQuery.noConflict();
    $('#modal-right').modal('hide');
    $('#viewdetails-modal').modal('show');
});
$("body").on("click",".details-back",function(e){

jQuery.noConflict();
$('#modal-right').modal('show');
$('#viewdetails-modal').modal('hide');
});
 

// **** ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ****//

// **** ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ****//
$("body").on("click",".track-btn",function(e){
   
    jQuery.noConflict();
    $('#modal-right').modal('hide');
    $('#trackorder-modal').modal('show');
});


// **** ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ****//
