// Create and append the button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", getSum);

function getSum() {
  // Select the table
  const table = document.querySelector('table');
  // Remove previous total row, if it exists
  const existingTotalRow = table.querySelector('.total-row');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Get all price elements
  const priceCells = document.querySelectorAll(".price");

  // Calculate sum
  let total = 0;
  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Create the total row
  const row = document.createElement("tr");
  row.classList.add("total-row");

  const labelCell = document.createElement("td");
  labelCell.setAttribute("colspan", 2);
  labelCell.style.textAlign = "right";
  labelCell.style.fontWeight = "bold";
  labelCell.textContent = `Total: Rs ${total}`;

  row.appendChild(labelCell);
  table.appendChild(row);
}
