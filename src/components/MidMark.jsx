import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display the card for the time of sport of the user
 * 
 * @prop   {Object}  element  Line Chart
 *
 * @return  {React.ReactElement}A React component.
 */

const CardMidMark = styled.article`
    width: 253px;
    height: 268px;
    background-color: #FF0000;
    border-radius: 5px;
    `

function MidMark(props) {
    return <CardMidMark>{props.element}</CardMidMark>
}

MidMark.propTypes = {
    element: PropTypes.object.isRequired,
  };

export default MidMark