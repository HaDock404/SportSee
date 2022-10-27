import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display the score of the user with a radial chart
 * 
 * @prop   {Object}  element  Radial Chart
 * @prop   {Number}  scoreNumber  score of the user
 *
 * @return  {React.ReactElement}A React component.
 */

const CardScore = styled.article`
    background-color: #FBFBFB;
    border-radius: 5px;
    position: relative;
    @media only screen and (min-width: 1400px) {
        width: 253px;
        height: 268px;
    }
    @media only screen and (max-width: 1399px) {
        width: 220px;
        height: 215px;
    }
    `

const ScoreTitle = styled.h4`
    position: absolute;
    font-family: 'Roboto', sans-serif;
    @media only screen and (min-width: 1400px) {
        font-size: 15px;
        top: 5px;
        left: 20px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 12px;
        top: 0px;
        left: 20px;
    }
    `

const ScoreInfo = styled.div`
    position: absolute;
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    margin: 0px;
    text-align: center;
    color: #74798C;
    @media only screen and (min-width: 1400px) {
        font-size: 15px;
        top: 80px;
        left: 105px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 12px;
        top: 60px;
        left: 95px;
    }
    `

const ScoreNumb = styled.h2`
    font-family: 'Roboto', sans-serif;
    color: black;
    padding: 0px;
    margin: 0px;
    @media only screen and (min-width: 1400px) {
        font-size: 26px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 20px;
    }
    `

function Score(props) {
    return (
        <CardScore>
            <ScoreTitle>Score</ScoreTitle>
            {props.element}
            <ScoreInfo>
                <ScoreNumb>{props.scoreNumber}%</ScoreNumb><br></br>de votre <br></br>objectif
            </ScoreInfo>
        </CardScore>
    )
}

Score.propTypes = {
    element: PropTypes.object.isRequired,
    scoreNumber: PropTypes.number.isRequired,
  };

export default Score