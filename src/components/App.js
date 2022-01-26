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
        console.log(this.state);
        fetch('https://api.deezer.com/artist/27', 
        {
            method: 'GET',
            headers:{
                'content-type': 'application/json'
            },
            // mode: 'no-cors',
            // redirect: 'follow'
        }).then((data) => {
            console.log('part way')
            console.log(data)
            return data.json()
        })
        .then((data) => {
            console.log('success!')
            console.log(data)
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





