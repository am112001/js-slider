let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slider-number");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.onclick = sliderNext;
prevBtn.onclick = sliderPrev;
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indicators").appendChild(paginationElement);
let paginationCreateUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();
function sliderNext() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}
function sliderPrev() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
function theChecker() {
  slideNumberElement.textContent =
    "slide #" + currentSlide + " of " + slidesCount;
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreateUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtnBtn.classList.remove("disabled");
  }
}
function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
