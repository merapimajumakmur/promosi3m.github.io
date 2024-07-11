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
  loadCompanyInfo();
  // Panggil fungsi filterCategory() dengan parameter 'spanduk' untuk menampilkan kategori spanduk
  filterCategory("");
};

// Function to load company-specific information
function loadCompanyInfo() {
  var selectedCompany = document.getElementById("company").value;
  var companyGallery = document.getElementById("companyGallery");
  var categoryList = document.getElementById("categoryList");

  // Clear previous content
  companyGallery.innerHTML = "";
  categoryList.innerHTML = "";

  // Dynamically populate cards based on the selected company
  switch (selectedCompany) {
    case "company1":
      // Add cards and categories for PT Merapi Agung Lestari
      categoryList.innerHTML = `
      <li><a onclick="filterCategory('asbak')" style="cursor: pointer">ASBAK</a></li>
      <li><a onclick="filterCategory('dompet')" style="cursor: pointer">DOMPET</a></li>
      <li><a onclick="filterCategory('gantungan')" style="cursor: pointer">GANTUNGAN KASIR</a></li>
      <li><a onclick="filterCategory('gelas')" style="cursor: pointer">GELAS</a></li>
      <li><a onclick="filterCategory('goodie')" style="cursor: pointer">GOODIE BAG</a></li>
      <li><a onclick="filterCategory('hoodie')" style="cursor: pointer">HOODIE JUMPER</a></li>
      <li><a onclick="filterCategory('jaket')" style="cursor: pointer">JAKET</a></li>
      <li><a onclick="filterCategory('jam')" style="cursor: pointer">JAM DINDING</a></li>
      <li><a onclick="filterCategory('kaos')" style="cursor: pointer">KAOS</a></li>
      <li><a onclick="filterCategory('kaleng')" style="cursor: pointer">KALENG ROKOK</a></li>
      <li><a onclick="filterCategory('koper')" style="cursor: pointer">KOPER</a></li>
      <li><a onclick="filterCategory('korek')" style="cursor: pointer">KOREK</a></li>
      <li><a onclick="filterCategory('krodong')" style="cursor: pointer">KRODONG BURUNG</a></li>
      <li><a onclick="filterCategory('meja')" style="cursor: pointer">NOMOR MEJA</a></li>
      <li><a onclick="filterCategory('parasol')" style="cursor: pointer">PARASOL</a></li>
      <li><a onclick="filterCategory('payung')" style="cursor: pointer">PAYUNG</a></li>
      <li><a onclick="filterCategory('sabuk')" style="cursor: pointer">SABUK</a></li>
      <li><a onclick="filterCategory('seragam')" style="cursor: pointer">SERAGAM</a></li>
      <li><a onclick="filterCategory('tas')" style="cursor: pointer">TAS</a></li>
      <li><a onclick="filterCategory('tissue')" style="cursor: pointer">TEMPAT TISSUE</a></li>
      <li><a onclick="filterCategory('topi')" style="cursor: pointer">TOPI</a></li>
     
        <!-- Add more categories if needed -->
      `;
      // Add cards for PT Merapi Agung Lestari
      companyGallery.innerHTML = `
        <!-- Cards for PT Merapi Agung Lestari -->
        <!-- Card 29 -->
        <div class="card" onclick="openModal('myModal64')">
          <img src="/img_mc/KO NES MAX 1.png" alt="KAOS OBLONG NESLITE">
          <p>KAOS OBLONG NESLITE MAX 12</p>
        </div>
        <!-- Card 28 -->
        <div class="card" onclick="openModal('myModal62')">
          <img src="/img_mc/GOODIE BAG NESLITE 1.png" alt="GOODIE BAG NESLITE">
          <p>GOODIE BAG NESLITE</p>
        </div>
        <!-- Card 1 -->
        <div class="card" onclick="openModal('myModal1')">
          <img src="/img_mc/ASBAK NES 3.JPG" alt="ASBAK NESLITE">
          <p>ASBAK NESLITE</p>
        </div>
        <!-- Card 2 -->
        <div class="card" onclick="openModal('myModal2')">
          <img src="/img_mc/DOMPET NES 8.png" alt="DOMPET NESLITE">
          <p>DOMPET NESLITE</p>
        </div>
        <!-- Card 3 -->
        <div class="card" onclick="openModal('myModal3')">
          <img src="/img_mc/GELAS NES 1.JPG" alt="GELAS NESLITE">
          <p>GELAS NESLITE</p>
        </div>
        <!-- Card 4 -->
        <div class="card" onclick="openModal('myModal4')">
          <img src="/img_mc/HOODIE NES 2.png" alt="HOODIE NESLITE">
          <p>HOODIE NESLITE</p>
        </div>
        <!-- Card 5 -->
        <div class="card" onclick="openModal('myModal5')">
          <img src="/img_mc/PARASUT NES.png" alt="JAKET PARASUT NESLITE">
          <p>JAKET PARASUT NESLITE</p>
        </div>
        <!-- Card 17 -->
        <div class="card" onclick="openModal('myModal42')">
          <img src="/img_mc/JAKET BB NESLITE 1.png" alt="JAKET MERAH HITAM NESLITE">
          <p>JAKET BOLAK BALIK MERAH HITAM NESLITE</p>
        </div>
        <!-- Card 6 -->
        <div class="card" onclick="openModal('myModal6')">
          <img src="/img_mc/JD NES 1.png" alt="JAM DINDING NESLITE">
          <p>JAM DINDING NESLITE</p>
        </div>
        <!-- Card 7 -->
        <div class="card" onclick="openModal('myModal7')">
          <img src="/img_mc/LS NES 1.png" alt="KAOS OBLONG LENGAN PANJANG NESLITE">
          <p>KAOS OBLONG & KERAH LENGAN PANJANG NESLITE MAX</p>
        </div>
        <!-- Card 8 -->
        <div class="card" onclick="openModal('myModal8')">
          <img src="/img_mc/KO NES 3.png" alt="KAOS OBLONG NESLITE">
          <p>KAOS OBLONG NESLITE</p>
        </div>
        <!-- Card 9 -->
        <div class="card" onclick="openModal('myModal9')">
          <img src="/img_mc/POLO NES 1.png" alt="KAOS POLO NESLITE">
          <p>KAOS POLO NESLITE</p>
        </div>
        <!-- Card 20 -->
        <div class="card" onclick="openModal('myModal46')">
          <img src="/img_mc/SERAGAM NESLITE HITAM 1.png" alt="SERAGAM NESLITE">
          <p>SERAGAM NESLITE</p>
        </div>
        <!-- Card 21 -->
        <div class="card" onclick="openModal('myModal47')">
          <img src="/img_mc/KRODONG BURUNG NESLITE M 2.png" alt="KRODONG NESLITE">
          <p>KRODONG BURUNG NESLITE</p>
        </div>
        <!-- Card 10 -->
        <div class="card" onclick="openModal('myModal10')">
          <img src="/img_mc/KOPER NES 2.png" alt="KOPER NESLITE">
          <p>KOPER NESLITE</p>
        </div>
        <!-- Card 11 -->
        <div class="card" onclick="openModal('myModal11')">
          <img src="/img_mc/KOREK NES 5.png" alt="KOREK NESLITE">
          <p>KOREK NESLITE</p>
        </div>
        <!-- Card 12 -->
        <div class="card" onclick="openModal('myModal12')">
          <img src="/img_mc/MN NES 1.jpg" alt="NOMOR MEJA NESLITE">
          <p>NOMOR MEJA NESLITE</p>
        </div>
        <!-- Card 13 -->
        <div class="card" onclick="openModal('myModal13')">
          <img src="/img_mc/SABUK NES 2.png" alt="SABUK NESLITE">
          <p>SABUK NESLITE</p>
        </div>
        <!-- Card 14 -->
        <div class="card" onclick="openModal('myModal14')">
          <img src="/img_mc/TISUE NES 4.png" alt="TEMPAT TISSUE NESLITE">
          <p>TEMPAT TISSUE KOTAK NESLITE</p>
        </div>
        <!-- Card 15 -->
        <div class="card" onclick="openModal('myModal15')">
          <img src="/img_mc/TOPI NES 1.png" alt="TOPI NESLITE">
          <p>TOPI NESLITE</p>
        </div>
        <!-- Card 16 -->
        <div class="card" onclick="openModal('myModal41')">
          <img src="/img_mc/PAYUNG NES 4.png" alt="PAYUNG NESLITE">
          <p>PAYUNG NESLITE</p>
        </div>
        <!-- Card 18 -->
        <div class="card" onclick="openModal('myModal44')">
          <img src="/img_mc/TAS RANSEL NESLITE 1.png" alt="TAS RANSEL NESLITE">
          <p>TAS RANSEL NESLITE</p>
        </div>
        <!-- Card 19 -->
        <div class="card" onclick="openModal('myModal45')">
          <img src="/img_mc/SLING BAG NESLITE 1.png" alt="TAS SLEMPANG NESLITE">
          <p>TAS SLEMPANG NESLITE</p>
        </div>
        <!-- Card 22 -->
        <div class="card" onclick="openModal('myModal48')">
          <img src="/img_mc/KALENG NESREG.jpg" alt="KALENG ROKOK NES">
          <p>KALENG ROKOK NESLITE</p>
        </div>
        <!-- Card 23 -->
        <div class="card" onclick="openModal('myModal43')">
          <img src="/img_mc/KO 286 M 1.png" alt="KAOS OBLONG 286">
          <p>KAOS OBLONG MERAH KUNING 286 </p>
        </div>
        <!-- Card 24 -->
        <div class="card" onclick="openModal('myModal55')">
          <img src="/img_mc/GANTUNGAN KASIR NES.png" alt="GANTUNGAN KASIR NES">
          <p>GANTUNGAN KASIR NESLITE</p>
        </div>
        <!-- Card 25 -->
        <div class="card" onclick="openModal('myModal56')">
          <img src="/img_mc/PARASOL NESLITE.png" alt="PARASOL NES">
          <p>PARASOL NESLITE</p>
        </div>
        <!-- Card 26 -->
        <div class="card" onclick="openModal('myModal57')">
          <img src="/img_mc/PARASOL NES BLUE LABEL.png" alt="PARASOL NES">
          <p>PARASOL NESLITE BLUE LABEL</p>
        </div>
        <!-- Card 27 -->
        <div class="card" onclick="openModal('myModal58')">
          <img src="/img_mc/PARASOL NMAX.png" alt="PARASOL NES">
          <p>PARASOL NESLITE MAX</p>
        </div>
        <!-- Add more cards if needed -->
      `;
      break;

    case "company2":
      // Add cards and categories for PT Gandum
      categoryList.innerHTML = `
        <!-- Categories for PT Gandum -->
        <li><a onclick="filterCategory('asbak')" style="cursor: pointer">ASBAK</a></li>
      <li><a onclick="filterCategory('gelas')" style="cursor: pointer">GELAS</a></li>
      <li><a onclick="filterCategory('goodie')" style="cursor: pointer">GOODIE BAG</a></li>
      <li><a onclick="filterCategory('jam')" style="cursor: pointer">JAM DINDING</a></li>
      <li><a onclick="filterCategory('kaleng')" style="cursor: pointer">KALENG ROKOK</a></li>
      <li><a onclick="filterCategory('kaos')" style="cursor: pointer">KAOS</a></li>
      <li><a onclick="filterCategory('korek')" style="cursor: pointer">KOREK</a></li>
      <li><a onclick="filterCategory('masker')" style="cursor: pointer">MASKER</a></li>
      <li><a onclick="filterCategory('parasol')" style="cursor: pointer">PARASOL</a></li>
      <li><a onclick="filterCategory('payung')" style="cursor: pointer">PAYUNG</a></li>
      <li><a onclick="filterCategory('tas')" style="cursor: pointer">TAS</a></li>
      <li><a onclick="filterCategory('topi')" style="cursor: pointer">TOPI</a></li>
       
        <!-- Add more categories if needed -->
      `;
      // Add cards for PT Gandum
      companyGallery.innerHTML = `
        <!-- Cards for PT Gandum -->
        <!-- Card 28 -->
                <div class="card" onclick="openModal('myModal63')">
                  <img src="/img_mc/GOODIE BAG MAGNUM 1.png" alt="GOODIE BAG MAGNUM">
                  <p>GOODIE BAG MAGNUM MAX</p>
                </div>
                <!-- Card 1 -->
                <div class="card" onclick="openModal('myModal16')">
                  <img src="/img_mc/BT MGK 2.png" alt="KAOS JUMPER BINTANG MAS">
                  <p>KAOS JUMPER BINTANG MAS</p>
                </div>
                <!-- Card 2 -->
                <div class="card" onclick="openModal('myModal17')">
                  <img src="/img_mc/KO MGF 2.png" alt="KAOS OBLONG MAGNUM FILTER">
                  <p>KAOS OBLONG MAGNUM FILTER</p>
                </div>
                <!-- Card 3 -->
                <div class="card" onclick="openModal('myModal18')">
                  <img src="/img_mc/GELAS MGF.JPG" alt="GELAS BIR MGF">
                  <p>GEALS BIR MAGNUM FILTER</p>
                </div>
                <!-- Card 4 -->
                <div class="card" onclick="openModal('myModal19')">
                  <img src="/img_mc/TOPI MGF 1.png" alt="TOPI MGF">
                  <p>TOPI MAGNUM FILTER</p>
                </div>
                <!-- Card 5 -->
                <div class="card" onclick="openModal('myModal20')">
                  <img src="/img_mc/KO MGK 1.png" alt="KAOS MGK">
                  <p>KAOS OBLONG MAGNUM KRETEK</p>
                </div>
                <!-- Card 6 -->
                <div class="card" onclick="openModal('myModal21')">
                  <img src="/img_mc/KOREK MGK 3.png" alt="KOREK MGK">
                  <p>KOREK MAGNUM KRETEK</p>
                </div>
                <!-- Card 7 -->
                <div class="card" onclick="openModal('myModal22')">
                  <img src="/img_mc/PAYUNG MGK 3.png" alt="PAYUNG MGK">
                  <p>PAYUNG MAGNUM KRETEK</p>
                </div>
                <!-- Card 8 -->
                <div class="card" onclick="openModal('myModal23')">
                  <img src="/img_mc/ASBAK MGMX.JPG" alt="ASBAK MX">
                  <p>ASBAK MAGNUM MAX</p>
                </div>
                <!-- Card 9 -->
                <div class="card" onclick="openModal('myModal24')">
                  <img src="/img_mc/POLO MGMX 1.png" alt="BAJU POLO MX">
                  <p>BAJU POLO MAGNUM MAX</p>
                </div>
                <!-- Card 10 -->
                <div class="card" onclick="openModal('myModal25')">
                  <img src="/img_mc/GELAS MGMX.JPG" alt="GELAS MX">
                  <p>GELAS BIR MAGNUM MAX</p>
                </div>
                <!-- Card 11 -->
                <div class="card" onclick="openModal('myModal26')">
                  <img src="/img_mc/JD MGMX 1.png" alt="JAM DINDING MX">
                  <p>JAM DINDING MAGNUM MAX</p>
                </div>
                <!-- Card 12 -->
                <div class="card" onclick="openModal('myModal27')">
                  <img src="/img_mc/PAYUNG MGMX 4.png" alt="PAYUNG MX">
                  <p>PAYUNG MAGNUM MAX</p>
                </div>
                <!-- Card 13 -->
                <div class="card" onclick="openModal('myModal28')">
                  <img src="/img_mc/WB MGMX 1.png" alt="TAS PINGGANG MX">
                  <p>TAS PINGGANG MAGNUM MAX</p>
                </div>
                <!-- Card 21 -->
                <div class="card" onclick="openModal('myModal49')">
                  <img src="/img_mc/MASKER BMW MAGNUM 1.png" alt="MASKER MGM">
                  <p>MASKER BMW MAGNUM</p>
                </div>
                <!-- Card 22 -->
                <div class="card" onclick="openModal('myModal50')">
                  <img src="/img_mc/KALENG MGK.jpg" alt="KALENG MGM">
                  <p>KALENG ROKOK BMW MAGNUM</p>
                </div>
                <!-- Card 14 -->
                <div class="card" onclick="openModal('myModal29')">
                  <img src="/img_mc/KO FIX 1.png" alt="KAOS OBLONG FIX MX">
                  <p>KAOS OBLONG FIX MAX</p>
                </div>
                <!-- Card 24 -->
                <div class="card" onclick="openModal('myModal54')">
                  <img src="/img_mc/KO FIX MENTHOL 1.png" alt="KAOS OBLONG FIX MTL">
                  <p>KAOS OBLONG FIX MENTHOL</p>
                </div>
                <!-- Card 15 -->
                <div class="card" onclick="openModal('myModal30')">
                  <img src="/img_mc/KOREK FIX.png" alt="KOREK FIX MX">
                  <p>KOREK FIX MAX</p>
                </div>
                <!-- Card 23 -->
                <div class="card" onclick="openModal('myModal51')">
                  <img src="/img_mc/KALENG FIX MAX 20.png" alt="KALENG FIX MX">
                  <p>KALENG ROKOK FIX MAX</p>
                </div>
                <!-- Card 16 -->
                <div class="card" onclick="openModal('myModal31')">
                  <img src="/img_mc/KOREK LKS.png" alt="KOREK LAKSA">
                  <p>KOREK LAKSA</p>
                </div>
                <!-- Card 17 -->
                <div class="card" onclick="openModal('myModal32')">
                  <img src="/img_mc/ASBAK NB 3.JPG" alt="ASBAK NB">
                  <p>ASBAK NICE BOLD</p>
                </div>
                <!-- Card 18 -->
                <div class="card" onclick="openModal('myModal33')">
                  <img src="/img_mc/GELAS NB 4.JPG" alt="GELAS NB">
                  <p>GELAS NICE BOLD</p>
                </div>
                <!-- Card 19 -->
                <div class="card" onclick="openModal('myModal34')">
                  <img src="/img_mc/KO NB 2.png" alt="KAOS OBLONG NB">
                  <p>KAOS OBLONG NICE BOLD</p>
                </div>
                <!-- Card 20 -->
                <div class="card" onclick="openModal('myModal35')">
                  <img src="/img_mc/KOREK NB.png" alt="KOREK NB">
                  <p>KOREK NICE BOLD</p>
                </div>
                <!-- Card 25 -->
                <div class="card" onclick="openModal('myModal59')">
                  <img src="/img_mc/PARASOL MGF.png" alt="PARASOL MGF">
                  <p>PARASOL MAGNUM FILTER</p>
                </div>
                <!-- Card 26 -->
                <div class="card" onclick="openModal('myModal60')">
                  <img src="/img_mc/PARASOL MX.png" alt="PARASOL MX">
                  <p>PARASOL MAGNUM MAX</p>
                </div>
                <!-- Card 27 -->
                <div class="card" onclick="openModal('myModal61')">
                  <img src="/img_mc/PARASOL NBR.png" alt="PARASOL NBR">
                  <p>PARASOL NICE BOLD RED</p>
                </div>
                <!-- Add more cards if needed -->
      `;
      break;

    case "company3":
      // Add cards and categories for PT Karya Bina Sentausa
      categoryList.innerHTML = `
        <!-- Categories for PT Karya Bina Sentausa -->
        <li><a onclick="filterCategory('asbak')" style="cursor: pointer">ASBAK</a></li>
        <li><a onclick="filterCategory('kaos')" style="cursor: pointer">KAOS</a></li>
        <li><a onclick="filterCategory('korek')" style="cursor: pointer">KOREK</a></li>
        <li><a onclick="filterCategory('topi')" style="cursor: pointer">TOPI</a></li>
      `;
      // Add cards for PT Karya Bina Sentausa
      companyGallery.innerHTML = `
        <!-- Cards for PT Karya Bina Sentausa -->
        <!-- Card 1 -->
                <div class="card" onclick="openModal('myModal36')">
                  <img src="/img_mc/ASBAK TPS 2.JPG" alt="ASBAK TPF">
                  <p>ASBAK TOPPAS FILTER</p>
                </div>
                <!-- Card 7 -->
                <div class="card" onclick="openModal('myModal65')">
                  <img src="/img_mc/KO TOPPAS MAX 1.png" alt="KAOS OBLONG TPF">
                  <p>KAOS OBLONG TOPPAS MAX</p>
                </div>
                <!-- Card 2 -->
                <div class="card" onclick="openModal('myModal37')">
                  <img src="/img_mc/KO TPS 2.png" alt="KAOS OBLONG TPF">
                  <p>KAOS OBLONG TOPPAS FILTER</p>
                </div>
                <!-- Card 6 -->
                <div class="card" onclick="openModal('myModal53')">
                  <img src="/img_mc/KAOS KERAH TPS 1.png" alt="KO TPM">
                  <p>KAOS KERAH TOPPAS MERAH</p>
                </div>
                <!-- Card 3 -->
                <div class="card" onclick="openModal('myModal38')">
                  <img src="/img_mc/TOPI TPS 1.png" alt="TOPI TPF">
                  <p>TOPI TOPPAS FILTER</p>
                </div>
                <!-- Card 4 -->
                <div class="card" onclick="openModal('myModal39')">
                  <img src="/img_mc/KOREK GJ.png" alt="KOREK GJ">
                  <p>KOREK GUNUNG JATI</p>
                </div>
                <!-- Card 5 -->
                <div class="card" onclick="openModal('myModal52')">
                  <img src="/img_mc/KO SAGAN.png" alt="KO SAGAN">
                  <p>KAOS OBLONG SAGAN</p>
                </div>
                <!-- Add more cards if needed -->
      `;
      break;

    case "company4":
      // Add cards and categories for PT Cipta Kretek Nusantara
      categoryList.innerHTML = `
        <!-- Categories for PT Cipta Kretek Nusantara -->
        <li><a onclick="filterCategory('asbak')" style="cursor: pointer">ASBAK</a></li>
      `;
      // Add cards for PT Cipta Kretek Nusantara
      companyGallery.innerHTML = `
        <!-- Cards for PT Cipta Kretek Nusantara -->
        <!-- Card 1 -->
                <div class="card" onclick="openModal('myModal40')">
                  <img src="/img_mc/ASBAK 72 4.JPG" alt="ASBAK 72">
                  <p>ASBAK TUJUH DUA</p>
                </div>

                <!-- Add more cards if needed -->
      `;
      break;

    default:
      break;
  }
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
