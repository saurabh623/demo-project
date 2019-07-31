import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import { NavHashLink as NavLink } from 'react-router-hash-link';
export default class Header extends React.Component{

    render(){
        return(
            <header className="App-header">
                <div className="Left-container">
                    <img src={logo} style={{height:"30px",width:"50px"}} />
                </div>
                <div className="Right-container">
                    <ul className="Ul">
                        <li className="Li"><NavLink to='/#details' className="Nav-val">Bathroom</NavLink></li>
                        <li className="Li"><NavLink exact to="/#description" className="Nav-val">Living Room</NavLink></li>
                        <li className="Li"><NavLink exact to="/#reviews" className="Nav-val">Bath Room</NavLink></li>
                        <li className="Li"><NavLink exact to="/#customTab" className="Nav-val">Office</NavLink></li>
                        <li className="Li"><NavLink exact to="/#product" className="Nav-val">Kitchen</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}