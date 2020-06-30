import React from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Theme from '../Theme'
import logo from '../../../images/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Wrapper = styled.nav`
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggle-icon {
        font-size: 1.75rem;
        color: ${props => props.theme.colors.mainBlack};
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .toggle-icon {
            display: none;
        }
    }
`

const Header = ({ handleNavbar, isOpen }) => {
    return (
        <Theme>
            <Wrapper>
                <AniLink fade to="/">
                    <img src={logo} alt="Trajano Pastelaria" />
                </AniLink>
                {!isOpen ? (
                    <FaBars
                        className="toggle-icon"
                        onClick={() => {
                            handleNavbar()
                        }}
                    ></FaBars>
                ) : (
                    <FaTimes
                        className="toggle-icon"
                        onClick={() => {
                            handleNavbar()
                        }}
                    ></FaTimes>
                )}
            </Wrapper>
        </Theme>
    )
}

export default Header
