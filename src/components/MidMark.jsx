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
    position: relative;
    `

const WeCard = styled.div`
    position absolute;
    right: 0px;
    width: 75px;
    border-radius: 0 5px 5px 0;
    height: 268px;
    background-color: #cf0202;
    `

const TitleCard = styled.h2`
    position: absolute;
    color: #fa8282;
    font-family: 'Roboto', sans serif;
    font-size: 15px;
    top: 20px;
    left: 30px;
    `


function MidMark(props) {
    return (
        <CardMidMark>
            <WeCard />
            <TitleCard>Durée moyenne des <br></br>sessions</TitleCard>
            {props.element}
        </CardMidMark>)
}

MidMark.propTypes = {
    element: PropTypes.object.isRequired,
  };

export default MidMark