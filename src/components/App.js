import React, {Component} from 'react';


function getInitialState() {

    return {
        hello: "hello",
        howAreYou : "Good",
        value : ""
    }

}

const check = (e) => {
    e.preventDefault();
    console.log(this.state.value)
    // fetch('https://itunes.apple.com/search?term=jack+johnson')
    // .then((data) => data.json())
    // .then((data) => {
    //     console.log(data)
    // })
}

class App extends Component {


    constructor(props) {
        super(props);
        this.state = getInitialState()
    };





render () {
    const change = this.state.hello
        return (
            <div>
                <form onSubmit={console.log(change)}>
                    <input id="search-field" onChange={(e) => this.setState({ value : e.target.value})}></input>
                    <button id="search">Search</button>
                </form>
            </div>
        )
    }
};

export default App;





