document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Menghapus kelas 'active' dari semua tautan
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // Menambahkan kelas 'active' ke tautan yang diklik
      this.classList.add("active");
    });
  });
});
