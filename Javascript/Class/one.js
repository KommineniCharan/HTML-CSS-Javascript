class Account {
  acc_Bal;
  min_Bal = 1000;

  openAcc() {
    console.log("Account Opened Successfully");
    return this.min_Bal;
  }

  deposit(amount) {
    console.log("Deposit Amount", amount);
    return amount + this.min_Bal;
  }

  getbalance() {
    console.log("This is get balance method");
    return this.min_Bal;
  }

  withdraw(amount) {
    console.log("Withdraw Amount", amount);
    return amount - this.min_Bal;
  }
}

let a1 = new Account();

console.log(a1.openAcc());
console.log(a1.deposit(5000));
console.log(a1.getbalance());
console.log(a1.withdraw(3000));
