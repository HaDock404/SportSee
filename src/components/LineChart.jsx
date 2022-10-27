import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

import AverageSessions from './Api/AverageSessions';
import { dataZ } from './Api/AverageSessions';

import styled from 'styled-components';

/**
 * It's a function that display time of sport of the user during a week
 * 
 * @prop   {String}  id  id of the user in the URL
 *
 * @return  {React.ReactElement}A React component.
 */

const TooltipCard = styled.div`
  background-color: #FFFEFC;
  color: #262627;
  font-size: 8px;
  padding: 8px;
  font-weight: 500;
  `

 const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<TooltipCard>
				<p>{`${payload[0].value} min`}</p>
			</TooltipCard>
		)
	}
	return null
}


function LineGraph(props) {

  AverageSessions()

    return (
        <ResponsiveContainer margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <LineChart
          data={dataZ}
          style={{ background: "", borderRadius: "10px" }}
          margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
        >
          <XAxis dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ right: 20, left: 20 }}
            stroke={"#fff"}
            interval={"preserveStartEnd"}/>
          <YAxis hide padding={{ top: 70, bottom: 20 }}/>
          <Tooltip
            content={<CustomTooltip/>}
            cursor={{
              strokeOpacity: 0
            }}
            wrapperStyle={{
                background: "#FFF",
                color: "#000",
                width: "39px",
                height: "25px",
                outline: "none",
              }}
            labelStyle={{ display: "none", border: "none" }}
            payload={{ name: '05-01', value: 12, unit: 'kg' }}
              />
          <Line type="natural"
            dataKey="day"
            dot={false}
            activeDot={{ stroke: "red", strokeWidth: 2, r: 3 }}
            unit={"min"}
            stroke={"#FFF"}
            strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    );
}

LineGraph.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LineGraph
  