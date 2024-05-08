class Address {
  constructor(hno, area, city, state) {
    console.log("Address Class Constructor");
    this.hno = hno;
    this.area = area;
    this.city = city;
    this.state = state;
  }
}

class Savings {
  constructor(acc_Id, acc_Name, acc_Bal, address) {
    console.log("Child Class Constructor");
    this.acc_Id = acc_Id;
    this.acc_Name = acc_Name;
    this.acc_Bal = acc_Bal;
    this.address = address;
  }
}

let c1 = new Savings(
  101,
  "Charan",
  45000,
  new Address(96, "Hebbal", "Bangalore", "Karnataka")
);
console.log(c1);

module.exports = Address;
