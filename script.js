const btn = document.getElementById("heart-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const video = document.getElementById("bg-video");
const floresWrapper = document.getElementById("flores");
const flores = document.querySelectorAll(".flor");
const topMessage = document.getElementById("top-message");

const flowerBtn = document.getElementById("flower-btn");
const modal2 = document.getElementById("modal2");
const closeBtn2 = document.getElementById("close-btn2");
const floresWrapper2 = document.getElementById("flores2");
const flores2 = document.querySelectorAll(".flor2"); // ✅ nuevas flores

btn.onclick = () => {
  modal.style.display = "flex";
  video.classList.add("blurred");

  // Mostrar flores y mensaje
  floresWrapper.classList.add("visible");
  topMessage.style.display = "block";

  flores.forEach((flor, i) => {
    flor.style.animation = "none";
    flor.offsetHeight;
    flor.style.animation = `aparecer 0.8s ease-out forwards ${i * 0.3}s`;
  });
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  video.classList.remove("blurred");
  floresWrapper.classList.remove("visible");
  topMessage.style.display = "none";
};

/* Segundo modal */
flowerBtn.onclick = () => {
  modal2.style.display = "flex";
  video.classList.add("blurred");

  floresWrapper2.classList.add("visible");

  // Animación en cascada para las nuevas flores
  flores2.forEach((flor, i) => {
    flor.style.animation = "none";
    flor.offsetHeight;
    flor.style.animation = `aparecer 0.8s ease-out forwards ${i * 0.3}s`;
  });
};

closeBtn2.onclick = () => {
  modal2.style.display = "none";
  video.classList.remove("blurred");
  floresWrapper2.classList.remove("visible");
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    video.classList.remove("blurred");
    floresWrapper.classList.remove("visible");
    topMessage.style.display = "none";
  }
  if (e.target == modal2) {
    modal2.style.display = "none";
    video.classList.remove("blurred");
    floresWrapper2.classList.remove("visible");
  }
};
