import React from 'react';

export function calcSector(angle, radius, start, end, flag, fill) {
	let offSet = radius - 10;

	let x1 = parseInt(radius + offSet*Math.cos(Math.PI*start/180));
  let y1 = parseInt(radius + offSet*Math.sin(Math.PI*start/180));

  let x2 = parseInt(radius + offSet*Math.cos(Math.PI*end/180));
  let y2 = flag ? radius : parseInt(radius + offSet*Math.sin(Math.PI*end/180));

  let f = angle > 180 ? 1 : 0;
  let d = "M"+radius+","+radius+"  L" + x1 + "," + y1 + "  A" + offSet + "," + offSet + " 0 " + f + ",1 " + x2 + "," + y2 + " z";

  let labelX = f ? radius-((x1+x2)/2-radius) : ((x1+x2)/2);
  let labelY = f ? radius-((y1+y2)/2-radius) : ((y1+y2)/2);

  return 	( <g>
  				    <path d={d} fill={fill} className="sector" />
  				    <text textAnchor="middle" x={labelX} y={labelY}>50%</text>
  				  </g>  );

}