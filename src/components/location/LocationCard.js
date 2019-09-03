import React, { Component } from 'react'
import { Link } from "react-router-dom";

class LocationCard extends Component {
    render() {
        console.log("hello world") 
      return (
        <div>
          <div>          
            <address>
              <br />
            </address>
            <h3>Building site: {this.props.locationObj.buildingSite}</h3>
            <p>{this.props.locationObj.notes}</p>
            <Link to={`/locations/${this.props.locationObj.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.locationObj.id)}>Discharge</button>
          </div>
        </div>
      );
    }
  }
  
  export default LocationCard;