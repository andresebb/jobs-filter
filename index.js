const categories = document.querySelectorAll(".category");
const jobsContainer = document.querySelectorAll(".jobs__container");
const botonsito = document.querySelector(".botonsito");
console.log(categories);
console.log(botonsito);

categories.forEach((categoria) => {
  categoria.addEventListener("click", () => {
    if (categoria.classList.contains("rojo")) {
      categoria.classList.remove("rojo");
    } else {
      categoria.classList.add("rojo");
    }
  });
});

categories.forEach((category) => {
  category.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    console.log(filter);

    jobsContainer.forEach((job) => {
      if (filter === "all") {
        job.style.display = "block";
      } else {
        if (job.classList.contains(filter)) {
          job.style.display = "block";
        } else {
          job.style.display = "none";
        }
      }
    });
  });
});
