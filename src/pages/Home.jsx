import styled from "styled-components"

import SideBar from "./SideBar"
import Title from "../components/Title"
import DailyActivity from "../components/DailyActivity"
import MidMark from "../components/MidMark"
import WebGraphic from "../components/WebGraphic"
import Score from "../components/Score"
import CardNutrients from "../components/CardNutrients"

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
    justify-content: space-evenly; 
    width: 66%;
    height: 100%;
    `

const CardLayoutNutrients = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
    width: 33%;
    height: 100%;`

const CardlayoutStatBox = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

function Home() {
    return (
        <CardLayout>
            <SideBar/>
            <CardLayoutHomePage>
                <Title name="Thomas" subtitle="Félicitation ! Vous avez explosé vos objectifs hier"/>
                <CardLayoutDashboard>
                    <CardLayoutStat>
                        <DailyActivity/>
                        <CardlayoutStatBox>
                            <MidMark/>
                            <WebGraphic/>
                            <Score/>
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