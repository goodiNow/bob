const slider = document.getElementById("slider");
const image = document.getElementById("bob");

const randomOpacity = Math.floor(Math.random() * 101);

slider.value = randomOpacity;
image.style.opacity = randomOpacity / 100;

function pisatDva() {
  if (slider.value == 52) {
    image.src = "";
    image.alt = "52";
    image.style.opacity = 1;
    image.classList.add("pisatDva");
    image.innerHTML = "52";
  } else {
    image.src = "bob.jpg";
    image.classList.remove("pisatDva");
  }
}

function nice() {
  if (slider.value == 69) {
    image.src = "nice.jpg";
    image.style.opacity = 1;
    image.classList.add("nice");
  } else {
    pisatDva();
  }
}

slider.addEventListener("input", function () {
  image.style.opacity = slider.value / 100;
  pisatDva(slider.value);
  nice(slider.value);
});

pisatDva();
nice();
