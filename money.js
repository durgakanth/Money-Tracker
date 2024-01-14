javascript
// Get the transaction form element
const transactionForm = document.getElementById('transaction-form');
// Get the transaction list element
const transactionList = document.getElementById('transaction-list');

// Handle form submission
transactionForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  // Clear input fields
  descriptionInput.value = '';
  amountInput.value = '';

  // Validate input values
  if (description.trim() === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  // Create transaction element
  const transaction = document.createElement('li');
  transaction.textContent = `${description} ($${amount.toFixed(2)})`;

  // Append transaction to transaction list
  transactionList.appendChild(transaction);
});