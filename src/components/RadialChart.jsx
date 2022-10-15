import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 100,
    pv: 2400,
    fill: '#E60000',
  }
];



function RadialGraph(props) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="80%" barSize={10} data={data} style={{ background: "transparent" }} startAngle={90}
          endAngle={90 + (props.score * 360)}>
          <RadialBar
            minAngle={0}
            background
            clockWise
            dataKey="uv"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
}

export default RadialGraph
  