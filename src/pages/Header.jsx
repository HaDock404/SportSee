import styled from "styled-components";
import Logo from '../assets/logo.svg'
import Menu from "../components/Menu";

/**
 * It's a function that display header of the app
 *
 * @return  {React.ReactElement}A React component.
 */

const CardHeader = styled.header`
    background-color: black;
    height: 91px;
    display: flex;
    flex-direction: row;
    align-items: center;
    `

const CardLogo = styled.img`
    margin-left: 29px;
    @media only screen and (min-width: 1400px) {
        margin-right: 100px;
    }
    @media only screen and (max-width: 1399px) {
        margin-right: 0px;
    }    
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