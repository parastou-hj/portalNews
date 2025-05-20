  $(function () {
    $("#news-carousel").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      // autoplay: true,
      // autoplayTimeout: 6000,
      autoplayHoverPause: true,
      // navText: [
      //     '<i class="fa-solid fa-chevron-right"></i>',
      //     '<i class="fa-solid fa-chevron-left"></i>'
      // ],
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  });
  
    $("#news-next").click(function() {
        $("#news-carousel").trigger("next.owl.carousel", [300]);  
    });
    
    $("#news-prev").click(function() {
        $("#news-carousel").trigger("prev.owl.carousel", [300]);
    });


$(document).ready(function() {
     $('#gallery-carousel').owlCarousel({
                rtl: true,
                loop: true,
                // margin: 20,
                nav: false,
                dots: false,
                center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                stagePadding: 100,
                responsive: {
                    0: {
                        items: 1.2,
                        stagePadding: 30
                    },
                    576: {
                        items: 1.5,
                        stagePadding: 50
                    },
                    768: {
                        items: 1.8,
                        stagePadding: 70
                    },
                    992: {
                        items: 2.7,
                        stagePadding: 70
                    },
                    1200: {
                        items: 3,
                        stagePadding: 100
                    },
                    1400: {
                        items: 3,
                        stagePadding: 120
                    }
                }
            });
            
    
    // ناوبری سفارشی
    $(".gallery-nav-prev").click(function() {
        $("#gallery-carousel").trigger("next.owl.carousel", [300]);  // سرعت انیمیشن را کمی افزایش داده‌ایم
    });
    
    $(".gallery-nav-next").click(function() {
        $("#gallery-carousel").trigger("prev.owl.carousel", [300]);
    });
});

 function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


$(document).ready(function() {
    $('.main-nav ul li:first-child').addClass('active');
    
    $('.main-nav ul li').on('click', function(e) {
        $('.main-nav ul li').removeClass('active');
        
        $(this).addClass('active');
    });
});

// Add this JavaScript code to your script.js file

// Mobile Navigation Functionality
$(document).ready(function() {
    const mobileMenuToggle = $('.mobile-menu-toggle');
    const mobileNav = $('.mobile-nav');
    const mobileNavOverlay = $('.mobile-nav-overlay');
    
    mobileMenuToggle.on('click', function() {
        $(this).toggleClass('active');
        mobileNav.toggleClass('active');
        mobileNavOverlay.toggleClass('active');
        
        if (mobileNav.hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', '');
        }
    });
    
    mobileNavOverlay.on('click', function() {
        mobileMenuToggle.removeClass('active');
        mobileNav.removeClass('active');
        mobileNavOverlay.removeClass('active');
        $('body').css('overflow', '');
    });
    // $('.mobile-menu-close').on('click', function(){
    //     mobileMenuToggle.removeClass('active');
    //     mobileNav.removeClass('active');
    //      mobileNavOverlay.removeClass('active');
    //     $('body').css('overflow', '');
    // })
    
    // Handle active state for mobile navigation items
    $('.mobile-nav ul li').on('click', function() {
        $('.mobile-nav ul li').removeClass('active');
        $(this).addClass('active');
        
        // Close menu after clicking a menu item
        mobileMenuToggle.removeClass('active');
        mobileNav.removeClass('active');
        mobileNavOverlay.removeClass('active');
        $('body').css('overflow', '');
    });
});

// اضافه کردن کد جاوااسکریپت برای مدیریت بهتر تب‌ها در حالت موبایل

$(document).ready(function() {
    // تنظیم ارتفاع منوی تب در حالت افقی برای صفحات متوسط
    function adjustTabHeight() {
        if ($(window).width() <= 992 && $(window).width() > 576) {
            // پیدا کردن ارتفاع محتوای فعال
            let activeTabHeight = $('.tab-pane.active').outerHeight();
            // تنظیم حداقل ارتفاع منوی تب برابر با ارتفاع محتوا
            $('.news-tab-nav').css('min-height', activeTabHeight + 'px');
        } else {
            // بازگرداندن به حالت عادی در سایر سایزها
            $('.news-tab-nav').css('min-height', '');
        }
    }
    
    // اجرای تابع تنظیم ارتفاع در لود اولیه
    adjustTabHeight();
    
    // اجرای مجدد در تغییر سایز صفحه
    $(window).resize(function() {
        adjustTabHeight();
    });
    
    // اجرای مجدد هنگام تغییر تب
    $('.nav-link').on('shown.bs.tab', function() {
        adjustTabHeight();
    });
    
    // اسکرول خودکار به تب فعال در حالت موبایل
    $('.nav-link').on('shown.bs.tab', function() {
        if ($(window).width() <= 576) {
            let $activeTab = $(this).parent();
            let $tabsContainer = $('.news-tab-nav');
            
            // محاسبه موقعیت اسکرول برای مرکز قرار دادن تب فعال
            let tabPosition = $activeTab.position().left;
            let tabWidth = $activeTab.width();
            let containerWidth = $tabsContainer.width();
            
            let scrollTo = tabPosition - (containerWidth / 2) + (tabWidth / 2);
            
            // اسکرول به موقعیت محاسبه شده با انیمیشن
            $tabsContainer.animate({
                scrollLeft: scrollTo
            }, 300);
        }
    });
});

