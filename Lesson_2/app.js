const nextBtn = document.querySelector("#slider-right-arrow");
const prevBtn = document.querySelector("#slider-left-arrow");

let currentSlideIndex = 1;
renderSlider(currentSlideIndex);

function renderSlider(index) {
  const activeSlide = document.querySelector(".slide.active");
  // if(activeSlide !== null){
  //     activeSlide.classList.remove("active");
  // }
  activeSlide?.classList.remove("active");
  const slides = document.querySelectorAll(".slide");
  const currentSlide = slides[index - 1];
  currentSlide.classList.add("active");

  const backgroundImage = currentSlide.style.backgroundImage;
  document.body.style.backgroundImage = backgroundImage;

  const activeIndicator = document.querySelector(".nav-item.active");
  activeIndicator?.classList.remove("active");
  const indicators = document.querySelectorAll(".nav-item");
  const currentIndicator = indicators[index - 1];
  currentIndicator.classList.add("active");
}

// function declaration
function sliderMoveNext() {
  debugger; // breakpoint
  currentSlideIndex++;
  if (currentSlideIndex > 5) currentSlideIndex = 1;
  renderSlider(currentSlideIndex);
}
nextBtn.addEventListener("click", sliderMoveNext);

// function expression
const sliderMovePrev = () => {
  currentSlideIndex--;
  if (currentSlideIndex < 1) currentSlideIndex = 5;
  renderSlider(currentSlideIndex);
};
prevBtn.onclick = sliderMovePrev;

// renderSlider(1)

// debugging (отладка)

