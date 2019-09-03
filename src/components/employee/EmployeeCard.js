import React, { Component } from 'react'
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content"></div>
          <div>
            <h2>Employee<br />
              <small></small>
            </h2>
          </div>
          <h3>Name: {this.props.employee.name}</h3>
          <p>Title: {this.props.employee.title}</p>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
          <div>
          </div>
        </div>
      );
    }
  }
  
export default EmployeeCard;