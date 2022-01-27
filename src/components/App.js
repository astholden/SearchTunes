import React, {Component} from 'react';
import Display from './Display';


function getInitialState() {

    mode:"development"
    return {
        searchInfo:[],
        searched: false,
        play: false,
        audio: "url",
        value : ""
    }

}

class App extends Component {


    constructor(props) {
        super(props);
        this.state = getInitialState()
        this.handleCheck = this.handleCheck.bind(this)
        this.changeState = this.changeState.bind(this)
    };

    componentDidMount() {
        console.log(this.state)    
    }

    changeState () {
        this.setState({audio : props.song.previewUrl})
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
            this.setState({searchInfo : res, searched: true})
            console.log("state", this.state)
        })
    }





render () {
    const output = this.state.searchInfo.res
    console.log("this?", output)
        return (
            <div id='main'>
                <h1>Testing the React App</h1>
                <form onSubmit={this.handleCheck}>
                    <input id="search-field" onChange={(e) => this.setState({ value : e.target.value})}></input>
                    <button id="search">Search</button>
                </form>
                {this.state.searched && <Display info={output} />}
            </div>
        )
    }
};

export default App;





