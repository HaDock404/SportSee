import styled from "styled-components"
import PropTypes from 'prop-types'

const CardLayoutTitle = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    `

const CardTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    color: black;
    margin-bottom: 20px;
    `

const CardName = styled.strong`
    color: #FF0101;
    `

const CardSubtitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: black;
    font-weight: 300;`

function Title(props) {
    return(
        <CardLayoutTitle>
            <CardTitle>Bonjour <CardName>{props.name}</CardName></CardTitle>
            <CardSubtitle>{props.subtitle}</CardSubtitle>
        </CardLayoutTitle>
    )
}

Title.propTypes = {
    name: PropTypes.string
  };

  

export default Title