function BankAccount(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

BankAccount.prototype.depositFunds = function(amount) {
  if (amount > 0){ 
    this.balance += amount;
  }
}
BankAccount.prototype.withdrawFunds = function(amount) {
  let sufficient = this.balance >= amount;
  let positive = amount > 0;
  if (sufficient && positive) {
    this.balance -= amount;
  } else {
    
  }
  
}

function registerAccount(name, initialDeposit) {
  return new BankAccount(name, initialDeposit);
}