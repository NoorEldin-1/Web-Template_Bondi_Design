const barsIcon = document.querySelector(".nav > i");
barsIcon.addEventListener("click", () => {
  document.querySelector(".links").classList.toggle("open");
});

const shuffleSpans = Array.from(document.querySelectorAll(".shuffle span"));
const photosCard = Array.from(document.querySelectorAll(".photos .card"));

shuffleSpans.forEach((span) => {
  span.addEventListener("click", () => {
    shuffleSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");

    if (span.dataset.info === "all") {
      photosCard.forEach((card) => {
        card.style.display = "block";
      });
    } else {
      photosCard.forEach((card) => {
        card.style.display = "none";
        if (card.dataset.info === span.dataset.info) {
          card.style.display = "block";
        }
      });
    }
  });
});
