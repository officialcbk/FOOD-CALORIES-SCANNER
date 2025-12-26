//references to DOM elements
const imageInput = document.getElementById("imageInput");
const previewImage = document.querySelector(".image-preview img");
const analyzeButton = document.querySelector(".primary-btn");

//listener to change
imageInput.addEventListener("change", handleImageUpload);
analyzeButton.addEventListener("click", analyzeImage);

function handleImageUpload(event) {
  const file = event.target.files[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    previewImage.src = reader.result;
    analyzeButton.disabled = false;
  };

  reader.readAsDataURL(file);
}

function analyzeImage(event){
    event.preventDefault();
}