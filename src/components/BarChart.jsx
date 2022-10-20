import React, { PureComponent } from 'react';
import { useEffect } from "react"
import { useState } from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import '../styles/style.css'

/**
 * It's a function that display the weight of the user with Bar chart during some days
 * 
 * @prop   {String}  id  Radial Chart
 *
 * @return  {React.ReactElement}A React component.
 */

function BarGraph(props) {

  const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/user/${props.id}/activity`)
             .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
             })
             .then (data => {
                setData(data);
             })
             .catch(error => {
                console.error("Error", error)
                setError(error)
             })
             .finally(() => {
                setLoading(false)
             })
     }, [])

     if (loading) return "Loading ..."
     if(error) return "Error!";

     const dataX = [
      {
        name: '1',
        Calories: `${data.data.sessions[0].calories}`,
        Poids: `${data.data.sessions[0].kilogram}`,
      },
      {
        name: '2',
        Calories: `${data.data.sessions[1].calories}`,
        Poids: `${data.data.sessions[1].kilogram}`,
      },
      {
        name: '3',
        Calories: `${data.data.sessions[2].calories}`,
        Poids: `${data.data.sessions[2].kilogram}`,
      },
      {
        name: '4',
        Calories: `${data.data.sessions[3].calories}`,
        Poids: `${data.data.sessions[3].kilogram}`,
      },
      {
        name: '5',
        Calories: `${data.data.sessions[4].calories}`,
        Poids: `${data.data.sessions[4].kilogram}`,
      },
      {
        name: '6',
        Calories: `${data.data.sessions[5].calories}`,
        Poids: `${data.data.sessions[5].kilogram}`,
      },
      {
        name: '7',
        Calories: `${data.data.sessions[6].calories}`,
        Poids: `${data.data.sessions[6].kilogram}`,
      }
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataX}
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
              wrapperStyle={{
                color: "#FFF", backgroundColor: "#FFF"}}
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
  