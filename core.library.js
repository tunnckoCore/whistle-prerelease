$(window).on('load', function() {
    getOstavkaCode = $('.ostavka-oresharski').find('[data-get-ostavka-code]');
    ostavkaOresharski = $('.ostavka-oresharski').find('[data-ostavka-oresharski]');

    $(getOstavkaCode).on('click',
            function() {
                $(ostavkaOresharski).hide();
            }
    );
    $('#ostavka').on('hidden.bs.modal', function() {
        $(ostavkaOresharski).show();
    });



    $('.mark-code-html').on('click', function() {
        $('.mark-html').tooltip('show').select();
        //alert('Click "OK" then CTRL + C');
    });
    $('.mark-code-css').on('click', function() {
        $('.mark-css').tooltip('show').select();
        //alert('Click "OK" then CTRL + C');
    });



    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(getOstavkaCode).hide();
        } else {
            $(getOstavkaCode).show();
        }
    });
    $('.href-charlike').hover(
            function() {
                $(this).on('click', function() {
                    window.open($(this).attr('data-href-charlike'), '_self');
                });
                $('.href-charlike').attr('title', $(this).attr('data-title-charlike')).css('color', '#fefefe').css('cursor', 'pointer');
            },
            function() {
                $('.href-charlike').css('color', '#bbb');
            }

    );


//    $('.charlike_domain_check').on('click', function() {
//        alert('dasddddddddddddasd');
//    });


});

//////----MENU---////////
jQuery(document).ready(function($) {
    $('.navbar .dropdown').hover(function() {
        $(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        var na = $(this)
        na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function() {
            na.removeClass('extra-nav-class')
        })
    });

    $('.dropdown-submenu').hover(function() {
        $(this).addClass('extra-nav-class').find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        var na = $(this)
        na.find('.dropdown-menu').first().stop(true, true).delay(100).slideUp('fast', function() {
            na.removeClass('extra-nav-class')
        })
    });

});


//////----Placeholder for IE---////////
$(function() {
    // Invoke the plugin
    $('input, textarea').placeholder();
});

/* Widget close */
$('.wclose').click(function(e) {
    e.preventDefault();
    var $wbox = $(this).parent().parent().parent();
    $wbox.hide(100);
});

/* Widget minimize */
$('.wminimize').click(function(e) {
    e.preventDefault();
    var $wcontent = $(this).parent().parent().next('.widget-content');
    if ($wcontent.is(':visible'))
    {
        $(this).children('i').removeClass('fa fa-chevron-up');
        $(this).children('i').addClass('fa fa-chevron-down');
    }
    else
    {
        $(this).children('i').removeClass('fa fa-chevron-down');
        $(this).children('i').addClass('fa fa-chevron-up');
    }
    $wcontent.toggle(500);
});
