import React from 'react';
export default class Details extends React.Component {
    render(){
        return(
            <div className="Details-container">
                 <label className="Details-text">Details</label>
                <div className="Left-details">
                   {/* <div className="Left-details2"> */}
                   <ul className="Side-option">
                        <li className="Side-val">DETAILS</li>
                        <li className="Side-val">DESCRIPTION</li>
                        <li className="Side-val">REVIEWS</li>
                        <li className="Side-val">CUSTOM TAB</li>
                    </ul>
                   {/* </div> */}
                </div>
                <div className="Right-details">

                </div>
            </div>
        )
    }
}