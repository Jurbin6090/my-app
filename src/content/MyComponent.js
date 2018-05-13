import React, {Component} from 'react';
import '../app/App.css';

class MyComponent extends Component {
    myList;
    listItem = [];
    selectedItem;

    constructor(props) {
        super(props);

        this.myList = ['Justin', 'Michael', 'Durbin'];
    }

    remove(event){
        event.target.remove();
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.myList.push(this.input.value)
        this.forceUpdate()
    }

    selectItem=(event)=>{
        this.listItem.map(item => {
            if(item.value === event.target.innerText)
                this.selectedItem = item;
            return false
        })

        console.log(this.selectedItem)
    }

    render() {
        return (
            <div className="MyComponent">
                <form onSubmit={this.onSubmit}>
                    <input ref={input => this.input = input} type='text' id='myTextBox'></input>
                    <button>Create</button>
                </form>

                <ul>
                    {
                        this.myList.map((item, i) => {
                            return (
                                <li key={i} ref={listItem => this.listItem[i] = listItem} onClick={this.selectItem}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MyComponent;
