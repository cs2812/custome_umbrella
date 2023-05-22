let blue_btn = document.getElementById("blue-btn");
let yellow_btn = document.getElementById("yellow-btn");
let pink_btn = document.getElementById("pink-btn");
let umbrella_image = document.getElementById("umbrella-image");
let loader_container = document.getElementById("loader-container");
let logo_upload_button = document.getElementById("logo-upload-button");
let logo_upload_input = document.getElementById("logo-upload-input");
let upload_logo = document.getElementById("upload-logo");

function showLoader() {
  loader_container.style.opacity = 1;
}

function hideLoader() {
  loader_container.style.opacity = 0;
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    //   const uploadedLogo = document.getElementById("uploaded-logo");
    //   uploadedLogo.src = reader.result;
    //   uploadedLogo.style.display = "block";
    //   umbrellaImage.style.zIndex = "-1";
    console.log(reader);
  };
}

logo_upload_input.addEventListener("change", handleLogoUpload)

blue_btn.addEventListener("click", () => {
  umbrella_image.src = "./assets/Blue.png";
  logo_upload_button.style.backgroundColor = "#2db3e5";
  upload_logo.style.backgroundColor = "#2db3e5";
  document.body.style.backgroundColor = "#c5e0dc";

  //   umbrella_image.style.display = "none";
  // //   showLoader();
  //   setTimeout(() => {
  //     // hideLoader();
  //     umbrella_image.style.display = "block";
  //   }, 3000);
});

yellow_btn.addEventListener("click", () => {
  umbrella_image.src = "./assets/Yello.png";
  logo_upload_button.style.backgroundColor = "#fed144";
  upload_logo.style.backgroundColor = "#fed144";
  document.body.style.backgroundColor = "#f7e09e";
});

pink_btn.addEventListener("click", () => {
  umbrella_image.src = "./assets/Pink.png";
  logo_upload_button.style.backgroundColor = "#da358c";
  upload_logo.style.backgroundColor = "#da358c";
  document.body.style.backgroundColor = "#f4c4c4";
});

logo_upload_button.addEventListener("click", () => {
  logo_upload_input.click();
});
