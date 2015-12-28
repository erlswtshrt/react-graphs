import React from 'react';
import { calcSector } from './lib.js';

class PieChart extends React.Component {

	draw() {
		let data = this.props.data;
		let colors = this.props.colors;

		let svgArcs = [];
    let sectors = [];
	  let startAngle = 0;
    let endAngle = 0;
    let total = 0;

    data.forEach(n => total += n);
    data.forEach(n => sectors.push(360 * n/total));

    sectors.forEach((n,i) => {

    	startAngle = endAngle;
    	endAngle = startAngle + n;

      let flag = i === sectors.length-1;
      let sect = calcSector(n, this.props.radius, startAngle, endAngle, flag, colors[i]);

      svgArcs.push(sect);

    });

    return svgArcs;
	}

  render() {

  	let svgArcs = this.draw();
    let size = this.props.radius*2;

    return (
      <div>
        <div className='sector'>hello</div>
        <svg height={size} width={size}>
        	{svgArcs}
        </svg>
      </div>
    );
  }
}

export default PieChart;