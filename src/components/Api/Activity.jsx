import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"

export let dataZ = []

function Activity() {

    const { id } = useParams()

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {            
            fetch(`http://localhost:3000/user/${id}/activity`)
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
        }
        fetchData()
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

      dataZ = dataX
  
      return dataX;
}

export default Activity