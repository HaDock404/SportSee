import styled from "styled-components"

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

export default Icon