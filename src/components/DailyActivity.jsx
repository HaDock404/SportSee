import styled from "styled-components"

const CardDalyGraphic = styled.article`
    background-color: #FBFBFB;
    width: 100%;
    height: 320px;
    border-radius: 5px;
    margin-bottom: 30px;
    `

function DailyActivity(props) {
    return (
        <CardDalyGraphic>{props.element}</CardDalyGraphic>
    )
}

export default DailyActivity