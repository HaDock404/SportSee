import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"

export let dataZ = []

function AverageSessions() {

    const { id } = useParams()

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {            
            fetch(`http://localhost:3000/user/${id}/average-sessions`)
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

      dataZ = dataX
  
      return dataX;
}

export default AverageSessions