
/*------ fixed-header-js-start ------ */
$(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.start-header').addClass('sticky-bg');
        } else {
            $('.start-header').removeClass('sticky-bg');
        }
    })


    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.Mobheader-fixed').addClass('sticky-bg');
        } else {
            $('.Mobheader-fixed').removeClass('sticky-bg');
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
/* ------ MOBILE-HEADER-JS-START ----- */
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.mobile-search').addClass('sticky-bg');
    } else {
        $('.mobile-search').removeClass('sticky-bg');
    }
})


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 469) {

        $(".fixed-food").addClass('foodsticky-bg');
    } else {
        $(".fixed-food").removeClass('foodsticky-bg');
    }
});
/*------ LISTING-HEADER-JS-START ------ */
$(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.mobile-list-header').addClass('sticky-bg');
        } else {
            $('.mobile-list-header').removeClass('sticky-bg');
        }
    })
    /*------ LISTING-HEADER-JS-END ------ */
    /* ------ MOBILE-HEADER-JS-END ----- */
    /*------ fixed-header-js-end ------ */
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



/* ------ PLUS-MINUS-BUTTON-JS-END -------*/

/* ------ RATING-JS-START -------*/
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
/*------ RATING-JS-ENDS -------*/
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
/*------ PROGRESS-BAR--JS-START -------*/

var delay = 500;
$(".progress-bar").each(function(i) {
    $(this).delay(delay * i).animate({
        width: $(this).attr('aria-valuenow') + '%'
    }, delay);

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

/*------ PROGRESS-BAR--JS-END -------*/
/*------ SMILAR-PRODUCTS-SLIDER-JS-START ***/

$(document).ready(function() {
    $('#similarSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});
$(document).ready(function() {
    $('#similarSlider1').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});


/*------ SMILAR-PRODUCTS-SLIDER-JS-END ------*/

/*------CART-MODAL-JS-START ------*/
$("body").on("click", ".applycouponmodal", function(e) {
    $('#checkpayeModal').modal('hide');
    $('#applycouponopnmodal').modal('show');
});
$("body").on("click", ".back-arrow", function(e) {
    $('#checkpayeModal').modal('show');
    $('#applycouponopnmodal').modal('hide');
});


$("body").on("click", ".directbankbtn", function(e) {
    $('#checkpayeModal').modal('hide');
    $('#directbankopnmodal').modal('show');
});
$("body").on("click", ".bnkback-arrow", function(e) {
    $('#checkpayeModal').modal('show');
    $('#directbankopnmodal').modal('hide');
});
$("body").on("click", ".purchase-btn", function(e) {
    $('#directbankopnmodal').modal('hide');
    $('#purchaseopnmodal').modal('show');
});

$("body").on("click", ".bnkback-arrow", function(e) {
    $('#directbankopnmodal').modal('show');
    $('#purchaseopnmodal').modal('hide');
});

$("body").on("click", ".cartsussefullbtn", function(e) {
    $('#pallyorderModal').modal('hide');
    $('#cartsucessModalopn').modal('show');
});

/*------ CART-MODAL-JS-END ------*/

/*------  ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".unavailable-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#unavailable-modal').modal('show');
});
$("body").on("click", ".order-bk", function(e) {

    $('#modal-right').modal('show');
    $('#unavailable-modal').modal('hide');
});


/*------  ORDER (TRACK-ACTION-CLICK-MODAL)-MODAL-JS-START ------*/

/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".viewdetail-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#viewdetails-modal').modal('show');
});
$("body").on("click", ".details-back", function(e) {

    $('#modal-right').modal('show');
    $('#viewdetails-modal').modal('hide');
});


/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/

/*------  ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/
$("body").on("click", ".track-btn", function(e) {

    $('#modal-right').modal('hide');
    $('#trackorder-modal').modal('show');
});


/*------ ORDER (VIEW-DETAILS-CLICK-MODAL)-MODAL-JS-START ------*/


/*------ FOLLOERS/FOLLOWING-SLIDER-JS-START ***/

$(document).ready(function() {
    $('#folloersSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});
$(document).ready(function() {
    $('#followingSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});

$(document).ready(function() {
    $('#mediaSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});

$(document).ready(function() {
    $('#categoiresSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});



$(document).ready(function() {
    $('#MobfolloersSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});
$(document).ready(function() {
    $('#MobfollowingSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1000,
        hoverPause: true

    });
});

/*------ FOLLOERS/FOLLOWING-SLIDER-JS-END ***/
/*------ EDIT-PROFILE-JS-START ***/
$(document).ready(function() {


    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function() {
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
});

/*------ EDIT-PROFILE-JS-END ***/


// *** MAKE-LIST-MODAL-JS-START -------*/
$("body").on("click", ".cartsussefullbtn", function(e) {
    $('#pallyorderModal').modal('hide');
    $('#cartsuessfullopnmodal').modal('show');
});

$("body").on("click", ".existpally-btn", function(e) {
    $('#alreadypallyModal').modal('hide');
    $('#existpallyModal').modal('show');
});
$("body").on("click", ".existbck-arrow", function(e) {

    $('#alreadypallyModal').modal('show');
    $('#existpallyModal').modal('hide');
});
$("body").on("click", ".applycouponmodal", function(e) {
    $('#makelistcheckeModal').modal('hide');
    $('#applycouponopnmodal').modal('show');
});
$("body").on("click", ".back-arrow", function(e) {
    $('#makelistcheckeModal').modal('show');
    $('#applycouponopnmodal').modal('hide');
});


$("body").on("click", ".directbankbtn", function(e) {
    $('#makelistcheckeModal').modal('hide');
    $('#directbankopnmodal').modal('show');
});
$("body").on("click", ".bnkback-arrow", function(e) {
    $('#makelistcheckeModal').modal('show');
    $('#directbankopnmodal').modal('hide');
});
$("body").on("click", ".purchase-btn", function(e) {
    $('#directbankopnmodal').modal('hide');
    $('#purchaseopnmodal').modal('show');
});

$("body").on("click", ".bnkback-arrow", function(e) {
    $('#directbankopnmodal').modal('show');
    $('#purchaseopnmodal').modal('hide');
});

// *** MAKE-LIST-MODAL-JS-END -------*/
/*------ PRODUCTS-DETAILS-SIDEBAR-JS-START ***/

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 430) {
        $(".sticky-sidebar").addClass("fixedsidebar-header");
    } else {
        $(".sticky-sidebar").removeClass("fixedsidebar-header");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1445) {
        $(".sticky-sidebar").removeClass("fixedsidebar-header");
        $(".sticky-sidebar").addClass("removefixed-header");

    } else {
        $(".sticky-sidebar").removeClass("removefixed-header");
    }
});


$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.sidebar-scroll').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();

/*------ PRODUCTS-DETAILS-SIDEBAR-JS-END ***/

/*------ FOOTER-ACTIVE-CLASS-ADD-JS-START ***/
$(document).ready(function() {
    $('.mobile-footer .mobile-icon a').click(function() {
        $('.mobile-icon a').removeClass("active");
        $(this).addClass("active");
    });
});
/*------ FOOTER-ACTIVE-CLASS-ADD-JS-END ***/

/*------ LISTING-SLIDER-ACTIVE-ADD-JS-START -------*/
$(document).ready(function() {
    $('.listingslider .MS-content .item').click(function() {
        $('.MS-content .item').removeClass("active");
        $(this).addClass("active");
    });
});
/*------ LISTING-SLIDER-ACTIVE-ADD-JS-END -------*/

/*------ CART-MOBILE-MODAL-JS-START ------*/

$("body").on("click", ".Mobile-address-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-address-Modalopn').modal('show');
});


$("body").on("click", ".Mobile-date-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-date-Modalopn').modal('show');
});

$("body").on("click", " .mobile-directbankbtn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-direct-Modalopn').modal('show');
});

$("body").on("click", " .Mobordernow-btn", function(e) {
    $('#Mobile-direct-Modalopn').modal('hide');
    $('#Mobile-processing-Modalopn').modal('show');
});

$("body").on("click", " .Mobileapply-coupon", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-couponapply-Modalopn').modal('show');
});

$("body").on("click", " .Mobdone-btn", function(e) {
    $('#checkout-bottom_modal').modal('hide');
    $('#Mobile-successfull-Modalopn').modal('show');
});
/*------ CART-MOBILE-MODAL-JS-END ------*/

/*------ ORDERS-MOBILE-MODAL-JS-START ------*/

$("body").on("click", ".Mobunavailable-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#takeaction-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewdetail-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#Viewdetail-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewtracking-btn", function(e) {
    $('#order-sum_modal').modal('hide');
    $('#viewtracking-Modalopn').modal('show');
});




/*------ ORDERS-MOBILE-MODAL-JS-END ------*/
/*------ PALLY-DETAILS-MOBILE-VIEW-MODAL-JS-START ------*/
$("body").on("click", ".Mobcartsussefullbtn", function(e) {
    $('#Mobselect-bottom').modal('hide');
    $('#Mobcartsuccessfull-Modalopn').modal('show');
});

$("body").on("click", ".Mobcartsussefullbtn", function(e) {
    $('#Mobselect-bottom').modal('hide');
    $('#Mobcartsuccessfull-Modalopn').modal('show');
});

$("body").on("click", ".Mobexistpally-btn", function(e) {
    $('#Mobcartsuccessfull-Modalopn').modal('hide');
    $('#Mobexistpally-Modalopn').modal('show');
});

$("body").on("click", ".Mobviewexistpally-btn", function(e) {
    $('#Mobexistpally-Modalopn').modal('hide');
    $('#Mobviewexistpally-Modalopn').modal('show');
});

/*------ PALLY-DETAILS-MOBILE-VIEW-MODAL-JS-END ------*/



/*------ MORE-ICON-CLICK-MODAL-JS-START -------*/
 function myFunction() {
     var x = document.getElementById("moreModal-wrapper");
   if (x.style.display === "block") {
         x.style.display = "none";
    } else {
       x.style.display = "block";
     }
 }
/*------ MORE-ICON-CLICK-MODAL-JS-END -------*/