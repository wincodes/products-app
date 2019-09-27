import React from 'react'

class Cheers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Click Me For Your Message'
        }

        this.sayCheers = this.sayCheers.bind(this);
    }
    sayCheers(){
        this.setState({
            message: 'cheers'
        })
    }
    render(){
        return(
            <button onClick={this.sayCheers}>
                {this.state.message}
            </button>
        );
    }

}

export default Cheers