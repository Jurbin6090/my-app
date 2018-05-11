import React, {Component} from 'react';
import './Title.css';
import MyComponent from "./MyComponent";
import Title from "./Title"
import List from "./List";
import JustinList from "./JustinList";

class App extends Component {

    constructor(props) {
        super(props);

        console.log('App Initialized')
    }

    render() {
        return (
            <div>
                {/*<Title/>*/}
                {/*<MyComponent/>*/}
                {/*<List/>*/}
                <JustinList/>
            </div>
        );
    }
}

export default App;
