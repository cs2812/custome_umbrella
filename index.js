let blue_btn = document.getElementById("blue-btn");
let yellow_btn = document.getElementById("yellow-btn");
let pink_btn = document.getElementById("pink-btn");
let umbrella_image = document.getElementById("umbrella-image");
let loader_container = document.getElementById("loader-container");
let logo_upload_button = document.getElementById("logo-upload-button");
let logo_upload_input = document.getElementById("logo-upload-input");
let upload_logo = document.getElementById("upload-logo");
let umbrella_uploaded_logo = document.getElementById("umbrella-uploaded-logo");
let upload_loader = document.getElementById("uploade-loader");
let isLogoAdded = false;
let currentColor = "#2db3e5";
let currentImage = "./assets/Blue.png";
upload_logo.style.fill = "white";

function showLoader(color) {
  umbrella_image.style.display = "none";
  umbrella_uploaded_logo.style.display = "none";
  document.getElementById("loader").style.fill = color ? color : currentColor;
  upload_logo.style.display = "none";
  upload_loader.style.display = "block";
  upload_loader.style.backgroundColor = "transparent";
  upload_loader.style.fill = "white";
  loader_container.style.opacity = 1;
}

function hideLoader() {
  upload_logo.style.display = "block";
  upload_loader.style.display = "none";
  loader_container.style.opacity = 0;
  umbrella_image.style.display = "block";
  umbrella_uploaded_logo.style.display = "block";
}

// Loading handler function
function handleLogoUpload(event) {
  umbrella_uploaded_logo.style.display = "none";
  const file = event.target.files[0];
  if (file.size > 5242880) {
    alert("File Size should not be greter than 5MB");
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    isLogoAdded = true;
    umbrella_image.style.display = "none";
    showLoader();
    setTimeout(() => {
      hideLoader();
      umbrella_uploaded_logo.src = reader.result;
    }, 3000);
  };
}
logo_upload_input.addEventListener("change", handleLogoUpload);

//Blue Umbrella
blue_btn.addEventListener("click", () => {
  currentColor = "#2db3e5";
  logo_upload_button.style.backgroundColor = currentColor;
  upload_logo.style.backgroundColor = currentColor;
  document.body.style.backgroundColor = "#c5e0dc";
  if (!isLogoAdded) {
    umbrella_image.src = "./assets/Blue.png";
  } else {
    showLoader("#2db3e5");
    setTimeout(() => {
      hideLoader();
      umbrella_image.src = "./assets/Blue.png";
    }, 3000);
  }
});

//Yellow Umbrella
yellow_btn.addEventListener("click", () => {
  currentColor = "#fed144";
  upload_logo.style.backgroundColor = currentColor;
  logo_upload_button.style.backgroundColor = currentColor;
  document.body.style.backgroundColor = "#f7e09e";
  if (!isLogoAdded) {
    umbrella_image.src = "./assets/Yello.png";
  } else {
    showLoader("#fed144");
    setTimeout(() => {
      hideLoader();
      umbrella_image.src = "./assets/Yello.png";
    }, 3000);
  }
});

//Pink Umbrella
pink_btn.addEventListener("click", () => {
  currentColor = "#da358c";
  logo_upload_button.style.backgroundColor = currentColor;
  upload_logo.style.backgroundColor = currentColor;
  document.body.style.backgroundColor = "#f4c4c4";
  if (!isLogoAdded) {
    umbrella_image.src = "./assets/Pink.png";
  } else {
    showLoader("#da358c");
    setTimeout(() => {
      hideLoader();
      umbrella_image.src = "./assets/Pink.png";
    }, 3000);
  }
});

logo_upload_button.addEventListener("click", () => {
  logo_upload_input.click();
});
