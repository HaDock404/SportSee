import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display the time of activity per day in a line chart
 * 
 * @prop   {Object}  element  Line chart Daily activity
 *
 * @return  {React.ReactElement}A React component.
 */

const CardDalyGraphic = styled.article`
    background-color: #FBFBFB;
    width: 100%;
    height: 320px;
    border-radius: 5px;
    margin-bottom: 30px;
    position: relative;
    `

const TitleActivity = styled.h2`
    position: absolute;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    top: 15px;
    left: 15px;
    `

function DailyActivity(props) {
    return (
        <CardDalyGraphic>
            <TitleActivity>Activité quotidienne</TitleActivity>
            {props.element}
        </CardDalyGraphic>
    )
}

DailyActivity.propTypes = {
    element: PropTypes.object.isRequired,
  };

export default DailyActivity