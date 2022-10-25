import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import { scoreData } from './Api/User';


/**
 * It's a function that display the score of the user with a radial chart
 * 
 * @prop   {Number}  score  score of the user
 *
 * @return  {React.ReactElement}A React component.
 */

const data = [
  {
    name: '18-24',
    uv: 0.12,
    pv: 2400,
    fill: '#E60000',
  }
];

let prout = 0

async function e() {
  let response = 12;
  let user = response;
  prout = user
}

function RadialGraph(props) {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="80%" barSize={10} data={data} style={{ background: "transparent" }} startAngle={90}
          endAngle={90 + (props.score * 360)}>
          <RadialBar
            minAngle={0}
            background
            clockWise
            dataKey="uv"
            cornerRadius={40}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
}

RadialGraph.propTypes = {
  score: PropTypes.number.isRequired,
};

export default RadialGraph
  