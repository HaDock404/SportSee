import styled from "styled-components"

import Icon from "../components/Icon"

import Biking from "../assets/Biking.svg"
import BodyBuilding from "../assets/BodyBuilding.svg"
import Swimming from "../assets/Swimming.svg"
import Yoga from "../assets/Yoga.svg"

/**
 * It's a function that display the sidebar
 *
 * @return  {React.ReactElement}A React component.
 */

const CardSideBar = styled.article`
    background-color: black;
    width: 117px;
    height: calc(100vh - 91px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    @media only screen and (min-width: 1400px) {
        margin-right: 109px;
    }
    @media only screen and (max-width: 1399px) {
        margin-right: 20px;
    }
    
    `

const CardPicture = styled.img`
    width: 40px;
    height: 40px;
    `

const CardCopyright = styled.h4`
    color: white;
    position: absolute;
    bottom: 110px;
    transform: rotate(-90deg);
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    margin: 0px;
    padding: 0px;
    width: 100%;
    white-space: nowrap;
    `

function SideBar() {
    return (
        <CardSideBar>
            <Icon img={<CardPicture src={Yoga}/>}/>
            <Icon img={<CardPicture src={Swimming}/>}/>
            <Icon img={<CardPicture src={Biking}/>}/>
            <Icon img={<CardPicture src={BodyBuilding}/>}/>
            <CardCopyright>Copiright, SportSee 2020</CardCopyright>
        </CardSideBar>
    );
}

export default SideBar