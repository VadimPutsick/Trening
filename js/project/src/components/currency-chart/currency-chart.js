 import './currency-chart.css';
import React, { Component } from 'react';
import { Chart } from 'chart.js';

export class CurrencyChart extends Component {
    renderChart(){
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor:'rgba(25, 159, 64, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }
    componentDidMount(){
        this.renderChart();
    }
    render() {
        return (
            <div className="pr-chart" >
                 <canvas id="myChart"></canvas>
            </div>
        );

    }
}
