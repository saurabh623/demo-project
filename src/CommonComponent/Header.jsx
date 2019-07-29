import React from 'react';
import '../App.css';
import {logo} from '../logo.svg'
export default class Header extends React.Component{

    render(){
        return(
            <header className="App-header">
                <div className="Left-container">
                    <image src={logo} />
                </div>
                <div className="Right-container">
                    <ul className="Ul">
                        <li className="Li">Bed Room</li>
                        <li className="Li">Living Room</li>
                        <li className="Li">Bath Room</li>
                        <li className="Li">Office</li>
                        <li className="Li">Kitchen</li>
                    </ul>
                    
                </div>
            </header>
        )
    }
}