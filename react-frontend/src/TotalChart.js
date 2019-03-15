import React, { Component } from 'react';
import chungA_2 from './photos/chungA_2.png';
import IU from './photos/IU.png';

class TotalChart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            totalChart: [],
            img_src: []
        }
    }
    
    componentDidMount() {
        
        fetch('http://210.89.188.137:5000/api/chart')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    totalChart: json
                })
            });
        
        fetch('http://210.89.188.137:5000/api/img')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    img_src: json
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

        var { totalChart, img_src } = this.state; 

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
                            <img src="https://cdnimg.melon.co.kr/cm/album/images/102/38/711/10238711_500.jpg/melon/resize/120/quality/80/optimize"
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