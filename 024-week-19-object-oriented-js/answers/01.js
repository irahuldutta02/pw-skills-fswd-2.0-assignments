class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount. Please enter a positive amount.");
    }
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal amount. Please enter a positive amount.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds for withdrawal.");
    }
    this.balance -= amount;
  }

  checkBalance() {
    return this.balance;
  }
}

// Testcase
const myAccount = new BankAccount("1234567890", "Mithun S", 1000);

try {
  myAccount.deposit(-50);
} catch (error) {
  console.log(error.message); // Invalid deposit amount. Please enter a positive amount.
}

try {
  myAccount.withdraw(1500);
} catch (error) {
  console.log(error.message); // Insufficient funds for withdrawal.
}

myAccount.deposit(500); // Deposited Rs.500. New balance: Rs.1500
myAccount.withdraw(200); // Withdrawn Rs.200. New balance: Rs.1300
console.log(myAccount.checkBalance()); // Account balance for Mithun S: Rs.1300
