//   carousel
var carousel = new Swiper(".carousel", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
  });
// client section 
  var copy = document.querySelector(".client-wrapper").cloneNode(true);
      document.querySelector(".client-container").appendChild(copy);

      var copy = document.querySelector(".new-client-wrapper").cloneNode(true);
      document.querySelector(".new-client").appendChild(copy);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    