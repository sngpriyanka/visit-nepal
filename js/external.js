$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $("nav").addClass("nav-fixed");
  } else {
    $("nav").removeClass("nav-fixed");
  }
});

//typingtext
/*line 10 to line 75 js code is for fixing the nav bar, like it changes nav bar when you scroll down the contents */
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

$(document).ready(function () {
  $(".toggle-btn").click(function () {
    $(".nav").toggleClass("nav-active");
    $(".toggle-btn i").toggleClass("nav-active");
  });
});



//js code of filter gallery starts here
/*this js code helps to get only the images of temple if we click on temple button, greenaries if we click on the Greenary button and so on.*/

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

//top to scroll button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#arrow i").fadeIn();
    } else {
      $("#arrow i").fadeOut();
    }
  });
  $("#arrow i").on("click", function () {
    $("html,body").animate({
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});

//button-toggle
$(document).ready(function () {
  $("#button-toggle").click(function () {
    $(".nav").toggleClass("nav-active");
    $("#button-toggle i").toggleClass("nav-active"); //this line is for closer button when the nav bar is opened
  });
});


