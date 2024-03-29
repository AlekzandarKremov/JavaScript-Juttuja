const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const reader = new FileReader();
const img = new Image();

const uploadImage = (e) => {
  reader.onload = () => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

const imageLoader = document.getElementById("uploader");
uploader.addEventListener("change", uploadImage);

const greyscale = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
  }
  ctx.putImageData(imageData, 0, 0);
};

const sepia = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07;
    data[i] = grey + 95;
    data[i + 1] = grey + 58;
    data[i + 2] = grey;
  }
  ctx.putImageData(imageData, 0, 0);
};

const invert = () => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
  ctx.putImageData(imageData, 0, 0);
};

function rbg() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const green = data[i + 1];
    data[i] = data[i];
    data[i + 1] = data[i + 2];
    data[i + 2] = green;
  }
  ctx.putImageData(imageData, 0, 0);
}

function bgr() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 2];
    data[i + 1] = data[i + 1];
    data[i + 2] = red;
  }
  ctx.putImageData(imageData, 0, 0);
}

function gbr() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 1];
    data[i + 1] = data[i + 2];
    data[i + 2] = red;
  }
  ctx.putImageData(imageData, 0, 0);
}

function grb() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i];
    data[i] = data[i + 1];
    data[i + 1] = red;
    data[i + 2] = data[i + 2];
  }
  ctx.putImageData(imageData, 0, 0);
}

function clearChanges() {
  img.src = reader.result;
}

function download() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
}

const resizeImage = () => {
    const newWidth = 300;
    const newHeight = 400;
  
    canvas.width = newWidth;
    canvas.height = newHeight;
  
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
  };

document.querySelectorAll("button")[0].addEventListener("click", greyscale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rbg);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", gbr);
document.querySelectorAll("button")[6].addEventListener("click", grb);
document.querySelectorAll("button")[7].addEventListener("click", clearChanges);
document.querySelectorAll("button")[8].addEventListener("click", download);
document.querySelectorAll("button")[9].addEventListener("click", resizeImage);





/*TESTI
ctx.fillText("Moi Miten Menee?", 100, 50 );

ctx.strokeRect(0,0,canvas.width, canvas.height);

ctx.fillStyle = "#42e9f5";
ctx.fillRect(0, 0, 50, 50);

ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2);
ctx.lineTo(300, 0);
ctx.lineTo(300, 150);
ctx.closePath();
ctx.fill(); */