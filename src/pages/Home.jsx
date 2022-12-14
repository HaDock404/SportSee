import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

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

let userName = "john"

function testest(Data) {
    
    userName = Data.data.userInfos.firstName

}

function Home() {

    const { id } = useParams()

    //console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/user/18`)
             .then((response) => response.json()
             .then((Data) => testest(Data))
             .catch((error) => console.log(error))
         )
     }, [])

    
    return (
        <CardLayout>
            <SideBar/>
            <CardLayoutHomePage>
                <Title name={userName} subtitle="F??licitation ! Vous avez explos?? vos objectifs hier"/>
                <CardLayoutDashboard>
                    <CardLayoutStat>
                        <DailyActivity element={<BarGraph/>}/>
                        <CardlayoutStatBox>
                            <MidMark element={<LineGraph/>}/>
                            <WebGraphic element={<RadarGraph/>}/>
                            <Score element={<RadialGraph/>}/>
                        </CardlayoutStatBox>
                    </CardLayoutStat>
                    <CardLayoutNutrients>
                        <CardNutrients img={Fire} style={{backgroundColor: "rgba(255, 0, 0, 0.07)"}} quantity="1,930" type="Cal" typetext="Calories"/>
                        <CardNutrients img={Meat} style={{backgroundColor: "rgba(74, 184, 255, 0.1)"}} quantity="155" type="g" typetext="Proteines"/>
                        <CardNutrients img={Fruit} style={{backgroundColor: "rgba(249, 206, 35, 0.1)"}} quantity="290" type="g" typetext="Glucides"/>
                        <CardNutrients img={cheeseburger} style={{backgroundColor: "rgba(253, 81, 129, 0.1)"}} quantity="50" type="g" typetext="Lipides"/>
                    </CardLayoutNutrients>
                </CardLayoutDashboard>
            </CardLayoutHomePage>
        </CardLayout>
    )
}

export default Home