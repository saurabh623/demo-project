import React from 'react';
import { Link } from 'react-router-dom';
import sofa from '../Images/sofa.jpeg';
export default class Reviews extends React.Component {
    render(){
        return(
            <div className="Details-container" id={'reviews'}>
                <div className="Details-box1">
                    <label className="Details-text">Reviews</label>
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
                <img src={sofa} alt="Sofa" style={{height:'50%',width:'30%',position:'absolute',left:"30%"}} />
                <img src={sofa} alt="Sofa" style={{height:'100%',width:'100%'}} />
                
                </div>
                <div className="Pdf-container">

                </div>
            </div>
        )
    }
}
