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
    @media only screen and (min-width: 1400px) {
        width: 253px;
        height: 268px;
    }
    @media only screen and (max-width: 1399px) {
        width: 220px;
        height: 215px;
    }
    `

const WeCard = styled.div`
    position absolute;
    right: 0px;
    border-radius: 0 5px 5px 0;
    background-color: #cf0202;
    @media only screen and (min-width: 1400px) {
        height: 268px;
        width: 75px;
    }
    @media only screen and (max-width: 1399px) {
        height: 214px;
        width: 60px;
    }
    `

const TitleCard = styled.h2`
    position: absolute;
    color: #fa8282;
    font-family: 'Roboto', sans serif;
    top: 20px;
    left: 30px;
    @media only screen and (min-width: 1400px) {
        font-size: 15px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 10px;
    }
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