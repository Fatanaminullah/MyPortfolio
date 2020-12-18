/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function () {
    $("h1.responsive-headline").fitText(1, {
      minFontSize: "20px",
      maxFontSize: "45px",
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        800,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  var sections = $("section");
  var navigation_links = $("#nav-wrap a");

  sections.waypoint({
    handler: function (event, direction) {
      var active_section;

      active_section = $(this);
      if (direction === "up") active_section = active_section.prev();

      var active_link = $(
        '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
      );

      navigation_links.parent().removeClass("current");
      active_link.parent().addClass("current");
    },
    offset: "35%",
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $("header").css({ height: $(window).height() });
  $(window).on("resize", function () {
    $("header").css({ height: $(window).height() });
    $("body").css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on("scroll", function () {
    var h = $("header").height();
    var y = $(window).scrollTop();
    var nav = $("#nav-wrap");

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut("fast");
    } else {
      if (y < h * 0.2) {
        nav.removeClass("opaque").fadeIn("fast");
      } else {
        nav.addClass("opaque").fadeIn("fast");
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $(".item-wrap a").magnificPopup({
    type: "inline",
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: "mfp-fade",
  });

  $(document).on("click", ".popup-modal-dismiss", function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  /*----------------------------------------------------*/
  /*	Flexslider
/*----------------------------------------------------*/
  $(".flexslider").flexslider({
    namespace: "flex-",
    controlsContainer: ".flex-container",
    animation: "slide",
    controlNav: true,
    directionNav: false,
    smoothHeight: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    randomize: false,
  });

  /*----------------------------------------------------*/
  /*	contact form
------------------------------------------------------*/

  // $("form#contactForm button.submit").click(function () {
  //   $("#image-loader").fadeIn();

  //   var from_name = $("#contactForm #from_name").val();
  //   var message = $("#contactForm #message").val();
  //   var reply_to = $("#contactForm #reply_to").val();
  //   var subject = $("#contactForm #subject").val();
  //   console.log("valaue", !from_name || !message || !reply_to || !subject);
  //   if (!from_name || !message || !reply_to || !subject) {
  //     $("#image-loader").fadeOut();
  //     // $("#message-warning").html(msg);
  //     $("#message-warning").fadeIn();
  //   } else {
  //     var data = {
  //       service_id: "service_gmail",
  //       template_id: "template_default",
  //       user_id: "user_eFaRvhEZUjHIcx9rr2OIJ",
  //       template_params: {
  //         from_name,
  //         message,
  //         reply_to,
  //         subject,
  //         to_name: "Fatan Aminullah",
  //       },
  //     };
  //     $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
  //       type: "POST",
  //       data: JSON.stringify(data),
  //       contentType: "application/json",
  //     })
  //       .done(function () {
  //         $("#image-loader").fadeOut();
  //         $("#message-warning").hide();
  //         $("#contactForm").fadeOut();
  //         $("#message-success").fadeIn();
  //       })
  //       .fail(function (error) {
  //         $("#image-loader").fadeOut();
  //         $("#message-warning").html(msg);
  //         $("#message-warning").fadeIn();
  //       });
  //     return false;
  //   }
  // });
});
