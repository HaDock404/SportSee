import React, { PureComponent } from 'react';
import { useEffect } from "react"
import { useState } from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import '../styles/style.css'
import styled from 'styled-components';

import Activity from './Api/Activity';
import { dataZ } from './Api/Activity';

/**
 * It's a function that display the weight of the user with Bar chart during some days
 * 
 * @prop   {String}  id  Radial Chart
 *
 * @return  {React.ReactElement}A React component.
 */

const TooltipCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  background-color: red;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: 0;`

 const CustomTooltip = ({payload, active}) => {
	if (active) {
		return (
			<TooltipCard>
				<p>{`${payload[0].value}kg`}</p>
				<p>{`${payload[1].value}cal`}</p>
			</TooltipCard>
		)
	}
	return null
}

function BarGraph(props) {

  Activity()

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataZ}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={6}
        >
          <CartesianGrid  strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="name" 
            domain={["dataMin + 1", "dataMax + 1"]}
            tickLine={false}
            />
          <YAxis orientation="right"
            interval={"preserveStartEnd"}
            axisLine={false}
            allowDecimals={false}
            dataKey={"Calories"}
            />
          <Tooltip
              labelFormatter={() => ''}
              cursor={{fill: '#DFDFDF', opacity: '0.6'}}
              content={<CustomTooltip/>}
              wrapperStyle={{
                color: "#FFF", backgroundColor: "#FFF", outline: 'none'}}
                />
          <Legend 
            height={40}
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            wrapperStyle={{top: 30, right: 100}}
            formatter={(value, entry, index) => <span className="text-color-class">{value}</span>}
            />
          <Bar dataKey="Poids" fill="#282D30" borderRadius="20" barSize={10} radius={[10, 10, 0, 0]} name="Poids (kg)"/>
          <Bar dataKey="Calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} name="Calories brûlées (kCal)"/>
        </BarChart>
      </ResponsiveContainer>
    );
}

BarGraph.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BarGraph
  