import React, { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "423-342" },
      { id: 2, name: "John", phone: "453-312" },
      { id: 3, name: "Mad", phone: "422-242" },
      { id: 4, name: "Lucia", phone: "223-349" },
      { id: 5, name: "Kate", phone: "456-348" },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-2 p-1">
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
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
  // Function for click => refresh
  onRefreshClick = () => {
    this.setState({ customersCount: 8 });
  };
}

export default MainContent;
