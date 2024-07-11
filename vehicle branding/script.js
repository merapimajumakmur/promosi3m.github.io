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

// Function to load company-specific information
function loadCompanyInfo() {
  var selectedCompany = document.getElementById("company").value;
  var companyGallery = document.getElementById("companyGallery");

  // Clear previous content
  companyGallery.innerHTML = "";

  // Dynamically populate cards based on the selected company
  switch (selectedCompany) {
    case "mobil":
      // Add all cards
      companyGallery.innerHTML = `
      <!-- Card 1 -->
      <div class="card" onclick="openModal('myModal1')">
        <img src="/img_event/HILUX NES MAX 3.png" alt="HILUX NESLITE">
        <p>MOBIL HILUX NESLITE MAX</p>
      </div>
      <!-- Card 2 -->
      <div class="card" onclick="openModal('myModal2')">
        <img src="/img_event/HILUX NES REG.png" alt="HILUX NESLITE">
        <p>MOBIL HILUX NESLITE REGULER</p>
      </div>
      <!-- Card 3 -->
      <div class="card" onclick="openModal('myModal3')">
        <img src="/img_event/HILUX NES BLUE L 1.png" alt="HILUX NESLITE">
        <p>MOBIL HILUX NESLITE BLUE LABEL</p>
      </div>
      <!-- Card 4 -->
      <div class="card" onclick="openModal('myModal4')">
      <img src="/img_event/HILUX MGM MAX.png" alt="HILUX BMW MAGNUM">
        <p>MOBIL HILUX MAGNUM MAX</p>
      </div>
      <!-- Card 5 -->
      <div class="card" onclick="openModal('myModal5')">
      <img src="/img_event/HILUX FIX MAX.png" alt="HILUX FIX MAX">
        <p>MOBIL HILUX FIX MAX</p>
      </div>
      <!-- Card 6 -->
      <div class="card" onclick="openModal('myModal6')">
      <img src="/img_event/GRAN MAX NES BLUE L 1.png" alt="GRAN MAX NESLITE">
        <p>MOBIL GRAN MAX NESLITE BLUE LABEL</p>
      </div>
      <!-- Card 7 -->
      <div class="card" onclick="openModal('myModal7')">
      <img src="/img_event/GRAN MAX MGM MAX 1.png" alt="GRAN MAX BMW MAGNUM">
        <p>MOBIL GRAN MAX MAGNUM MAX</p>
      </div>
      <!-- Card 8 -->
      <div class="card" onclick="openModal('myModal8')">
      <img src="/img_event/GRAN MAX FIX MAX 1.png" alt="GRAN MAX FIX MAX">
        <p>MOBIL GRAN MAX FIX MAX</p>
      </div>

      `;
      break;

    case "motor":
      // Add cards for Baju SPG
      companyGallery.innerHTML = `
      <!-- Card 9 -->
      <div class="card" onclick="openModal('myModal9')">
        <img src="/img_event/VARIO NESLITE.png" alt="VARIO NESLITE">
        <p>MOTOR VARIO NESLITE</p>
      </div>
      `;
      break;

    // Add cases for other categories if needed

    default:
      break;
  }
}

// Pemanggilan loadCompanyInfo() pada awal halaman
window.onload = function () {
  loadCompanyInfo();
};

document.onreadystatechange = function () {
  var loader = document.getElementById("loader");
  if (document.readyState !== "complete") {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};
