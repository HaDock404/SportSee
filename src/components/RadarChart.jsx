import React from 'react';
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

/**
 * It's a function that display different variable of sport in a Radar chart
 * 
 * @prop   {String}  id  id of the user in the URL
 *
 * @return  {React.ReactElement}A React component.
 */

function RadarGraph(props) {

  const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/user/${props.id}/performance`)
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
        subject: 'Intensité',
        A: `${data.data.data[5].value}`,
        fullMark: 300,
      },
      {
        subject: 'Vitesse',
        A: `${data.data.data[4].value}`,
        fullMark: 300,
      },
      {
        subject: 'Force',
        A: `${data.data.data[3].value}`,
        fullMark: 300,
      },
      {
        subject: 'Endurance',
        A: `${data.data.data[2].value}`,
        fullMark: 300,
      },
      {
        subject: 'Energie',
        A: `${data.data.data[1].value}`,
        fullMark: 300,
      },
      {
        subject: 'Cardio',
        A: `${data.data.data[0].value}`,
        fullMark: 300,
      },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataX}>
          <PolarGrid  radialLines={false}/>
          <PolarAngleAxis 
            dataKey="subject"
            stroke={"#fff"}
            tickLine={false}
            tickSize={13}
            fontSize={14}
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