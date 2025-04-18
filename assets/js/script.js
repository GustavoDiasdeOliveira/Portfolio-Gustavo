new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4, // Para telas maiores
    },
  },
});


// ---------------------- Delay Encarte ---------------------- //
const cards = document.querySelectorAll(".card-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Definir o delay progressivo e a duração crescente
        const delay = index * 0.3; // Atraso progressivo
        const duration = 0.8 + index * 0.2; // Duração progressiva

        entry.target.style.setProperty("--delay", `${delay}s`);
        entry.target.style.setProperty("--duration", `${duration}s`);

        entry.target.classList.add("appear");
        observer.unobserve(entry.target); // Só anima uma vez
      }
    });
  },
  {
    threshold: 0.1, // Começa a animar quando 10% do card aparece
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
