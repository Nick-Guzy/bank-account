function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.depositFunds = function(amount) {
  this.balance += amount;
}

BankAccount.prototype.withdrawFunds = function(amount) {
  this.balance -= amount;
}

function registerAccount(name, initialDeposit) {
  return new BankAccount(name, initialDeposit);
}