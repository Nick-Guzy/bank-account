## Tests

```
'registerAccount': [
  {
    description: "It instantiates a BankAccount object with 'name' as inputted name and 'balance' as initial deposit",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      return testAccount.name + ' ' + testAccount.balance;
    },
    expected: 'Bob Johnson 2300'
  },
],
  
'BankAccount.prototype.depositFunds': [
  {
    description: "It adds the inputted amount to a BankAccount's 'balance' property",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.depositFunds(1000);
      return testAccount.balance;
    },
    expected: 3300
  },
  {
    description: "It will not deposit funds if inputted amount is less than zero",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.depositFunds(-5);
      return testAccount.balance;
    },
    expected: 2300
  },
  {
    description: "It will not deposit funds if inputted amount is zero",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.depositFunds(0);
      return testAccount.balance;
    },
    expected: 2300
  },
],

'BankAccount.prototype.withdrawFunds': [
  {
    description: "It subtracts the inputted amount from a BankAccount's 'balance' property",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.withdrawFunds(1000);
      return testAccount.balance;
    },
    expected: 1300
  },
  {
    description: "It will not withdraw more than the user has in their balance",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.withdrawFunds(3000);
      return testAccount.balance;
    },
    expected: 2300
  },
  {
    description: "It will not withdraw funds if inputted amount is less than zero",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.withdrawFunds(-5);
      return testAccount.balance;
    },
    expected: 2300
  },
  {
    description: "It will not withdraw funds if inputted amount is zero",
    code: () => {
      let testAccount = registerAccount('Bob Johnson', 2300);
      testAccount.withdrawFunds(0);
      return testAccount.balance;
    },
    expected: 2300
  },
],
```