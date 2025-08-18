// Create button dynamically
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", getSum);

function getSum() {
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    const val = parseFloat(cell.textContent);
    if (!isNaN(val)) total += val;
  });

  // Show total in #ans (for Cypress test)
  const ans = document.getElementById("ans");
  ans.textContent = total;
}
 