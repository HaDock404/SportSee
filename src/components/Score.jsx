import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display the score of the user with a radial chart
 * 
 * @prop   {Object}  element  Radial Chart
 * @prop   {Number}  score  score of the user
 *
 * @return  {React.ReactElement}A React component.
 */

const CardScore = styled.article`
    width: 253px;
    height: 268px;
    background-color: #FBFBFB;
    border-radius: 5px;
    position: relative;
    `

const ScoreTitle = styled.h4`
    font-size: 15px;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    top: 5px;
    left: 20px;
    `

const ScoreInfo = styled.div`
    font-size: 15px;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    top: 80px;
    left: 105px;
    padding: 0px;
    margin: 0px;
    text-align: center;
    color: #74798C;
    `

const ScoreNumb = styled.h2`
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    color: black;
    padding: 0px;
    margin: 0px;
    `

function Score(props) {
    return (
        <CardScore>
            <ScoreTitle>Score</ScoreTitle>
            {props.element}
            <ScoreInfo>
                <ScoreNumb>{props.score}%</ScoreNumb><br></br>de votre <br></br>objectif
            </ScoreInfo>
        </CardScore>
    )
}

Score.propTypes = {
    element: PropTypes.object.isRequired,
    score: PropTypes.number.isRequired,
  };

export default Score