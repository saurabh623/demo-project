import React from 'react';
import { Link } from 'react-router-dom';
export default class Details extends React.Component {
    render(){
        return(
            <div className="Details-container">
                <div className="Details-box1">
                    <label className="Details-text">Details</label>
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
                    <div className="Box3-left"></div>
                    <div className="Box3-right">
                    <label className="Box3-des">Nudie Expendable</label>
                    <label className="Box3-des">sofa for 3 person</label>
                        <div>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star unchecked"></span>
                            <span className="fa fa-star unchecked"></span>
                            <label className="Count-rating">(23)</label>
                        </div>
                        <div className="price">
                            <label className="Initial-prize">$169</label>
                            <label className="Box3-des">$169</label>
                        </div>
                        <div className="warranty-section">
                            <hr className="Under-line" />
                             <label className="assembly">ASSEMBLY: Carpenter Assembly</label>
                             <label className="assembly warrenty">WARRANTY: 12 Month's Warranty</label>
                             <hr className="Under-line" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
