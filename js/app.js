     $(window).scroll(function() {
        if ($("#menu").offset().top > 100vh) {
            $("#menu").addClass("menu2");
        } else {
            $("#menu").removeClass("navbar");
        }
      });