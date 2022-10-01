import styled from "styled-components"

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

export default CardNutrients