import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"

export let dataZ = []

function Performance() {

    const { id } = useParams()

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {            
            fetch(`http://localhost:3000/user/${id}/performance`)
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

      dataZ = dataX
  
      return dataX;
}

export default Performance