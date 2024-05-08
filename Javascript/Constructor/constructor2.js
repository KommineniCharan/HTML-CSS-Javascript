class Account {
  acc_Id;
  acc_Name;
  acc_Bal;
  min_Bal = 1000;

  constructor(id, name, amount) {
    this.acc_Id = id;
    this.acc_Name = name;
    this.acc_Bal = amount;
  }

  get_Bal() {
    return this.acc_Bal - this.min_Bal;
  }
}

let a1 = new Account(101, "Charan", 45000);
console.log(a1);
console.log(a1.get_Bal());
