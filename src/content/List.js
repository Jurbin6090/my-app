import classNames from 'classnames';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class List extends Component {

    // Constructor to set our initial state
    constructor(props) {
        super(props);
        this.state = {
            items: [ ],
            tempInput:'',
            completed: [ ],
            deleted:[ ]
        };
    }

    //look at render method, on click adds className "completed"
    markCompleted = (index) => {
        this.setState((prevState, props) => {
            let completed = prevState.completed;
            completed[index] = !completed[index];
            return {
                completed: completed
            };
        });
    }

    // with " ... " spread operator it merges 2 arrays, items and completed. At first you're setting their array
    //indexes to false, this is how you give them a "selector" like JQUERY but with indexes.
    addItem = () => {
        this.setState((prevState, props) => {
            return {
                items: [...prevState.items, this.state.tempInput],
                completed: [...prevState.completed, false],
                tempInput: ''
            };
        });
    }

    //deleted is the completed array with boolean values - trueChecker is setup to match only true values
    //here you need to remove from both arrays and splice through
    deleteItem = () => {
        this.setState((prevState) =>{

            let deleted = this.state.completed;
            let trueChecker = deleted.indexOf(true);

            for(var i = 0; i<=deleted.length; i++){
                if(deleted[i] === true){
                    deleted.splice(trueChecker,1)
                    prevState.items.splice(i,1);
                    i=-1;
                }
            }
            // prevState.items = prevState.deleted
            return {
                items:prevState.items
            }
        })
    }
    handleChange = (event) => {
        this.setState({tempInput: event.target.value});
    }

    render() {
        return (
            <div className="List">
                <header className="App-header">
                    <h1 className="App-title">TODO List</h1>
                </header>
                <input value={this.state.tempInput} onChange={this.handleChange} /><button onClick={this.addItem}>Add Item</button>

                <ul className="list-group">
                    {this.state.items.map((item, index) =>
                        <li key={index} onClick={() => this.markCompleted(index)} className={classNames({completed: this.state.completed[index]})}>{item}</li>
                    )}
                </ul>
                <button onClick={this.deleteItem}>Delete Item</button>
            </div>
        );
    }
}

export default List;