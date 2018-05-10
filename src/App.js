import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
    myList;
    inputValue;
    props;
    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.updateInputValue = this.updateInputValue.bind(this)

        this.myList = ['Justin', 'Michael', 'Durbin'];
    }

    remove(event){
        event.target.remove();
    }

    onSubmit(app){
        console.log('create button clicked');
        console.log(app);
        //this.myList.push(this.inputValue);
    }

    // updateInputValue(event){
    //     event.preventDefault();
    //     console.log('update');
    //     console.log(event.target.value);
    //     //this.inputValue = event.target.value;
    // }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}>
                    <input ref={input => this.input = input} type='text' id='myTextBox'></input>
                    <button>Create</button>
                </form>

                <ul>
                    {
                        this.myList.map(item => {
                            return (
                                <li key={item}><button onClick={this.remove}>{item}</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default App;
