import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
// import './LocationForm.css'

class LocationForm extends Component {
    state = {
        buildingSite: "",
        notes: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location     object, invoke the LocationManager post method, and redirect to the full location list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.buildingSite === "" || this.state.notes === "") {
            window.alert("Please input an location notes and buildingSite");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                buildingSite: this.state.buildingSite,
                notes: this.state.notes,
            };

            // Create the animal and redirect user to animal list
            LocationManager.post(location)
                .then(() => this.props.history.push("/locations"));
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
                                id="buildingSite"
                                placeholder="building Site"
                            />
                            <label htmlFor="Building Site">Building Site</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes"
                            />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm;