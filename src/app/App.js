import React, {Component} from 'react';
import './App.css';
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Content from "../content/Content";

class App extends Component {
    render() {
        return (
            <div className="mainpage">
                <div>
                    <Header/>
                </div>
                <div>
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        );
    }
}

export default App;
