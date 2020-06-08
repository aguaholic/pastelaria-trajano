import React from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from '../../../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { styles } from '../../../utils'

const Wrapper = styled.nav`
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .toggle-icon {
        font-size: 1.75rem;
        color: ${styles.colors.mainYellow};
        cursor: pointer;
    }
    @media (min-width: 768px) {
        .toggle-icon {
            display: none;
        }
    }
`

const Header = ({ handleNavbar }) => {
    return (
        <Wrapper>
            <AniLink fade to="/">
                <img src={logo} alt="Trajano Pastelaria" />
            </AniLink>
            <FaAlignRight
                className="toggle-icon"
                onClick={() => {
                    handleNavbar()
                }}
            ></FaAlignRight>
        </Wrapper>
    )
}

export default Header
