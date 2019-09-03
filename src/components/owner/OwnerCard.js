import React, { Component } from 'react'
import { Link } from "react-router-dom";

class OwnerCard extends Component {
    render() { 
      return (
        <div>
          <div>          
            <h3>Name: {this.props.owner.name}</h3>
            <p>{this.props.owner.phoneNumber}</p>
            <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
            <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Discharge</button>
          </div>
        </div>
      );
    }
  }
  
  export default OwnerCard;