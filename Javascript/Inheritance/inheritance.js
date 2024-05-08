class Account {
  constructor(id, name) {
    console.log("This is my Parent Class Constructor");
    this.id = id;
    this.name = name;
  }
}

class Savings extends Account {
  constructor(id, name, amount) {
    super(id, name);
    console.log("This is my Child Class Constructor");
    this.id = id;
    this.name = name;
    this.amount = amount;
  }
  //   get() {
  //     console.log("This is my Get Method in Child Class");
  //   }
}

let a1 = new Savings(101, "Mahesh", 6000);
console.log(a1);
