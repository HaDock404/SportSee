import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

import Performance from './Api/Performance';
import { dataZ } from './Api/Performance';

/**
 * It's a function that display different variable of sport in a Radar chart
 * 
 * @prop   {String}  id  id of the user in the URL
 *
 * @return  {React.ReactElement}A React component.
 */

function RadarGraph(props) {

  Performance()

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataZ}>
          <PolarGrid  radialLines={false}/>
          <PolarAngleAxis 
            dataKey="subject"
            stroke={"#fff"}
            tickLine={false}
            tickSize={13}
            fontSize={13}
            radius={10}
            />
            <PolarRadiusAxis domain={[0, 220]} stroke="rgb(255, 0, 0, 0.0)"/>
          <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    );
}

RadarGraph.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RadarGraph