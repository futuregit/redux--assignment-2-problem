import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }



    render () {
        return (
            <div>

                <AddPerson personAdded={this.props.onPersonHandler} />
                {this.props.pers.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    pers: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersonHandler: (name, age) => dispatch({type: 'ADD_PERSON', personData:{name:name, age:age}}),
    onPersonDeleteHandler: (personId) => dispatch({type: 'DELETE_PERSON', value: personId})

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);