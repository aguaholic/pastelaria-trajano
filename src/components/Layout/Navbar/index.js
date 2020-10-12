import React, { useState } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Theme from '../Theme'
import Hamburger from './Hamburger'
import Icons from './Icons'
import Links from './Links'

import logo from '../../../images/logo-pastelaria.png'

const Wrapper = styled.nav`
    height: 5.5rem;
    position: relative;

    @media (min-width: 768px) {
        display: flex;
        height: 7rem;
        align-items: center;
    }

    .nav-link {
        color: ${props => props.theme.colors.mainBlack};

        &:hover {
            color: ${props => props.theme.colors.mainOrange};
        }

        @media (max-width: 768px) {
            &:hover {
                padding: 0.5rem 1rem 0.5rem 1.3rem;
            }
        }
    }
`

const Logo = styled.div`
    img {
        max-width: 12rem;
        margin-left: 0.7rem;
    }

    @media (max-width: 768px) {
        img {
            max-width: 10rem;
        }
    }
`

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleNavbar = () => setOpen(isOpen => !isOpen)

    return (
        <Theme>
            <Wrapper>
                <AniLink fade to="/">
                    <Logo>
                        <img src={logo} alt="Trajano Pastelaria" />
                    </Logo>
                </AniLink>
                <Hamburger handleNavbar={handleNavbar} isOpen={isOpen} />
                <Links isOpen={isOpen} navbar className="nav-link" />
                <Icons navbar />
            </Wrapper>
        </Theme>
    )
}

export default Navbar
