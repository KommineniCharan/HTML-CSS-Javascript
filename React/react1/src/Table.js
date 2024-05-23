import React from "react";

let Table = () => {
  return (
    <React.Fragment>
      <h1>Bootstrap Table</h1>
      <table className="table table-responsive table-primary">
        <thead>
          <tr className="table-danger">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-success">
            <td>101</td>
            <td>Sachin</td>
            <td>Sachin@gmail.com</td>
          </tr>
          <tr className="table-warning">
            <td>102</td>
            <td>Bhoomika</td>
            <td>Bhoomika@gmail.com</td>
          </tr>
          <tr className="table-info">
            <td>103</td>
            <td>Aravind</td>
            <td>arvind@gmail.com</td>
          </tr>
          <tr className="table-dark">
            <td>104</td>
            <td>Arun</td>
            <td>arun@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
