import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Clock from './Person/Clock';

console.log("::App with Clock::");

//
// https://reactjs.org/docs/state-and-lifecycle.html
//
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            persons: [
                { name: 'Max', age: 28 },
                { name: 'Click Here', age: 29 },
                { name: 'Steve', age: 41 }
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // this.state.persons[0].name  = 'Maximillion'; // DON'T DO THIS!
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 27 },
                { name: 'Steven', age: 42 }
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 27 },
                { name: 'Steven', age: 41 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid gray',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div >
                    <Person
                        name={ this.state.persons[0].name }
                        age={ this.state.persons[0].age }/>
                    <Person
                        name={ this.state.persons[1].name }
                        age={ this.state.persons[1].age }
                        clicker={ this.switchNameHandler.bind( this, 'Clicker' )}
                        changed={ this.nameChangeHandler }>My Hobbies: Racing</Person>
                    <Person
                        name={ this.state.persons[2].name }
                        age={ this.state.persons[2].age }/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <p>This is really working!</p>
                <button
                    style={ style }
                    onClick={ this.togglePersonsHandler }>
                    Switch For Content
                </button>
                {persons}
                <Clock date={ this.state.date.toLocaleTimeString() }></Clock>
            </div>
        );
    }
}

export default App;
