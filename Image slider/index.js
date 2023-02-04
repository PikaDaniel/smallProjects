const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");
const imageContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let currentImage = 1;
let timeout;

nextElement.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImage();
});

prevElement.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImage();
});

updateImage();

function updateImage() {
  if (currentImage > imgsEl.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imgsEl.length;
  }
  imageContainerEl.style.transform = `translateX(-${
    (currentImage - 1) * 31.25
  }em)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 5000);
}
