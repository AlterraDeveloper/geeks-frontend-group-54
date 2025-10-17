const urlInput = document.querySelector("#url");
const urlText = document.querySelector("#urlText");
const qrBox = document.querySelector("#qr-box");
const qrForm = document.querySelector("form");

const qrCodeOptions = {
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
};

// urlInput.addEventListener("input", )
urlInput.oninput = () => {
  urlText.textContent = urlInput.value;
  updateQR();
};

function updateQR() {
  qrBox.innerHTML = "";
  const myQrCode = new QRCode(qrBox, qrCodeOptions);
  myQrCode.makeCode(urlInput.value, qrCodeOptions);
  qrBox.style.backgroundColor = qrCodeOptions.colorLight;
}

const qrCodeBackgroundInput = document.querySelector("#qrBgColor");

qrCodeBackgroundInput.onchange = () => {
  qrCodeOptions.colorLight = qrCodeBackgroundInput.value;
  updateQR();
};

const qrCodeColorInput = document.querySelector("#qrColor");

qrCodeColorInput.onchange = () => {
  qrCodeOptions.colorDark = qrCodeColorInput.value;
  updateQR();
};

const invertColorInput = document.querySelector("#invertColor");

invertColorInput.onchange = () => {
    const color = qrCodeColorInput.value;
    const bgColor = qrCodeBackgroundInput.value;
    qrCodeColorInput.value = bgColor;
    qrCodeBackgroundInput.value = color;
    qrCodeOptions.colorDark = bgColor;
    qrCodeOptions.colorLight = color;
    updateQR();
}

qrForm.onsubmit = (event) => {
  event.preventDefault();
  const downloadLink = document.createElement("a"); // <a />
  const qrCodeImage = qrBox.querySelector("img");
  downloadLink.href = qrCodeImage.src;
  downloadLink.download = "geeks-qr-code.jpg";
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};


// Your code here...