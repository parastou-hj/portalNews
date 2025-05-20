  $(function () {
    $("#news-carousel").owlCarousel({
      rtl: true,
      items: 1,
      // nav: true,
      dots: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
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
  $(".nav-right").click(function () {
    $("#banner-owl").trigger("prev.owl.carousel");
  });
  
  $(".nav-left").click(function () {
    $("#banner-owl").trigger("next.owl.carousel");
  });

  // Gallery Modal Functionality
$(document).ready(function() {
    // Gallery image click handler
    $('.gallery-item img').on('click', function() {
        const imageSrc = $(this).attr('src');
        $('#modalImage').attr('src', imageSrc);
    });
    
    // Tab switching with fade effect
    $('.nav-link[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        const target = $(e.target.getAttribute('data-bs-target'));
        target.hide().fadeIn(300);
    });
    
    // Smooth hover effects for news cards
    $('.news-card').hover(
        function() {
            $(this).find('.news-card-img img').addClass('hover-scale');
        },
        function() {
            $(this).find('.news-card-img img').removeClass('hover-scale');
        }
    );
});

// راه‌اندازی کاروسل گالری با نمایش آیتم‌های نصفه در لبه‌ها
$(document).ready(function() {
    $("#gallery-carousel").owlCarousel({
        rtl: true,
        center: false,
        items: 3.5,  
        margin: 10,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        stagePadding: 20,  
        responsive: {
            0: {
                items: 1.2,  
                stagePadding: 30
            },
            576: {
                items: 1.8, 
                stagePadding: 40
            },
            768: {
                items: 2.2, 
                stagePadding: 50
            },
            992: {
                items: 2.8, 
                stagePadding: 60
            },
            1200: {
                items: 3,  
                stagePadding: 50
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

