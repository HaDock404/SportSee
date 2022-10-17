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
    width: 258px;
    height: 124px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    `

const Quantity = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
    `

const Type = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #74798C;
    margin-top: 0px;`

const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 6px;
    margin-right: 20px;
    margin-left: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const Text = styled.div`
    display: flex;
    flex-direction: column;
    `

const LogoImg = styled.img`
    width: 20px;
    height: 20px;
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