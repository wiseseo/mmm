import React, { Component } from 'react';
import chungA_2 from './photos/chungA_2.png';
import IU from './photos/IU.png';
import chungA from './photos/album_chungA.png';
import 윤딴딴 from './photos/윤딴딴.jpg';


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
                <table>
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>점수</th>
                            <th>앨범커버</th>
                            <th>제목</th>
                            <th>가수</th>
                            <th>앨범</th>
                            <th>시간</th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalChart.map(chart =>(
                        <tr key={chart.n} src={chungA_2} className="chungA_2" alt="chungA_2"> 
                            <td>{chart.n}</td>
                            <td>{chart.num}</td>
                            {/*{img_src.map(img=>(*/}
                            <td>{/*{list.album_cover}*/} 
                            <img src={chart.img}
                            className="album_cover" alt="album_cover"/></td>
                            <td>{chart.title}</td>
                            <td>{chart.artist}</td>
                            <td>{chart.album}</td>
                            <td>{chart.hour}</td>
                        </tr>
                        ))};
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TotalChart;