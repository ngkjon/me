import React, { Component } from 'react'
import Social from './social';
import About from './about';



export default class Main extends Component {
    render() {
        return (
            <div className="page" id="main">
                {/* <Typing className="txt"> */}
                    <h1 className="txt title">Jonathan Ng</h1>
                {/* </Typing> */}
                <Social/>
                <About/>
            </div>
            
        )
    }
}