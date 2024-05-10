let createEmployee = (emp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let flag = true;
      employees.push(emp);
      flag
        ? resolve("Sucessfully Inserting")
        : reject("Failure to Insert Data");
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

let result = async () => {
  await createEmployee({ id: 101, name: "Sachin", email: "sachin@gmail.com" });
  getEmployee();
};

result();
