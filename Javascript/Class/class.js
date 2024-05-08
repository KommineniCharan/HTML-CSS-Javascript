class Account {
  acc_Bal;
  min_Bal = 1000;

  openAcc() {
    return "Account Opened Successfully";
  }

  deposit(amount) {
    console.log("Deposit Amount", amount);
    return amount + this.min_Bal;
  }

  getbalance() {
    return "This is get balance method";
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
