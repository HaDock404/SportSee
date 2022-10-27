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

import User from "../components/Api/User"
import { dataZ } from "../components/Api/User"

import { scoreData } from "../components/Api/User"
import { firstName } from "../components/Api/User"
import { calorieCount } from "../components/Api/User"
import { proteinCount } from "../components/Api/User"
import { lipidCount } from "../components/Api/User"
import { carbohydrateCount } from "../components/Api/User"


/**
 * It's a function that display all the information of the user in the home page
 *
 * @return  {React.ReactElement}A React component.
 */

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
    height: 100%;
    justify-content: space-between;
    `

const CardLayoutStat = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    height: 100%;
    @media only screen and (min-width: 1400px) {
        width: 66%;
    }
    @media only screen and (max-width: 1399px) {
        width: 75%;
    }
    `

const CardLayoutNutrients = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 1400px) {
        width: 33%;
        height: 613px;
    }
    @media only screen and (max-width: 1399px) {
        width: 25%;
        height: 567px;
    }
    `

const CardlayoutStatBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `



function Home() {

    User()

    //This do nothing just a test
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

     //This do nothing just a test

     let score = 0

     score = scoreData

     
     /*const [test1, test2] = useState(0)
     let toto = 0

     useEffect( async () => {
        toto = test2(test1 + score)
     }, [])

     console.log(toto)

     //console.log(testX)

     //console.log(firstName)
*/

    return (
        <CardLayout>
            <SideBar/>
            <CardLayoutHomePage>
                <Title name={firstName} subtitle="Félicitation ! Vous avez explosé vos objectifs hier"/>
                <CardLayoutDashboard>
                    <CardLayoutStat>
                        <DailyActivity element={<BarGraph id={id}/>}/>
                        <CardlayoutStatBox>
                            <MidMark element={<LineGraph id={id}/>}/>
                            <WebGraphic element={<RadarGraph id={id}/>}/>
                            <Score element={<RadialGraph score={score}/>} scoreNumber={score * 100}/>
                        </CardlayoutStatBox>
                    </CardLayoutStat>
                    <CardLayoutNutrients>
                        <CardNutrients img={Fire} style={{backgroundColor: "rgba(255, 0, 0, 0.07)"}} quantity={calorieCount} type="Cal" typetext="Calories"/>
                        <CardNutrients img={Meat} style={{backgroundColor: "rgba(74, 184, 255, 0.1)"}} quantity={proteinCount} type="g" typetext="Proteines"/>
                        <CardNutrients img={Fruit} style={{backgroundColor: "rgba(249, 206, 35, 0.1)"}} quantity={carbohydrateCount} type="g" typetext="Glucides"/>
                        <CardNutrients img={cheeseburger} style={{backgroundColor: "rgba(253, 81, 129, 0.1)"}} quantity={lipidCount} type="g" typetext="Lipides"/>
                    </CardLayoutNutrients>
                </CardLayoutDashboard>
            </CardLayoutHomePage>
        </CardLayout>
    )

}

export default Home