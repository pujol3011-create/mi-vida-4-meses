const startDate = new Date("2026-06-02T00:00:00");

function updateCounter() {
  const now = new Date();
  let difference = now - startDate;

  if (difference < 0) difference = 0;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / second);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

setInterval(updateCounter, 1000);
updateCounter();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function createHeart() {
  const container = document.getElementById("hearts");
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "♡";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (8 + Math.random() * 14) + "px";
  heart.style.animationDuration = (6 + Math.random() * 7) + "s";
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 14000);
}

setInterval(createHeart, 1800);

// Galería de viajes: al pulsar una foto se abre en grande.
function openTravelPhoto(button) {
  const image = button.querySelector("img");
  if (!image) return;

  const lightbox = document.getElementById("travelLightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "Foto del viaje";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeTravelPhoto(event) {
  if (event && event.target && event.target.id === "lightboxImage") return;

  const lightbox = document.getElementById("travelLightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.getElementById("lightboxImage").src = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeTravelPhoto();
});

// Galería principal
function openPhoto(button) {
  const image = button.querySelector('img');
  if (!image) return;
  const lightbox = document.getElementById('photoLightbox');
  const target = document.getElementById('photoLightboxImage');
  target.src = image.src;
  target.alt = image.alt || 'Recuerdo ampliado';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePhoto(event) {
  if (event && event.target && event.target.id === 'photoLightboxImage') return;
  const lightbox = document.getElementById('photoLightbox');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.getElementById('photoLightboxImage').src = '';
  document.body.style.overflow = '';
}
