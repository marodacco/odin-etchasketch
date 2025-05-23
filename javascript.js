// Set boxes width
const boxesWidth = 640;

// Default number of boxes
const defaultNumber = 16;

// Get the container
const container = document.querySelector("#container");

// Create an inner container for boxes
const boxes = document.createElement("div");
boxes.id = "boxes";
boxes.style.width = boxesWidth + "px";

createBoxes(defaultNumber);

// Get the button
const button = document.querySelector("button");

// Set the button to change the number of boxes
button.addEventListener("click", () => {
  const userNumber = prompt("The number of squares per side: (maxmum of 100)");

  //Check if it's below 100
  // Check if it's empty or not a number
  if (userNumber > 100 || isNaN(userNumber) || !userNumber) {
    alert("Please enter a number less than or equal to 100");
  } else {
    // Remove the current boxes
    const oldBoxes = document.querySelectorAll("#boxes div");
    oldBoxes.forEach((oldBox) => {
      boxes.removeChild(oldBox);
    });

    // Create new boxes
    createBoxes(userNumber);
  }
});

// Create boxes
function createBoxes(num) {
  for (let i = 0; i < num * num; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    // Set box width and height
    box.style.width = boxesWidth / num + "px";
    box.style.height = boxesWidth / num + "px";
    // Set opacity
    box.style.opacity = 0.1;

    // Add event listner
    box.addEventListener("mouseenter", () => {
      // Random colour
      var randomColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
      box.style.backgroundColor = randomColor;
      
      // Increase opacity
      const currentOpacity = box.style.opacity;
      const newOpacity = Number(currentOpacity) + 0.1;
      box.style.opacity = newOpacity;
    });
    
    boxes.appendChild(box);
  }

  container.appendChild(boxes);
}