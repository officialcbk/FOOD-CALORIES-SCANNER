const resultImage = document.querySelector(".image-preview img");

const storedImage = sessionStorage.getItem("uploadedImage");

if (storedImage) {
  resultImage.src = storedImage;
}
