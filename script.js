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

