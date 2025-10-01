// Hàm hiển thị ảnh lớn
function upDate(previewPic) {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

// Hàm reset lại
function undo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "none";
  imageDiv.innerHTML = "Hover or Focus on an image below.";
}

// Hàm thêm tabindex + sự kiện focus/blur
function addTabFocus() {
  let images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    // Cho phép focus bằng bàn phím
    images[i].setAttribute("tabindex", "0");

    // Thêm event cho focus
    images[i].addEventListener("focus", function() {
      upDate(this);
      console.log("focus triggered on", this.alt);
    });

    // Thêm event cho blur
    images[i].addEventListener("blur", function() {
      undo();
      console.log("blur triggered on", this.alt);
    });
  }
  console.log("addTabFocus function executed on page load");
}
