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
    case "spg":
      // Add all cards
      companyGallery.innerHTML = `
      <!-- Card 1 -->
      <div class="card" onclick="openModal('myModal1')">
        <img src="/img_event/BJ SPG NES 8.png" alt="SERAGAM SPG NB">
        <p>SERAGAM SPG NESLITE BLACK</p>
      </div>
      <!-- Card 2 -->
      <div class="card" onclick="openModal('myModal2')">
        <img src="/img_event/BJ SPG NES 5.png" alt="SERAGAM SPG NM">
        <p>SERAGAM SPG NESLITE GREEN</p>
      </div>
      <!-- Card 3 -->
      <div class="card" onclick="openModal('myModal3')">
        <img src="/img_event/BJ SPG NES 2.png" alt="SERAGAM NESR">
        <p>SERAGAM SPG NESLITE RED</p>
      </div>
      <!-- Card 6 -->
      <div class="card" onclick="openModal('myModal6')">
      <img src="/img_event/BJ SPG MGMX 2.png" alt="SERAGAM SPG MX">
        <p>SERAGAM SPG MAGNUM MAX</p>
      </div>
      `;
      break;

    case "tas":
      // Add cards for Baju SPG
      companyGallery.innerHTML = `
      <!-- Card 4 -->
      <div class="card" onclick="openModal('myModal4')">
        <img src="/img_event/TAS SPG NES 8.png" alt="TAS SPG NES">
        <p>TAS SPG NESLITE</p>
      </div>
      `;
      break;

    case "pylon":
      // Add cards for Pylon Sign
      companyGallery.innerHTML = `
      <!-- Card 9 -->
      <div class="card" onclick="openModal('myModal9')">
        <img src="/img_event/PYLON SIGN NBE 1.png" alt="PYLON SIGN NBE">
        <p>PYLON SIGN NESLITE BLACK EDITION</p>
      </div>
      <!-- Card 10 -->
      <div class="card" onclick="openModal('myModal10')">
        <img src="/img_event/PYLON SIGN NES REG 1.png" alt="PYLON SIGN NES REG">
        <p>PYLON SIGN NESLITE REGULER</p>
      </div>
      <!-- Card 13 -->
      <div class="card" onclick="openModal('myModal13')">
        <img src="/img_event/PYLON SIGN NM 1.png" alt="PYLON SIGN NM">
        <p>PYLON SIGN NESLITE MENTHOL</p>
      </div>
      `;
      break;

    case "sc":
      // Add cards for Pylon Sign
      companyGallery.innerHTML = `
      <!-- Card 5 -->
      <div class="card" onclick="openModal('myModal5')">
        <img src="/img_event/SC NES 2.png" alt="SHOWCASE NES">
        <p>SHOWCASE NESLITE</p>
      </div>
      <!-- Card 7 -->
      <div class="card" onclick="openModal('myModal7')">
      <img src="/img_event/SC MGK 2.png" alt="SHOWCASE MGK">
      <p>SHOWCASE MAGNUM KRETEK</p>
      </div>
        `;
      break;

    case "bnr":
      // Add cards for Pylon Sign
      companyGallery.innerHTML = `
      <!-- Card 12 -->
      <div class="card" onclick="openModal('myModal12')">
        <img src="/img_event/BANNER NES MENTHOL.png" alt="BANNER NES">
        <p>BANNER NESLITE</p>
      </div>
      `;
      break;

    case "evtdsk":
      // Add cards for Event Desk Nes
      companyGallery.innerHTML = `
      <!-- Card 8 -->
      <div class="card" onclick="openModal('myModal8')">
        <img src="/img_event/EVENT DESK NES REG 2.png" alt="EVENT DESK NR">
        <p>EVENT DESK NESLITE</p>
      </div>
        `;
      break;

    case "stc":
      // Add cards for Stasiun Carger
      companyGallery.innerHTML = `
      <!-- Card 15 -->
      <div class="card" onclick="openModal('myModal15')">
        <img src="/img_event/STASIUN CARGER NESLITE.png" alt="STASIUN CARGER NES">
        <p>STASIUN CARGER NESLITE RED</p>
      </div>
      <!-- Card 11 -->
      <div class="card" onclick="openModal('myModal11')">
        <img src="/img_event/STASIUN CARGER NESLITE 3.png" alt="STASIUN CARGER NES REG">
        <p>STASIUN CARGER NESLITE </p>
      </div>
          `;
      break;

    case "asn":
      // Add cards for Wadah Kotak Asongan
      companyGallery.innerHTML = `
        <!-- Card 14 -->
        <div class="card" onclick="openModal('myModal14')">
          <img src="/img_event/ASONGAN 1.png" alt="WADAH ASONGAN">
          <p>WADAH KOTAK ASONGAN</p>
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
