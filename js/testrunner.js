const defaultOptions = {
  failuresOnly: false,
  fancy: true,
  keepConsole: false,
}

function runTests(testsObject=tests, options=defaultOptions) {
  let startedAt = performance.now();
  !options.keepConsole && console.clear();
  let failures = 0;
  console.log(`%cTESTING ${Object.keys(testsObject).length} FUNCTIONS...`, options.fancy && `color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem 1rem;`);
  for (functionName in testsObject) {
    let totalTests = testsObject[functionName].length;
    !options.failuresOnly && console.warn(`%c ${functionName}: ${totalTests} TEST${totalTests === 1 ? '' : 'S'}`, options.fancy && `font-size: 1.1rem`);
    let passed = 0;
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expected) {
        !options.failuresOnly && console.log(`%c${functionName}: ${testEntry.description} PASSED `, options.fancy && `padding: 0.5rem; color: white; background-color: #00aa00aa`);
        passed++;
      } else {
        failures++;
        console.error(`%c${functionName}: ${testEntry.description} FAILED `, options.fancy && `color: white; background-color: #aa0000bb; font-size: 1rem;`);
        console.warn(`%c expected output: ${testEntry.expected} `, options.fancy && `font-size: 1rem`);
        console.warn(`%c actual output: ${testResult} `, options.fancy && `font-size: 1rem`);
      };
    })
    if (passed === totalTests) {
      !options.failuresOnly && console.log(`%c ${passed}/${totalTests} PASSED FOR ${functionName} `, options.fancy && `color: white; background-color: #00aa00; font-size: 1.1rem; padding: 0.1rem`);
    } else {
      !options.failuresOnly && console.log(`%c ${passed}/${totalTests} PASSED FOR ${functionName} `, options.fancy && `color: white; background-color: #aa0000bb; font-size: 1.1rem; padding: 0.1rem`);
    }
  }
  if (!failures) {
    console.log(`%cALL TESTS PASSED!                       `, options.fancy && `color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem 1rem;`);
  } else {
    console.error(`%c ${failures} TEST${failures === 1 ? `` : `S`} FAILED.             `, options.fancy && `color: #eee; background-color: #aa0000; font-size: 1.1rem; padding: 0.5rem 1rem;`)
  }
  !options.failuresOnly && console.log(`took ${parseFloat((performance.now() - startedAt).toFixed(3))} ms`)
}

tests = {
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
      expected: 0
    },
  ],
}