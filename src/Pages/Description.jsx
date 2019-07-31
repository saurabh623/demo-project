import React from 'react';
import { Link } from 'react-router-dom';
import sofa from '../Images/sofa.jpeg';
export default class Description extends React.Component{
    render(){
        return(
            <div className="Details-container" id={'description'}>
                <div className="Details-box1">
                    <label className="Details-text">Description</label>
                </div>
                <div className="Details-box2">
                <ul className="Side-option">
                        <Link to="/Details" className="Side-val">DETAILS</Link>
                        {/* <Link to="/Description" className="Side-val">DESCRIPTION</Link> */}
                        <Link to="/Reviews" className="Side-val">REVIEWS</Link>
                        <Link to="/CustomTab" className="Side-val">CUSTOM TAB</Link>
                    </ul>
                </div>
                <div className="Heading-text">
                    <label>At vero eso et accusamus et iusto odio dignissimo</label>
                </div>
                <div className="Details-box3">
                <img src={sofa} alt="Sofa" style={{height:'100%',width:'100%'}} />
                </div>
            </div>
        )
    }
}