import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
  state = {

  }

  render () {
    return (
        <div className="AddPerson">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Age" />

              <button onClick={this.props.personAdded}>Add Person</button>
        </div>
    )
  }

};

export default AddPerson;