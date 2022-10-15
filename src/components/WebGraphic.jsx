import styled from "styled-components"

const CardWebGraphic = styled.article`
    width: 253px;
    height: 268px;
    background-color: #282D30;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

function WebGraphic(props) {
    return <CardWebGraphic>{props.element}</CardWebGraphic>
}

export default WebGraphic