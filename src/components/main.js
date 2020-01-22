import React, { Component } from 'react'
import Social from './social';
import Typing from 'react-typing-animation';


export default class Main extends Component {
    render() {
        return (
            <div className="page" id="main">
                {/* <Typing className="txt"> */}
                    <h1 className="txt title">Jon. Ng</h1>
                {/* </Typing> */}
                <Social></Social>
                <Typing>
                    <Typing.Delay ms={1000}/>
                    <Typing.Speed ms={20} />
                    <p className="txt">Hi, my name is Jonathan, I am a student studying Systems Design Engineering
                    <Typing.Backspace delay={1000} count={45} />
                    passionate about UI/UX design
                    <Typing.Backspace delay={1000} count={12} />
                    DevOps
                    </p>
                    
                    
                </Typing>
            </div>
            
        )
    }
}