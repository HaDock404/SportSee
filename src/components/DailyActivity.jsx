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
    `

function DailyActivity(props) {
    return (
        <CardDalyGraphic>{props.element}</CardDalyGraphic>
    )
}

DailyActivity.propTypes = {
    element: PropTypes.object.isRequired,
  };

export default DailyActivity