// <div class="fa fa-star" id="star-1"></div>
function renderStar(isChecked, index) {
  const div = document.createElement("div");
  div.classList.add("fa", "fa-star");
  if (isChecked) {
    div.classList.add("checked");
  }
  div.id = "star-" + index;
  return div;
}

function renderRating(rating) {
  const ratingContainer = document.querySelector(".stars");
  ratingContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let isChecked = rating > i;
    const star = renderStar(isChecked, i + 1);
    ratingContainer.appendChild(star);
  }
}

renderRating(0);

const ratingContainer = document.querySelector(".stars");
const container = document.querySelector(".star-container");

// event propagation - распространение события

ratingContainer.onclick = function (event) {
  const elementId = String(event.target.id);
  if (!elementId.startsWith("star-")) return;

  const selectedRating = Number(elementId.slice(-1));
  renderRating(selectedRating);

  if(selectedRating === 5){
    blowConfetti();
  }
};

container.onmousemove = function (event) {
  const elementId = String(event.target.id);
  const selectedRating = Number(elementId.slice(-1));
  let ratingText = "";
  switch (selectedRating) {
    case 1:
      ratingText = "Shit";
      break;
    case 2:
      ratingText = "Bad";
      break;
    case 3:
      ratingText = "Norm";
      break;
    case 4:
      ratingText = "Good";
      break;
    case 5:
      ratingText = "F*cking amazing!!!";
      break;
  }
  const ratingLabel = document.querySelector("#rating-text");
  ratingLabel.dataset.content = ratingText;
};

function blowConfetti(){
  const shapes = ["star"];
  const colors = ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"];

  confetti({
    particleCount: 200,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
    shapes: shapes
  });

  confetti({
    particleCount: 200,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
    shapes: shapes
  });
}

// CDN - Content Delivery Network
