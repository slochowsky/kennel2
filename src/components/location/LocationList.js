import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    componentDidMount() {
        console.log("LOCATION LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }
    deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => {
          LocationManager.getAll()
          .then((newLocations) => {
            this.setState({
                locations: newLocations
            })
          })
        })
      }

    render() {
        console.log("LocationList: Render");

        return(
          <React.Fragment>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/locations/new") }}>
                    Admit Location
                </button>
            </section>
            <div className="container-cards">
              {this.state.locations.map(location =>
                <LocationCard
                  key={location.id}
                  locationObj={location}
                  deleteLocation={this.deleteLocation}
                  {...this.props}
                />
              )}
            </div>
            </React.Fragment>
          )
        }
}

export default LocationList;