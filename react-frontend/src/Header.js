import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className = "headerSection">
                    <div className="logo"></div>
                    
                </div>
            
                <div className ="searchSection">
                    <input type="text" className="search_bar"/>
                    <button type="button" className ="searchButton">제출
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;