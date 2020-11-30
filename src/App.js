import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

console.log("::App::");

// const app = props => {
// const [ this.state., setPersonState ] = useState({
//     persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Steve', age: 41 }
//     ]
// });
//
// const [otherState, setOtherState] = useState('some other value');

class App extends Component {
    state = {
        persons: [
            { id: 'vbnc', name: 'Max', age: 28 },
            { id: 'adsf', name: 'Click Here', age: 29 },
            { id: 'gyt', name: 'Steve', age: 41 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    deleteHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // Uses ES6 Spread
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // Create a new obj so we don't mess with the immutable one
        const person = {
            ...this.state.persons[personIndex]
        }
        // This is an older method as above
        // const person = Object.assign({}, this.state.persons[personIndex]);

        // Assign the input value from the DOM
        person.name = event.target.value;

        // Create a new obj from persons
        const persons = [...this.state.persons];

        // Assign the new persons object to the state obj
        persons[personIndex] = person;

        // Set the state to the updated obj
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     color: 'white',
        //     font: 'inherit',
        //     border: '1px solid gray',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color: 'black'
        //     }
        // };

        let persons = null;
        let btnClass = '';

        if ( this.state.showPersons ) {
            persons = (
                <div >
                    { this.state.persons.map( (per, index) => {
                            return <ErrorBoundary><Person
                                clicker={ () => this.deleteHandler(index) }
                                name={ per.name }
                                age={ per.age }
                                key={ per.id }
                                changed={ (event) => this.nameChangeHandler(event, per.id) }
                            /></ErrorBoundary>
                        })
                    }
                </div>
            );

            btnClass = classes.Red;
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a react app</h1>
                <p className={ assignedClasses.join(' ') } >This is really working!</p>

                <button className={btnClass} onClick={ this.togglePersonsHandler } >
                    Toggle Persons
                </button>

                {persons}
            </div>
        );
    }
}

// export default app;
export default App;
