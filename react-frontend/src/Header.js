import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div `
    width:100%;
    height:100px;
    /*padding:50px;*/
    background-color: #ff6f61;
`;

const SearchSection = styled.div `
    position: relative;
    left:50%;
    transform: translateX(-50%);
    margin-top:1%;
    margin-bottom:1%;
    width:30%;
    border:2px solid #f2f2f2;
    border-radius:100px;
    background-color: #f2f2f2;
`;

const SearchBar = styled.input `
    border:none;
    background-color: #f2f2f2;
    padding:1% 25%;
    margin-left:3%;
    margin-top:-3%;
`;

const SearchButton = styled.button `
    background-color: #f2f2f2;
    border: transparent;
    margin-top:1%;
`;

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderSection className = "headerSection">
                    <div className="logo"></div>
                    
                </HeaderSection>
            
                <SearchSection className ="searchSection">
                    <SearchBar type="text" className="search_bar"/>
                    <SearchButton type="button" className ="searchButton">제출
                    </SearchButton>
                </SearchSection>
            </div>
        );
    }
}

export default Header;