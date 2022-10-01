import styled from "styled-components";
import { Link } from "react-router-dom";

const CardUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    style-decoration: none;
    padding: 0px;
    `

const CardLi = styled.li`
    text-decoration none;
    padding: 0px;
    `

const CardLink = styled(Link)`
    font-size: 24px;
    font-weight: 500;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-decoration none;`

function Menu() {
    return (
        <CardUl>
            <CardLi>
                <CardLink to='/'>Accueil</CardLink>
            </CardLi>
            <CardLi>
                <CardLink to='/'>Profil</CardLink>
            </CardLi>
            <CardLi>
                <CardLink to='/'>Réglage</CardLink>
            </CardLi>
            <CardLi>
                <CardLink to='/'>Communauté</CardLink>
            </CardLi>
        </CardUl>

    );
}

export default Menu