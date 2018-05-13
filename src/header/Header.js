import React, {Component} from 'react';
// import '../app/App.css';
import Title from "./Title";
import Logo from "./Logo";

class Header extends Component {
    render() {
        return (
            <div className={"Header"}>
                <Logo/>
                <Title/>
            </div>
        );
    }
}

export default Header;
