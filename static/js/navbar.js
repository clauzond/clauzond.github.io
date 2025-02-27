"use strict";

const updateNavBar = () => {
  if ($(document).scrollTop() > 40) {
    $("#top-navbar").removeClass("initial-navbar");
    $("#top-navbar").addClass("final-navbar shadow");

    $("#navbar-toggler").removeClass("navbar-dark");
    $("#navbar-toggler").addClass("navbar-light");

    // color theme selector a.k.a. dark mode
    $("#navbar-theme-icon-svg").removeClass("navbar-icon-svg-dark");

    // get the main logo from hidden img tag
    let mainLogo = document.getElementById("main-logo");
    let mainDarkLogo = document.getElementById("main-dark-logo");
    let isDarkTheme = false;
    if (typeof DarkReader !== "undefined") {
      isDarkTheme = DarkReader.isEnabled();
    }
    if (mainDarkLogo !== null && isDarkTheme) {
      let logoURL = mainDarkLogo.getAttribute("src");
      $("#logo").attr("src", logoURL);
    } else if (mainLogo !== null) {
      let logoURL = mainLogo.getAttribute("src");
      $("#logo").attr("src", logoURL);
    }
  } else {
    $("#top-navbar").removeClass("final-navbar shadow");
    $("#top-navbar").addClass("initial-navbar");

    $("#navbar-toggler").removeClass("navbar-light");
    $("#navbar-toggler").addClass("navbar-dark");

    // color theme selector a.k.a. dark mode
    $("#navbar-theme-icon-svg").addClass("navbar-icon-svg-dark");

    // get the inverted logo from hidden img tag
    let invertedLogo = document.getElementById("inverted-logo");
    if (invertedLogo !== null) {
      let logoURL = invertedLogo.getAttribute("src");
      $("#logo").attr("src", logoURL);
    }
  }
};

(function ($) {
  jQuery(document).ready(function () {
    // change navbar style on scroll
    // ==================================================
    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    // $.onscroll = function() {scrollFunction()};
    $(document).scroll(function () {
      updateNavBar();
    });

    // Creates a click handler to collapse the navigation when
    // anchors in the mobile nav pop up are clicked
    var navMain = $(".navbar-collapse");
    if (navMain) {
      navMain.on("click", "a", null, function (e) {
        $(".navbar-collapse").collapse("hide");
      });
    }

    updateNavBar();
  });
})(jQuery);
