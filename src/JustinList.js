import classNames from 'classnames';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class JustinList extends Component {
    items
    completed
    deleted

    constructor(props) {
        super(props);

        this.items = []
        this.completed = []
        this.deleted = []
    }

    markCompleted = (index) => {
        this.completed[index] = !this.completed[index]
        this.forceUpdate()
    }

    addItem = () => {
        this.items.push(this.input.value)
        this.completed.push(false)
        this.input.value = ''
        this.forceUpdate()
    }

    deleteItem = () => {
        for(var i = 0; i<=this.completed.length; i++){
            if(this.completed[i] === true){
                this.completed.splice(this.completed.indexOf(true),1)
                this.items.splice(i,1);
                i=-1;
            }
        }
        this.forceUpdate()
    }

    render() {
        return (
            <div className="JustinList">
                <header className="App-header">
                    <h1 className="App-title">TODO List</h1>
                </header>
                <input ref={input => this.input = input} /><button onClick={this.addItem}>Add Item</button>

                <ul className="list-group">
                    {this.items.map((item, index) =>
                        <li key={index} onClick={() => this.markCompleted(index)} className={classNames({completed: this.completed[index]})}>{item}</li>
                    )}
                </ul>
                <button onClick={this.deleteItem}>Delete Item</button>
            </div>
        );
    }
}

export default JustinList;