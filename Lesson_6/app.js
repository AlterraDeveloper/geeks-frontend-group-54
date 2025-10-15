function openModal(id) {
  // const modal = document.querySelector("#" + id);
  // template strings - шаблонные строки ``
  const modal = document.querySelector(`#${id}`);
  if (!modal) return;
  modal.classList.add("show");
}

function closeModal(id) {
  const modal = document.querySelector(`#${id}`);
  if (!modal) return;
  modal.classList.remove("show");
}

const openModalBtn = document.querySelector("#open");
const registrationModal = document.querySelector("#registration-modal");
const registrationModalInner = registrationModal.querySelector(".modal");
const registrationModalForm = registrationModalInner.querySelector("form");

openModalBtn.onclick = () => {
  openModal("registration-modal");
};

registrationModal.onclick = () => {
  closeModal("registration-modal");
};

registrationModalInner.onclick = (event) => {
  event.stopPropagation();
};

registrationModalForm.onsubmit = (event) => {
  event.preventDefault();
  console.log("for has been submited");
};

document.body.oncontextmenu = (event) => {
  event.preventDefault();
};

// document.body.onclick = (event) => {
//     console.log(event.target.tagName + " clicked");
// }

// 01-KG-123-FTR
// const regionCode = "01";
// const numberPart = "123";
// const letterPart = "FTR";
// const carNumber = `${regionCode}-KG-${numberPart}-${letterPart}`;

// Event Propagation - Распространие события

// SPA - Single Page Application

const userEmailInput = document.querySelector("#userEmail");

userEmailInput.oninput = () => {
  let email = String(userEmailInput.value);
  email = email.slice(0, 15);
  userEmailInput.value = email;
};

const passwordEye = document.querySelector("#password-eye");
const userPasswordInput = document.querySelector("#userPassword");

passwordEye.onmouseenter = () => {
  userPasswordInput.setAttribute("type", "text");
};

passwordEye.onmouseleave = () => {
  userPasswordInput.setAttribute("type", "password");
};
