import styled from "styled-components"
import PropTypes from "prop-types";

/**
 * It's a function that display a card for the differents nutriements
 * 
 * @prop   {Object}  style  color the card
 * @prop   {String}  img  logo in the card
 * @prop   {Number}  quantity  quanity of nutriement
 * @prop   {String}  type  first letter of nutriement
 * @prop   {String}  typetext  type of nutriement
 *
 * @return  {React.ReactElement}A React component.
 */

const CardNutrient = styled.article`
    background-color: #FBFBFB;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (min-width: 1400px) {
        width: 258px;
        height: 124px;
    }
    @media only screen and (max-width: 1399px) {
        width: 170px;
        height: 75px;
    }
    `

const Quantity = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: black;
    @media only screen and (min-width: 1400px) {
        font-size: 20px;
        margin-bottom: 10px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 14px;
        margin-bottom: 5px;
    }

    `

const Type = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #74798C;
    margin-top: 0px;
    @media only screen and (min-width: 1400px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 1399px) {
        font-size: 10px;
    }
    `

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1400px) {
        width: 60px;
        height: 60px;
        border-radius: 6px;
        margin-right: 20px;
        margin-left: 32px;
    }
    @media only screen and (max-width: 1399px) {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        margin-right: 20px;
        margin-left: 32px;
    }
    `

const Text = styled.div`
    display: flex;
    flex-direction: column;
    `

const LogoImg = styled.img`
    @media only screen and (min-width: 1400px) {
        width: 20px;
        height: 20px;
    }
    @media only screen and (max-width: 1399px) {
        width: 15px;
        height: 15px;
    }

    `

function CardNutrients(props) {
    return (
        <CardNutrient>
            <Logo style={props.style}>
                <LogoImg src={props.img}/>
            </Logo>
            <Text>
                <Quantity>{props.quantity}{props.type}</Quantity>
                <Type>{props.typetext}</Type>
            </Text>
        </CardNutrient>
    )
}

CardNutrients.propTypes = {
    style: PropTypes.object.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    typetext: PropTypes.string.isRequired,
  };

export default CardNutrients