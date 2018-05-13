import React, {Component} from 'react';
import JustinList from "./JustinList";
import List from "./List";
import MyComponent from "./MyComponent";

class Content extends Component {
    render() {
        return (
            <div className={"Content"}>
                <JustinList/>
                <List/>
                <MyComponent/>
            </div>
        );
    }
}

export default Content;
