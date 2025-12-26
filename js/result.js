const previewedImage = document.querySelector(".image-preview img")

function reloadPage(event){
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function () {
    previewedImage.src = reader.result;
  };

  reader.readAsDataURL(file);
}

reloadPage