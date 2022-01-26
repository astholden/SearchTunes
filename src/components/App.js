import React, {Component} from 'react';


function getInitialState() {

    return {
        hello: "hello",
        howAreYou : "Good"
    }

}

const check = (e) => {
    e.preventDefault();
    console.log(value)
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
        this.handleChange = this.handleChange.bind(this)
    };



handleChange = (event) => {
    console.log(event.target.value)
    console.log('working')
    this.setState({test: "test"})
    console.log(state)
}



render () {

        return (
            <div>
                <form onSubmit={check}>
                    <input id="search-field" onChange={this.handleChange}></input>
                    <button id="search">Search</button>
                </form>
            </div>
        )
    }
};

export default App;





