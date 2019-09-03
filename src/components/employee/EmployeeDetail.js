import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeDetail.css'

class EmployeeDetail extends Component {

    state = {
        name: "",
        title: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("EmployeeDetail: ComponentDidMount");
        //get(id) from EmployeeManager and hang on to that data; put it into state
        EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                title: employee.title,
                loadingStatus: false
            });
        });
    }
    
    handleDelete = () => {
        //invoke the delete function in EmployeeManger and re-direct to the employee list.
        this.setState({loadingStatus: true})
        EmployeeManager.delete(this.props.employeeId)
        .then(() => this.props.history.push("/employees"))
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: {this.state.name}</h3>
            <p>Title: {this.state.title}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default EmployeeDetail;