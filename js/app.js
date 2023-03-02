// Cabecera fija

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

// Enlaces de la barra de navegación

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})


// Helado

const helado = document.querySelector(".helado");

helado.addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("show");
})


// Año para el pie del documento en JS
var anio = document.getElementById("anio");
anio.innerHTML = new Date().getFullYear();



