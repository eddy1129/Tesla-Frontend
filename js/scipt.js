new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  onLeave: function (origin, destination, direction, trigger) {
    loading = new TimelineMax();
    loading
      .fromTo(
        "h2",
        0.6,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          y: 0,
        },
        "+=0.3"
      )
      .fromTo(
        ".upper p",
        0.6,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        }
      )
      .fromTo(
        ".lower",
        0.6,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
        },
        "-=0.6"
      );
  },
});

document.addEventListener("DOMContentLoaded", function () {
  //click function
  var arrows = document.getElementsByClassName("arrow");
  for (i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function (e) {
      e.preventDefault();
      fullpage_api.moveSectionDown();
    });
  }

  loading = new TimelineMax();
  loading
    .fromTo(
      "h2",
      0.6,
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    )
    .fromTo(
      ".upper p",
      0.6,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      ".lower .cusOrder",
      0.6,
      {
        autoAlpha: 0,
        x: -50,
      },
      {
        autoAlpha: 1,
        x: 0,
      },
      "-=0.6"
    )
    .fromTo(
      ".lower .existInv",
      0.6,
      {
        autoAlpha: 0,
        x: 50,
      },
      {
        autoAlpha: 1,
        x: 0,
      },
      "-=0.6"
    );
});
