const sliderContainer = document.querySelector(".slider_container");
const slideText = document.querySelector(".text_slide");
const slideImage = document.querySelector(".image_slide");
const upBtn = document.querySelector(".up_button");
const downBtn = document.querySelector(".down_button");
//const slideLength= document.querySelectorAll(".back_img")
const slideLength = slideImage.querySelectorAll(".back_img").length;

let activeSlideIndex = 0;

// console.log(slideLength);

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

slideText.style.top = `-${(slideLength - 1) * 100}vh`;

const changeSlide = (richtung) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (richtung == "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (richtung == "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideLength - 1;
    }
  }

  slideImage.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideText.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
