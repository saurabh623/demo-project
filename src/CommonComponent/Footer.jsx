import React from 'react';
import  '../logo.svg';

export default class Footer extends React.Component{

    render(){
        return(
            <footer className="App-footer">
                <div className="Top-container">
                    <label className="News-letter">Grab Our Newsletter</label>
                    <hr className="Under-line" />
                </div>
                <div style={{marginTop:'5%'}}></div>
                <hr className="Full-line" />
                <div className="Bottom-container">
                <div className="Left-side">
                    <ul className="Ul">
                        <li className="List">Bed Room</li>
                        <li className="List">Living Room</li>
                        <li className="List">Bath Room</li>
                        <li className="List">Office</li>
                        <li className="List">Kitchen</li>
                    </ul>
                </div>
                    <div className="Right-side">
                        <div className="List">
                            <span>
                                <i className="fa fa-heart"></i>
                            </span>
                        </div>
                        <div className="List">
                            <span>
                                <i className="fa fa-car"></i>
                            </span>
                        </div>
                        <div className="List">
                            <span>
                                <i className="fa fa-file"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}