const Address = require("./Bank");

class CreditCard {
  constructor(cc_Id, cc_Name, address) {
    this.cc_Id = cc_Id;
    this.cc_Name = cc_Name;
    this.address = address;
  }
}

let cc1 = new CreditCard(
  101,
  "Charan",
  new Address(96, "Hebbal", "Bangalore", "Karnataka")
);

console.log(cc1);
