function renderBall(value) {
  const div = document.createElement("div");
  div.innerText = value;
  div.classList.add("array-item");
  return div;
}

const originalArray = [45, 8, 5, 89, 25, 14, 47];

function renderArray() {
  const container = document.querySelector("#original .array");
  container.innerHTML = "";

//   function action(item) {
//     const ball = renderBall(item);
//     container.append(ball);
//   }

//   for (const item of originalArray) {
//     action(item);
//   }

//   originalArray.forEach(function (item) {
//     const ball = renderBall(item);
//     container.append(ball);
//   });

  originalArray.forEach((item) => {
    const ball = renderBall(item);
    container.append(ball);
  });
}

renderArray();

function renderArray2(array){
    const container = document.querySelector("#updated .array");
    container.innerHTML = "";
    const balls = array.map(item => renderBall(item));
    container.append(...balls);
}

// Callback - функция обратного вызова

// map

const map5btn = document.querySelector("#map5");
map5btn.onclick = () => {
    const updatedArray = originalArray.map((item) => item + 5);
    renderArray2(updatedArray);
};

const mapX2btn = document.querySelector("#mapX2");
mapX2btn.onclick = () => {
    const updatedArray = originalArray.map((item) => item * 2);
    renderArray2(updatedArray);
};

// filter

const filter50btn = document.querySelector("#filter50");
filter50btn.onclick = () => {
    const updatedArray = originalArray.filter((item) => item > 50);
    renderArray2(updatedArray);
};

const filterEvensbtn = document.querySelector("#filterEvens");
filterEvensbtn.onclick = () => {
    const updatedArray = originalArray.filter(function(item){
        return item % 2 === 0
    });
    renderArray2(updatedArray);
};
