## Tests

```
Describe: resgisterAccount

test: "Establish bank account with arguments Name and initial deposit"
code: 
  let bobAccount = registerAccount('Bob Johnson', 2300);
  console.log(bobAccount);

expectedOutput: { name: 'Bob Johnson', balance: 2300 }