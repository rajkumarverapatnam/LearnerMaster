import Chart from 'react-apexcharts';
import React, {Component} from 'react';

export default class App extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: this.props.x_data
          }
        },
        series: this.props.series
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
      )
    }
  }