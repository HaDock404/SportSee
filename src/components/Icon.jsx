import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display picture of the nutriement
 * 
 * @prop   {Object}  img  icon of the nutriement
 *
 * @return  {React.ReactElement}A React component.
 */

const Cardicon = styled.article`
    background-color: white;
    color: black;
    width: 64px;
    height: 64px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    `

function Icon(props) {
    return (
        <Cardicon>{props.img}</Cardicon>
    )
}

Icon.propTypes = {
    img: PropTypes.object.isRequired,
  };

export default Icon