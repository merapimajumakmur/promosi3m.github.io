// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Function untuk menambahkan animasi fadeOut pada modal saat ditutup
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.animation = "fadeOut 0.3s ease";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = "";
  }, 300);
}

// Function untuk membuka modal dengan animasi fadeIn
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.style.animation = "fadeIn 0.3s ease";
}

// Function untuk menutup modal ketika mengklik di luar modal
window.onclick = function (event) {
  var modals = document.querySelectorAll(".modal");
  for (var i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      closeModal(modals[i].id);
    }
  }
};

// Function untuk menutup modal ketika mengklik tombol close
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.animation = "fadeOut 0.3s ease";
  setTimeout(() => {
    modal.style.display = "none";
    modal.style.animation = "";
  }, 300);
}

// Function untuk membuka modal dengan animasi fadeIn
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
  modal.style.animation = "fadeIn 0.3s ease";
}

// Function to filter cards based on category
function filterCategory(category) {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    var categoryText = card.querySelector("p").innerText.toLowerCase();
    if (categoryText.includes(category.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Pemanggilan loadCompanyInfo() pada awal halaman
window.onload = function () {
  // Set nilai dropdown select ke PT Merapi Agung Lestari
  document.getElementById("company").value = "company1";
  // Panggil fungsi loadCompanyInfo() untuk memuat informasi perusahaan
  loadCompanyInfo("spanduk");
  // Panggil fungsi filterCategory() dengan parameter 'spanduk' untuk menampilkan kategori spanduk
  filterCategory("spanduk");
};

document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
