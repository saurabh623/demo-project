import React from 'react';
import { Link } from 'react-router-dom';
import sofa from '../Images/sofa.jpeg';

export default class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cartVal:0,
            colors:[{
                "id":1,
                "color":"red"
            },{
                "id":2,
                "color":"black"
            },{
                "id":3,
                "color":"blue"
            }]
        }
    }
    render(){
        return(
            <div className="Details-container" id={"details"}>
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
                <img src={sofa} alt="Sofa" style={{ width: "40%",position: "absolute",left: "30%",top: "32%"}} />
                    {/* <div className="Box3-left">
                       
                    </div> */}
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
                            <label className="Initial-prize"><del>$160</del></label>
                            <label className="Box3-des">$149</label>
                        </div>
                        <div className="warranty-section">
                            <hr className="Under-line" />
                             <label className="assembly">ASSEMBLY: Carpenter Assembly</label>
                             <label className="assembly warrenty">WARRANTY: 12 Month's Warranty</label>
                             <hr className="Under-line" />
                        </div>
                        <div className="Color-container">
                            <div className="Color-box1"></div>
                            <label className="Delivery">SAME DAY DISPATCH</label>
                            <div className="Color-box1"></div>
                            <label className="Delivery">EASY 30-DAYS RETURN POLICY</label>
                        </div>
                        <div className="Color-container">
                            <div className="Color-box1"></div>
                            <div className="Color-box2"></div>
                            <div className="Color-box3"></div>
                        </div>
                        <div className="Cart-val">
                            <button onClick={()=> this.state.cartVal>0 && this.setState({cartVal: this.state.cartVal -1})}>-</button>
                           <div className="Display-cart">
                           <label>{this.state.cartVal}</label>
                           </div>
                            <button onClick={()=>  this.setState({cartVal: this.state.cartVal +1})}>+</button>
                            <button className="Addcart-container">
                                <label className="Add-cart">Add to cart</label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
