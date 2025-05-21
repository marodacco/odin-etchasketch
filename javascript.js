// Get the container
const container = document.querySelector("#container");

// Create 16 rows
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("class", "row");

  // Add 16 boxes in a row
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");

    // Add event listner
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "green";
    });

    row.appendChild(box);
  }

  container.appendChild(row);
}



