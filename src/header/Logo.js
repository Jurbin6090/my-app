import React, {Component} from 'react';
// import '../app/App.css';
import logo from './logo.svg';

class Logo extends Component {
    render() {
        return (
            <div className={"Logo"}>
                <img style={{height:100, width:100}} alt='React Icon' className={'Logo'} src={logo}></img>
            </div>
        );
    }
}

export default Logo;
