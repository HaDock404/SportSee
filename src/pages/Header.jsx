import styled from "styled-components";
import Logo from '../assets/logo.svg'
import Menu from "../components/Menu";

const CardHeader = styled.header`
    background-color: black;
    height: 91px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

const CardLogo = styled.img`
    margin-left: 29px;
    margin-right: 100px;
    `

const CardNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 100px;
    padding-right: 100px;
    `

function Header() {
    return (
        <CardHeader>
            <CardLogo src={Logo}/>
            <CardNav>
                <Menu/>
            </CardNav>
        </CardHeader>
    )
}

export default Header