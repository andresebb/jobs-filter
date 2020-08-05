const categories = document.querySelectorAll(".category");
const jobsContainer = document.querySelectorAll(".jobs__container");
const text = document.getElementById("caja");

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
    //Aca se obtiene el valor del data-filter
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

text.addEventListener("keyup", () => {
  const valor = text.value.toLowerCase().trim();
  console.log(valor);

  jobsContainer.forEach((item) => {
    console.log(item.textContent);
    if (item.textContent.includes(valor)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
