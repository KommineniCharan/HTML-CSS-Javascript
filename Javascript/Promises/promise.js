let createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    let flag = true;
    setTimeout(() => {
      employees.push(emp);
      flag ? resolve("Success") : reject("Failure");
    }, 1000);
  });
};

let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((emp) => {
      rows =
        rows +
        `<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        </tr>`;
    });
    document.getElementById("tdata").innerHTML = rows;
  }, 2000);
};

createEmployee({ id: 101, name: "Sachin", email: "sachin@gmail.com" })
  .then((msg) => {
    console.log(msg);
    getEmployee();
  })
  .catch((err) => {
    console.log(err);
  });
