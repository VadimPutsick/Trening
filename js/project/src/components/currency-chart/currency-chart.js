import './currency-chart.css';
import React, { Component } from 'react';
import { Chart } from 'chart';
import { EntityService } from '../../service';
import { connect } from 'react-redux';
// {date: "2017-11-08T00:00:00", rate: 1.5191}
export class CurrencyChart extends Component {
    constructor(props) {
        super(props);
        this.chart;
    }
    renderChart(dateList,canvas) {
        // var ctx = document.getElementById("myChart");
        let ctx = canvas.getContext('2d');
        let rates = dateList.map((item) => item.rate).sort();
        let dates = dateList.map((item) => item.date);
        let ratemin = +rates[0];
        let ratemax = +rates[rates.length - 1];
        let raterange = ratemax - ratemin;
        let borderVal = 3 / 10;
        ratemin = ratemin - raterange * borderVal;
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: '# Currencies',
                    data: dateList.map((item) => item.rate),
                    backgroundColor: 'rgba(146, 23, 146, 0.3)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            min: ratemin - raterange * borderVal,
                            max: ratemax + raterange * borderVal
                        }
                    }]
                }
            }
        });
    }
    draw(id, fromCurrencyDate, endCurrencyDate) {
        let ent = new EntityService();
        ent.getDateList(id, fromCurrencyDate, endCurrencyDate).then(
            (dateList) => {
                console.log(dateList);
                this.renderChart(dateList,this.canvas);
            })
            .catch((error) => {
                return error;
            });
    }
    render() {
        return (
            <div className="pr-chart" >
                {this.draw(this.props.currencyID, this.props.fromCurrencyDate, this.props.endCurrencyDate)}
                <canvas width="1" height="1"
                    ref={(canvas) => {
                        this.canvas = canvas;
                    }}>
                </canvas>
            </div>
        );

    }
}
