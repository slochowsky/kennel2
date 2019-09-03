import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
// import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        title: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.title === "") {
            window.alert("Please input an employee name and title");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
                title: this.state.title,
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
                .then(() => this.props.history.push("/employees"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                placeholder="Employee name"
                            />
                            <label htmlFor="employeeName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="Title"
                            />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm