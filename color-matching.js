window.addEventListener("load", () => {
  let startImages = document.getElementsByTagName("img");
  for (let i = 0; i < startImages.length; i++) {
    if (i === 12) {
      startImages[i].src = "images/black.png";
      startImages[i].classList.add("hover-scale");
      startImages[i].addEventListener("click", loadGame);
      startImages[i].addEventListener("mouseover", changeTitleColor);
      startImages[i].addEventListener("mouseout", resetTitleColor);
    } else {
      startImages[i].src = "images/white.png";
      startImages[i].style.border = "1px solid #252525";
    }
  }
});

function changeTitleColor() {
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");
  let h1Text = h1.textContent;
  let h2Text = h2.textContent;
  let h3Text = h3.textContent;

  let colors = [
    "#ff8972",
    "#e67385",
    "#90578b",
    "#322f86",
    "#071482",
    "#fdc1d5",
    "#fdbdbc",
    "#feb28c",
    "#fda665",
    "#ff9762",
  ];

  let newH1Color = "";
  for (let i = 0; i < h1Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH1Color += "<span style='color:" + color + "'>" + h1Text[i] + "</span>";
  }

  let newH2Color = "";
  for (let i = 0; i < h2Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH2Color += "<span style='color:" + color + "'>" + h2Text[i] + "</span>";
  }

  let newH3Color = "";
  for (let i = 0; i < h3Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH3Color += "<span style='color:" + color + "'>" + h3Text[i] + "</span>";
  }

  // let backgrounds = [
  //   "#images/color-grid",
  //   "#images/color-grid-2",
  // ];

  //   let bodyBackground = "";
  //   for (let i = 0; i < backgrounds.length; i++) {
  //     let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  //     document.body.style.backgroundImage = background;
  //   }

  h1.innerHTML = newH1Color;
  h2.innerHTML = newH2Color;
  h3.innerHTML = newH3Color;
  document.body.style.backgroundImage = "url('images/color-grid.png')";
}

function resetTitleColor() {
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");
  let h1Text = h1.textContent;
  let h2Text = h2.textContent;
  let h3Text = h3.textContent;

  let colors = ["#f6f6f6"];

  let newH1Color = "";
  for (let i = 0; i < h1Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH1Color += "<span style='color:" + color + "'>" + h1Text[i] + "</span>";
  }

  let newH2Color = "";
  for (let i = 0; i < h2Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH2Color += "<span style='color:" + color + "'>" + h2Text[i] + "</span>";
  }

  let newH3Color = "";
  for (let i = 0; i < h3Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH3Color += "<span style='color:" + color + "'>" + h3Text[i] + "</span>";
  }

  h1.innerHTML = newH1Color;
  h2.innerHTML = newH2Color;
  h3.innerHTML = newH3Color;

  document.body.style.backgroundImage = "";
}

const solution = [
  "game-images/1-1.png",
  "game-images/1-2.png",
  "game-images/1-3.png",
  "game-images/1-4.png",
  "game-images/1-5.png",
  "game-images/2-1.png",
  "game-images/2-2.png",
  "game-images/2-3.png",
  "game-images/2-4.png",
  "game-images/2-5.png",
  "game-images/3-1.png",
  "game-images/3-2.png",
  "game-images/3-3.png",
  "game-images/3-4.png",
  "game-images/3-5.png",
  "game-images/4-1.png",
  "game-images/4-2.png",
  "game-images/4-3.png",
  "game-images/4-4.png",
  "game-images/4-5.png",
  "game-images/5-1.png",
  "game-images/5-2.png",
  "game-images/5-3.png",
  "game-images/5-4.png",
  "game-images/5-5.png",
];

function loadGame() {
  document.getElementById("rules").innerHTML =
    "Swap the color blocks around until you recreate the color gradient above";
  document.body.style.backgroundImage = "url('images/color-grid.png')";
  let startImages = document.getElementsByTagName("img");
  for (let i = 0; i < startImages.length; i++) {
    startImages[i].classList.remove("hover-scale");
    startImages[i].style.border = "";
    startImages[i].removeEventListener("mouseover", changeTitleColor);
    startImages[i].removeEventListener("mouseout", resetTitleColor);
    startImages[i].src = solution[i];
  }
  let seconds = 10;
  const countdown = setInterval(() => {
    document.getElementById("countdown").textContent = `Game starting in ${seconds} seconds...`;
    seconds--;
    if (seconds < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").textContent = "";
      randomizeColors();
    }
  }, 1000);
}

function randomizeColors() {
  let startImages = document.getElementsByTagName("img");
  let usedIndices = new Set();
  for (let i = 0; i < startImages.length; i++) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * solution.length);
    } while (usedIndices.has(newIndex));
    usedIndices.add(newIndex);
    startImages[i].src = solution[newIndex];
  }
}
