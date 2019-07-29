import React from 'react';
import { Link } from 'react-router-dom';

export default class CustomTab extends React.Component {
    render(){
        return(
            <div className="Details-container">
                <div className="Details-box1">
                    <label className="Details-text">Custom</label>
                </div>
                <div className="Details-box2">
                <ul className="Side-option">
                        <Link to="/Details" className="Side-val">DETAILS</Link>
                        <Link to="/Description" className="Side-val">DESCRIPTION</Link>
                        <Link to="/Reviews" className="Side-val">REVIEWS</Link>
                        <Link to="/CustomTab" className="Side-val">CUSTOM TAB</Link>
                    </ul>
                </div>
                <div className="Details-box3">

                </div>
            </div>
        )
    }
}
