import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react"

export let dataZ = []
export let scoreData = 0
export let firstName = ""
export let calorieCount = 0
export let proteinCount = 0
export let carbohydrateCount = 0
export let lipidCount = 0

function User() {

    const { id } = useParams()

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {            
            fetch(`http://localhost:3000/user/${id}`)
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

    firstName = data.data.userInfos.firstName
    calorieCount = data.data.keyData.calorieCount
    proteinCount = data.data.keyData.proteinCount
    carbohydrateCount = data.data.keyData.carbohydrateCount
    lipidCount = data.data.keyData.lipidCount

     if(data.data.score == undefined) {
        scoreData = data.data.todayScore
     } else if (data.data.todayScore == undefined) {
        scoreData = data.data.score
     }

     return dataZ



}

export default User