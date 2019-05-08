import React, { Component } from 'react';
import styled from 'styled-components';
import chungA_2 from './photos/chungA_2.png';

const AlbumCover = styled.img `
    width: 100px;
    height: 100px;
`;


const Table = styled.table `
    /*border : 1px solid black;*/
    border-collapse: collapse;
    text-align: center;
    margin-left: auto; 
    margin-right: auto;
    width : 70%;
`;

const Th = styled.th `
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
`;

const Td = styled.td `
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
`;

const TheadTr = styled.tr `
    width : 100%;
    border: 2px solid #ffa9a1;
    background-color: #ffdbd8;

    border-left : 0px;
    border-right  : 0px;
`;

const TbodyTr = styled.tr `
    width : 100%;
    border: 2px solid #ffa9a1;
    background-color: ${props => {
        if (props.color % 2 === 0) return '#ffdbd8';
    }};
    border-left : 0px;
    border-right  : 0px;
    height : 100px;
    transition: 0.2s ease-out;
    background-image: url(${props => props.color===1 ? chungA_2 : ""});
    background-repeat: no-repeat;
    background-size: 100%;
`;

class TotalChart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            totalChart: []
        }
    }
    
    componentDidMount() {
        
        fetch('http://127.0.0.1:5000/api/chart')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    totalChart: json
                })
            });
    }

    handleChange = () => {
        var acc = document.getElementsByClassName("Row");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            
            if (this.style.height==="100px"){
                this.style.height="200px";
            } else {
                this.style.height="100px";
            } 
          });
        }
        
      }

    render() {
        /*
        const addBackImage = {
            backgroundImage: 'url(./photos/chungA_2.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%'   
        }*/

        var { totalChart } = this.state; 

        return (
            <div>
                <Table>
                    <thead>
                        <Theadtr>
                            <Th>순위</Th>
                            <Th>점수</Th>
                            <Th>앨범커버</Th>
                            <Th>제목</Th>
                            <Th>가수</Th>
                            <Th>앨범</Th>
                            <Th>시간</Th>
                        </Theadtr>
                    </thead>
                    <tbody>
                        {totalChart.map(chart =>(
                        <Tbodytr color={chart.n} key={chart.n} 
                            src={chungA_2} 
                            className="Row" 
                            alt="chungA_2"
                            onClick={this.handleChange}> 
                            <Td>{chart.n}</Td>
                            <Td>{chart.num}</Td>
                            {/*{img_src.map(img=>(*/}
                            <Td>{/*{list.album_cover}*/} 
                            <AlbumCover src={chart.img}
                            className="album_cover" alt="album_cover"/></Td>
                            <Td>{chart.title}</Td>
                            <Td>{chart.artist}</Td>
                            <Td>{chart.album}</Td>
                            <td>{chart.hour}</Td>
                        </Tbodytr>
                        ))};
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TotalChart;