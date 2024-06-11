var mainListDiv = document.getElementById('mainListDiv');
mediaButton = document.getElementById('mediaButton');

mediaButton.onClick = function () {
  mainListDiv.classList.toggle('show-list');
  mediaButton.classList.toggle('active');
};

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='far fa-chevron-left'></i>",
    "<i class='far fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
