import React, {Component} from 'react';


function getInitialState() {

    mode:"development"
    return {
        hello: "hello",
        howAreYou : "Good",
        value : ""
    }

}

class App extends Component {


    constructor(props) {
        super(props);
        this.state = getInitialState()
        this.handleCheck = this.handleCheck.bind(this)
    };

    componentDidMount() {
        console.log(this.state)
    }

    handleCheck(e) {
        e.preventDefault();
        console.log(this.state.value);
        fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({keyword : this.state.value})   
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('success!')
            console.log("res", res)
        })
    }





render () {
        return (
            <div>
                <form onSubmit={this.handleCheck}>
                    <input id="search-field" onChange={(e) => this.setState({ value : e.target.value})}></input>
                    <button id="search">Search</button>
                </form>
            </div>
        )
    }
};

export default App;





