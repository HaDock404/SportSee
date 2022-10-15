import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"

import SideBar from "./SideBar"
import Title from "../components/Title"
import DailyActivity from "../components/DailyActivity"
import MidMark from "../components/MidMark"
import WebGraphic from "../components/WebGraphic"
import Score from "../components/Score"
import CardNutrients from "../components/CardNutrients"

import BarGraph from "../components/BarChart"
import RadarGraph from "../components/RadarChart"
import LineGraph from "../components/LineChart"
import RadialGraph from "../components/RadialChart"

import Fire from '../assets/Fire.svg'
import Meat from '../assets/Meat.svg'
import Fruit from '../assets/Fruit.svg'
import cheeseburger from '../assets/cheeseburger.svg'

const CardLayout = styled.section`
    display: flex;
    flex-direction: row;
    `

const CardLayoutHomePage = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

const CardLayoutDashboard = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    `

const CardLayoutStat = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    width: 66%;
    height: 100%;
    `

const CardLayoutNutrients = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 33%;
    height: 613px;
    `

const CardlayoutStatBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

    

function Home() {

    const { id } = useParams()

    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
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
     }, [])

     if (loading) return "Loading ..."
     if(error) return "Error!";

     let score = ""

     if(data.data.score == undefined) {
        score = data.data.todayScore
     } else if (data.data.todayScore == undefined) {
        score = data.data.score
     } else {
        return "Error!"
     }




    return (
        <CardLayout>
            <SideBar/>
            <CardLayoutHomePage>
                <Title name={data.data.userInfos.firstName} subtitle="Félicitation ! Vous avez explosé vos objectifs hier"/>
                <CardLayoutDashboard>
                    <CardLayoutStat>
                        <DailyActivity element={<BarGraph id={id}/>}/>
                        <CardlayoutStatBox>
                            <MidMark element={<LineGraph id={id}/>}/>
                            <WebGraphic element={<RadarGraph id={id}/>}/>
                            <Score element={<RadialGraph score={score}/>} score={score * 100}/>
                        </CardlayoutStatBox>
                    </CardLayoutStat>
                    <CardLayoutNutrients>
                        <CardNutrients img={Fire} style={{backgroundColor: "rgba(255, 0, 0, 0.07)"}} quantity={data.data.keyData.calorieCount} type="Cal" typetext="Calories"/>
                        <CardNutrients img={Meat} style={{backgroundColor: "rgba(74, 184, 255, 0.1)"}} quantity={data.data.keyData.proteinCount} type="g" typetext="Proteines"/>
                        <CardNutrients img={Fruit} style={{backgroundColor: "rgba(249, 206, 35, 0.1)"}} quantity={data.data.keyData.carbohydrateCount} type="g" typetext="Glucides"/>
                        <CardNutrients img={cheeseburger} style={{backgroundColor: "rgba(253, 81, 129, 0.1)"}} quantity={data.data.keyData.lipidCount} type="g" typetext="Lipides"/>
                    </CardLayoutNutrients>
                </CardLayoutDashboard>
            </CardLayoutHomePage>
        </CardLayout>
    )
}

export default Home