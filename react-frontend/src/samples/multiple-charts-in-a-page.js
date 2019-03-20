import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/dashboard-style.css';

import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var $ = require('jquery');

class App extends Component {
	render() {
		const revenueChartOptions  = {
			animationEnabled: true,
			backgroundColor: "transparent",
			theme: "light2",
			axisX: {
				labelFontSize: 14,
				valueFormatString: "MMM YYYY"
			},
			axisY: {
				labelFontSize: 14,
				prefix: "$"
			},
			toolTip: {
				borderThickness: 0,
				cornerRadius: 0
			},
			data: [
				{
					type: "column",
					yValueFormatString: "$###,###.##",
					dataPoints: [
						{ x: new Date("1 Jan 2018"), y: 868800 },
						{ x: new Date("1 Feb 2018"), y: 1071550 },
						{ x: new Date("1 Mar 2018"), y: 1286200 },
						{ x: new Date("1 Apr 2018"), y: 1106900 },
						{ x: new Date("1 May 2018"), y: 1033800 },
						{ x: new Date("1 Jun 2018"), y: 1017160 },
						{ x: new Date("1 Jul 2018"), y: 1458000 },
						{ x: new Date("1 Aug 2018"), y: 1165850 },
						{ x: new Date("1 Sep 2018"), y: 1594150 },
						{ x: new Date("1 Oct 2018"), y: 1501700 },
						{ x: new Date("1 Nov 2018"), y: 1588400 },
						{ x: new Date("1 Dec 2018"), y: 1648600 }
					]
				}
			]
		},
		productsRevenuePieOptions = {
			animationEnabled: true,
			theme: "light2",
			legend: {
				fontSize: 14
			},
			toolTip: {
				borderThickness: 0,
				content: "<span style='\"'color: {color};'\"'>{name}</span>: ${y} (#percent%)",
				cornerRadius: 0
			},
			data: [
				{       
					indexLabelFontColor: "#676464",
					indexLabelFontSize: 14,
					legendMarkerType: "square",
					legendText: "{indexLabel}",
					showInLegend: true,
					startAngle:  90,
					type: "pie",
					dataPoints: [
						{  y: 6289855, name:"Product A", indexLabel: "Product A - 41%", legendText: "Product A", exploded: true },
						{  y: 2761400, name:"Product B", indexLabel: "Product B - 18%", legendText: "Product B" },
						{  y: 3681866, name:"Product C", indexLabel: "Product C - 24%", legendText: "Product C", color: "#8064a1" },
						{  y: 2607989, name:"Product D", indexLabel: "Product D - 17%", legendText: "Product D" }
					]
				}
			]
		},
		ordersSplineOptions = {
					animationEnabled: true,
					backgroundColor: "transparent",
					theme: "light2",
					toolTip: {
						borderThickness: 0,
						cornerRadius: 0
					},
					axisX: {
						labelFontSize: 14,
						maximum: new Date("31 Dec 2018"),
						valueFormatString: "MMM YYYY"
					},
					axisY: {
						gridThickness: 0,
						labelFontSize: 14,
						lineThickness: 2
					},
					data: [
						{
							type: "spline",
							dataPoints: [
								{ x: new Date("1 Jan 2018"), y: 17376 },
								{ x: new Date("1 Feb 2018"), y: 21431 },
								{ x: new Date("1 Mar 2018"), y: 25724 },
								{ x: new Date("1 Apr 2018"), y: 22138 },
								{ x: new Date("1 May 2018"), y: 20676 },
								{ x: new Date("1 Jun 2018"), y: 25429 },
								{ x: new Date("1 Jul 2018"), y: 29160 },
								{ x: new Date("1 Aug 2018"), y: 23317 },
								{ x: new Date("1 Sep 2018"), y: 31883 },
								{ x: new Date("1 Oct 2018"), y: 30034 },
								{ x: new Date("1 Nov 2018"), y: 31768 },
								{ x: new Date("1 Dec 2018"), y: 41215 }
							]
						}
					]
				}
		return (
			<div className="App">
				<div className="container">
					<h2 id="header">
						<strong>Annual Sales</strong>
						&nbsp;<small className="text-muted">Jan 2018 &#8211; Dec 2018</small>
					</h2>
					
					<div className="row m-b-1">
						<div className="col-md-12">
							<div className="card shadow">
								<h4 className="card-header">Revenue <span className="tag tag-success" id="revenue-tag">$15,341,110</span></h4>
								<div className="card-block">
									<CanvasJSChart options = {revenueChartOptions} containerProps = {{width:"100%",height:"300px"}}
										onRef={ref => this.revenueChart = ref}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row m-b-1">
						<div className="col-lg-6">
							<div className="card shadow">
								<h4 className="card-header">Product Wise Revenue</h4>
								<div className="card-block">
									<CanvasJSChart options = {productsRevenuePieOptions} containerProps = {{width:"100%",height:"300px"}}
										onRef={ref => this.productsRevenuePieChart = ref}
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="card shadow">
								<h4 className="card-header">Orders</h4>
								<div className="card-block">
									<CanvasJSChart options = {ordersSplineOptions} containerProps = {{width:"100%",height:"300px"}}
										onRef={ref => this.ordersSplineChart = ref}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount(){
		const revenueChart = this.revenueChart, productsRevenuePieChart = this.productsRevenuePieChart, ordersSplineChart = this.ordersSplineChart;
		$(window).on("load", function(){
			revenueChart.render();
			productsRevenuePieChart.render();
			ordersSplineChart.render();			
		});
	}
}
export default App;