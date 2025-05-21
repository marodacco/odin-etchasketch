// Get the container
const container = document.querySelector("#container");

// Create 16 rows
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row")

  // Add 16 boxes in a row
  for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
  }

  container.appendChild(row);
}



