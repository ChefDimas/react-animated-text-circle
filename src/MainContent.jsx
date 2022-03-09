import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "423-342",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "John",
        phone: "453-312",
        address: { city: "Paris" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Mad",
        phone: "422-242",
        address: { city: "New Jersey" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Lucia",
        phone: "",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Kate",
        phone: "456-348",
        address: { city: "Kiev" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="m-2 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button onClick={this.onRefreshClick} className="btn btn-info m-2">
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  // Function for click => refresh
  onRefreshClick = () => {
    this.setState({ customersCount: 8 });
  };

  // Function for phone numbers
  getPhoneToRender = (phone) => {
    return phone ? phone : <div className="bg-warning p-2">No Phone</div>;
  };

  // Function for creating new row for a new customer
  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
