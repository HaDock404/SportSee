import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display the card for the Radar chart
 * 
 * @prop   {Object}  element  Radar Chart
 *
 * @return  {React.ReactElement}A React component.
 */

const CardWebGraphic = styled.article`
    background-color: #282D30;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1400px) {
        width: 253px;
        height: 268px;
    }
    @media only screen and (max-width: 1399px) {
        width: 220px;
        height: 215px;
    }
    `

function WebGraphic(props) {
    return <CardWebGraphic>{props.element}</CardWebGraphic>
}

WebGraphic.propTypes = {
    element: PropTypes.object.isRequired,
  };

export default WebGraphic