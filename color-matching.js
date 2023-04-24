// Add an event listener that listens for the "load" event on the window object
window.addEventListener("load", () => {
  // Get all the img elements on the HTML page
  let startImages = document.getElementsByTagName("img");

  // Initalize game status and use to enure colors are randomized only once
  let gameLoaded = false;

  // Loop through all the img elements
  for (let i = 0; i < startImages.length; i++) {
    // If the index is 12, change the source of the image to black.png and add a hover-scale class
    // Also, add event listeners for click, mouseover, and mouseout events on the image
    if (i === 12) {
      startImages[i].src = "images/black.png";
      startImages[i].classList.add("hover-scale");
      //Event listener function to only loadGame if gameLoaded is false
      startImages[i].addEventListener("click", () => {
        if (!gameLoaded) {
          loadGame();
          gameLoaded = true;
        }
      });
      startImages[i].addEventListener("mouseover", changeTitleColor);
      startImages[i].addEventListener("mouseout", resetTitleColor);
    } else {
      // If the index is not 12, change the source of the image to white.png and add a border to it
      startImages[i].src = "images/white.png";
      startImages[i].style.border = "1px solid #252525";
    }
  }
});

// Function to change the color of the title text and update background image
function changeTitleColor() {
  // Get the h1, h2, and h3 elements on the page
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");

  // Get the text content of the h1, h2, and h3 elements
  let h1Text = h1.textContent;
  let h2Text = h2.textContent;
  let h3Text = h3.textContent;

  // Create an array of color values
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

  // Create a new string with h1 text that contains each character wrapped in a span element with a random color
  let newH1Color = "";
  for (let i = 0; i < h1Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH1Color += "<span style='color:" + color + "'>" + h1Text[i] + "</span>";
  }

  // Create a new string with h2 text that contains each character wrapped in a span element with a random color
  let newH2Color = "";
  for (let i = 0; i < h2Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH2Color += "<span style='color:" + color + "'>" + h2Text[i] + "</span>";
  }

  // Create a new string with h3 text that contains each character wrapped in a span element with a random color
  let newH3Color = "";
  for (let i = 0; i < h3Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH3Color += "<span style='color:" + color + "'>" + h3Text[i] + "</span>";
  }

  // Set the innerHTML of the h1, h2, and h3 elements to the new strings with colored text
  h1.innerHTML = newH1Color;
  h2.innerHTML = newH2Color;
  h3.innerHTML = newH3Color;

  // Set the background image of the body to display an image
  document.body.style.backgroundImage = "url(images/color-grid.png)";
}

// Function to reset the color of the title text and remove background image
function resetTitleColor() {
  // Get the h1, h2, and h3 elements on the page
  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let h3 = document.querySelector("h3");

  // Get the text content of the h1, h2, and h3 elements
  let h1Text = h1.textContent;
  let h2Text = h2.textContent;
  let h3Text = h3.textContent;

  // Define an array of colors to use for resetting the title color
  let colors = ["#f6f6f6"];

  // Create a new string with HTML tags to apply the reset color to each character in the h1 text
  let newH1Color = "";
  for (let i = 0; i < h1Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH1Color += "<span style='color:" + color + "'>" + h1Text[i] + "</span>";
  }

  // Create a new string with HTML tags to apply the reset color to each character in the h2 text
  let newH2Color = "";
  for (let i = 0; i < h2Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH2Color += "<span style='color:" + color + "'>" + h2Text[i] + "</span>";
  }

  // Create a new string with HTML tags to apply the reset color to each character in the h3 text
  let newH3Color = "";
  for (let i = 0; i < h3Text.length; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    newH3Color += "<span style='color:" + color + "'>" + h3Text[i] + "</span>";
  }

  // Set the innerHTML of the h1, h2, and h3 elements to the new strings with the reset color
  h1.innerHTML = newH1Color;
  h2.innerHTML = newH2Color;
  h3.innerHTML = newH3Color;

  // Remove the background image from the document body
  document.body.style.backgroundImage = "";
}

// Array of each correct relative path already in proper index order
// To be used to check user arranged block positions are correct
const solution = [
  "level-one/1-1.png",
  "level-one/1-2.png",
  "level-one/1-3.png",
  "level-one/1-4.png",
  "level-one/1-5.png",
  "level-one/2-1.png",
  "level-one/2-2.png",
  "level-one/2-3.png",
  "level-one/2-4.png",
  "level-one/2-5.png",
  "level-one/3-1.png",
  "level-one/3-2.png",
  "level-one/3-3.png",
  "level-one/3-4.png",
  "level-one/3-5.png",
  "level-one/4-1.png",
  "level-one/4-2.png",
  "level-one/4-3.png",
  "level-one/4-4.png",
  "level-one/4-5.png",
  "level-one/5-1.png",
  "level-one/5-2.png",
  "level-one/5-3.png",
  "level-one/5-4.png",
  "level-one/5-5.png",
];

// Function to load the game
function loadGame() {
  // Set the innerHTML of the element with id "rules" to display instructions for the game
  document.getElementById("rules").innerHTML =
    "Swap the color blocks around until you recreate the color gradient above";

  // Set the background image of the body to display the color-grid.png image
  document.body.style.backgroundImage = "url('images/color-grid.png')";

  // Get all the img elements on the page
  let startImages = document.getElementsByTagName("img");

  // Loop through all the img elements
  for (let i = 0; i < startImages.length; i++) {
    // Remove the hover-scale class from the image and remove the border from the image
    startImages[i].classList.remove("hover-scale");
    startImages[i].style.border = "";

    // Remove the mouseover and mouseout event listeners from the image
    startImages[i].removeEventListener("mouseover", changeTitleColor);
    startImages[i].removeEventListener("mouseout", resetTitleColor);

    // Change the source of the image to the corresponding color in the solution array to brielfy display the correct solution
    startImages[i].src = solution[i];
  }

  // Set the initial value of the countdown timer to 10 seconds
  let seconds = 10;

  // Create an interval that counts down every second until the game starts
  const countdown = setInterval(() => {
    // Set the text content of the element with id "countdown" to display the remaining time until the game starts
    document.getElementById("countdown").textContent = `Game starting in ${seconds} seconds...`;
    seconds--;

    // If the countdown reaches 0, clear the interval and remove the countdown text, then start the game by randomizing the colors
    if (seconds < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").textContent = "";
      randomizeColors();
    }
  }, 500);
}

// Function to randomize the color blocks shown in the game
function randomizeColors() {
  // Get all the color block image elements from the HTML page
  let startImages = document.getElementsByTagName("img");

  // Create an empty set to keep track of the indices of color blocks that have already been used
  let usedIndices = new Set();

  // Loop through each color block image element
  for (let i = 0; i < startImages.length; i++) {
    // Choose a new index for the color block randomly, making sure not to use an index that has already been used
    let newIndex;
    do {
      // Update the new index to be a random index from the solution array (relative paths to images)
      newIndex = Math.floor(Math.random() * solution.length);

      // Runs until unique newIndex is not in usedIndices
    } while (usedIndices.has(newIndex));

    // Add each new index to the set of used indices
    usedIndices.add(newIndex);

    // Set the color block's image source to the corresponding solution array relative path at the new index
    startImages[i].src = solution[newIndex];
  }
  // Call function to handle user selections and swap
  userSelectionSwap();
}

function userSelectionSwap() {
  // Loop through all the img elements on the HTML page
  const colorBlock = document.getElementsByTagName("img");
  for (let i = 0; i < colorBlock.length; i++) {
    // Add click event listener to each image element
    colorBlock[i].addEventListener("click", handleBlockClick);
  }

  // Variable to keep track of the selected image element
  let selectedBlock = null;

  // Function to handle click events on color blocks
  function handleBlockClick(event) {
    const clickedBlock = event.target;

    if (selectedBlock === null) {
      // If no block is currently selected
      selectedBlock = clickedBlock; // Select the clicked block
      console.log(selectedBlock.src.split("/").pop());
      selectedBlock.classList.add("firstUserSelection"); // Add hover effect to the selected block
    } else {
      // If an block is already selected swap the source attributes of the selected and clicked block
      const selectedSrc = selectedBlock.src;
      selectedBlock.src = clickedBlock.src;
      clickedBlock.src = selectedSrc;

      // Remove hover effect from the previously selected block
      selectedBlock.classList.remove("firstUserSelection");
      selectedBlock = null; // Reset the selected block

      // Check if the user has won after every swap
      let colorMatch = true;
      const colorBlock = document.getElementsByTagName("img");
      for (let i = 0; i < colorBlock.length; i++) {
        const imageName = colorBlock[i].src.split("/").pop(); // Extract only the file name from the source
        if (imageName !== solution[i].split("/").pop()) {
          // Compare only the file name with the solution array
          colorMatch = false;
          break;
        }
      }
      if (colorMatch) {
        alert("You won!");
      }
    }
  }
}
