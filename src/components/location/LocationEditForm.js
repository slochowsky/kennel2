import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
// import "./LocationForm.css"

class LocationEditForm extends Component {
    //set the initial state
    state = {
        buildingSite: "",
        notes: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedLocation = {
            id: this.props.match.params.locationId,
            buildingSite: this.state.buildingSite,
            notes: this.state.notes
        };

        LocationManager.update(editedLocation)
            .then(() => this.props.history.push("/locations"))
    }

    componentDidMount() {
        LocationManager.get(this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    buildingSite: location.buildingSite,
                    notes: location.notes,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="buildingSite"
                                value={this.state.buildingSite}
                            />
                            <label htmlFor="buildingSite">Building site name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="notes"
                                value={this.state.notes}
                            />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default LocationEditForm