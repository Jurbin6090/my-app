import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends Component {

    constructor(props) {
        super(props);

        console.log('Title Initialized')
    }

    render() {
        return (
            <div className={"App-header"}>
                <img alt='React Icon' className={'App-logo'} src={logo}></img>
                <h1>My React App</h1>
            </div>
        );
    }
}

export default Title;
