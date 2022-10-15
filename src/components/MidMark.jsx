import styled from "styled-components"

const CardMidMark = styled.article`
    width: 253px;
    height: 268px;
    background-color: #FF0000;
    border-radius: 5px;
    `

function MidMark(props) {
    return <CardMidMark>{props.element}</CardMidMark>
}

export default MidMark