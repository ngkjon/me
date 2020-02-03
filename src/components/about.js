import React, { Component } from 'react'
import Typing from 'react-typing-animation';


export default class About extends Component {
    render() {
        return (
            <div id='about' className="txt">
                <Typing loop={false}>
                    <Typing.Delay ms={500}/>
                    <Typing.Speed ms={20}/>
                    <p className="txt">I am a Systems Design Engineering student</p>
                    <Typing.Backspace delay={500} count={42}/>
                    <Typing.Reset count={1}/>
                    <p className="txt">with a passion for UI/UX design<Typing.Backspace delay={500} count={12}/>DevOps and Cloud Infrastructure</p>
                    {/* <Typing.Backspace delay={500} count={50}/>
                    <Typing.Reset count={3}/> */}
                </Typing>
            </div>
            
        )
    }
}