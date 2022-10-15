import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function LineGraph(props) {

  const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/user/${props.id}/average-sessions`)
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
        name: 'L',
        day: `${data.data.sessions[0].sessionLength}`
      },
      {
        name: 'M',
        day: `${data.data.sessions[1].sessionLength}`
      },
      {
        name: 'M',
        day: `${data.data.sessions[2].sessionLength}`
      },
      {
        name: 'J',
        day: `${data.data.sessions[3].sessionLength}`
      },
      {
        name: 'V',
        day: `${data.data.sessions[4].sessionLength}`
      },
      {
        name: 'S',
        day: `${data.data.sessions[5].sessionLength}`
      },
      {
        name: 'D',
        day: `${data.data.sessions[6].sessionLength}`
      },
    ];

    return (
        <ResponsiveContainer margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <LineChart
          data={dataX}
          style={{ background: "red", borderRadius: "10px" }}
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

export default LineGraph
  