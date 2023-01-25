//Business logic
function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.depositFunds = function (amount) {
  if (amount > 0) {
    this.balance += amount;
  } else {
    displayErrorMessage("INVALID DEPOSIT AMOUNT", 1200);
  }
}
BankAccount.prototype.withdrawFunds = function (amount) {
  let sufficient = this.balance >= amount;
  let positive = amount > 0;
  if (sufficient && positive) {
    this.balance -= amount;
  } else {
    let errorMessage = '';
    if (!sufficient) {
      errorMessage = 'INSUFFICIENT FUNDS'
    } else {
      errorMessage = 'INVALID WITHDRAWAL AMOUNT'
    }
    displayErrorMessage(errorMessage, 1200);
  }

}

let currentAccount;

function registerAccount(name, initialDeposit) {
  return new BankAccount(name, initialDeposit);
}

//User logic

window.addEventListener('load', function () {
  document.getElementById('register-form').addEventListener('submit', handleRegisterClick);
  document.getElementById('deposit-withdraw-form').addEventListener('submit', handleTransactionClick);
  document.getElementById('transaction-select').addEventListener("change", handleTransactionChange)
});

function handleRegisterClick(e) {
  e.preventDefault()
  let name = document.getElementById("name-input").value
  let balance = parseInt(document.getElementById("balance-input").value)
  currentAccount = registerAccount(name, balance)
  document.getElementById("balance-display").innerText = "$" + balance
  document.getElementById("user-name-display").innerText = name;

  document.getElementById("name-input").value = null;
  document.getElementById("balance-input").value = null;

  document.querySelector("#register-form > button").disabled = true;
  document.getElementById("name-input").disabled = true;
  document.getElementById("balance-input").disabled = true;

  document.querySelector("#deposit-withdraw-form > button").disabled = false;
  document.getElementById("amount-input").disabled = false;
  document.getElementById("transaction-select").disabled = false;

  displayErrorMessage("ACCOUNT CREATED!", 1200, true)
}

function handleTransactionClick(e) {
  e.preventDefault()
  let type = document.getElementById("transaction-select").value
  let amount = parseInt(document.getElementById("amount-input").value)
  if (type === "deposit") {
    currentAccount.depositFunds(amount)
  } else {
    currentAccount.withdrawFunds(amount)
  }
  document.getElementById("balance-display").innerText = "$" + currentAccount.balance
}

function handleTransactionChange(e) {
  document.querySelector("#deposit-withdraw-form > button").innerText = e.target.value;
}

function displayErrorMessage(messageText, duration, green) {
  let errorMessage = document.getElementById('error-message');
  errorMessage.innerText = messageText;
  errorMessage.classList.add('showing');
  if (green) {
    errorMessage.classList.add('green-text');
  } else {
    errorMessage.classList.remove('green-text');
  }
  setTimeout(function () {
    errorMessage.classList.remove('showing');
  }, duration);
}


