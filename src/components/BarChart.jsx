import React, { PureComponent } from 'react';
import { useEffect } from "react"
import { useState } from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

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
        uv: `${data.data.sessions[0].calories}`,
        pv: `${data.data.sessions[0].kilogram}`,
      },
      {
        name: '2',
        uv: `${data.data.sessions[1].calories}`,
        pv: `${data.data.sessions[1].kilogram}`,
      },
      {
        name: '3',
        uv: `${data.data.sessions[2].calories}`,
        pv: `${data.data.sessions[2].kilogram}`,
      },
      {
        name: '4',
        uv: `${data.data.sessions[3].calories}`,
        pv: `${data.data.sessions[3].kilogram}`,
      },
      {
        name: '5',
        uv: `${data.data.sessions[4].calories}`,
        pv: `${data.data.sessions[4].kilogram}`,
      },
      {
        name: '6',
        uv: `${data.data.sessions[5].calories}`,
        pv: `${data.data.sessions[5].kilogram}`,
      },
      {
        name: '7',
        uv: `${data.data.sessions[6].calories}`,
        pv: `${data.data.sessions[6].kilogram}`,
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
            dataKey={"uv"}
            />
          <Tooltip 
            labelStyle={{
                display: "none",
              }}
              wrapperStyle={{
                color: "#FFF",
                background: "red",
                border: "none",
                outline: "none",
                width: "50px",
                height: "70px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                />
          <Legend 
            height={40}
            verticalAlign="top"
            align="right"
            iconType={"circle"}
            style={{ margin: "1rem auto", width: "100px" }}
            />
          <Bar dataKey="pv" fill="#282D30" borderRadius="20 "/>
          <Bar dataKey="uv" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
}

BarGraph.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BarGraph
  