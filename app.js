// const image = document.createElement("img");
// image.src = "./OFFbulb.jpg";
// document.body.appendChild(image);

// const image2 = document.createElement("img");
// image2.src = "./ONbulb.jpg";

// image.addEventListener("click", function () {
//   image.src = "./ONbulb.jpg";
//   console.log(image.src);
// });

const image2 = document.querySelector("div");
// console.log(image2);

image2.addEventListener("click", function () {
  image2.classList.toggle("imageOn");
});
