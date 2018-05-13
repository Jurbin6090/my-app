import React, {Component} from 'react';
import logo from './logo.svg';

class Icon extends Component {
    render() {
        return (
            <div className={"Icon"}>
                <img style={{height:100, width:100}} alt='React Icon' className={'App-logo'} src={logo}></img>
            </div>
        );
    }
}

export default Icon;
