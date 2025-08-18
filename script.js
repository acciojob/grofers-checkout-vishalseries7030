// Create button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", getSum);

function getSum() {
  const table = document.getElementById("grocery-list");
  
  // Remove existing total row if any
  const existing = table.querySelector(".total-row");
  if (existing) existing.remove();

  // Collect all prices
  const priceCells = table.querySelectorAll(".price");
  let total = 0;
  
  priceCells.forEach(cell => {
    const val = parseFloat(cell.textContent);
    if (!isNaN(val)) total += val;
  });

  // Create a new row for total
  const row = document.createElement("tr");
  row.classList.add("total-row");
  const cell = document.createElement("td");
  cell.setAttribute("colspan", 2);
  cell.textContent = `Total Price: Rs ${total}`;

  row.appendChild(cell);
  table.appendChild(row);
}
