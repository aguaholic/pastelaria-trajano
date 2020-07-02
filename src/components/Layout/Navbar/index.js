import React, { useState } from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import Header from './Header'
import Icons from './Icons'
import Links from './Links'

const Wrapper = styled.nav`
    position: relative;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }

    .nav-link {
        color: ${props => props.theme.colors.mainBlack};

        &:hover {
            color: ${props => props.theme.colors.mainYellow};
        }

        @media (max-width: 768px) {
            &:hover {
                padding: 0.5rem 1rem 0.5rem 1.3rem;
            }
        }
    }
`

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleNavbar = () => setOpen(isOpen => !isOpen)

    return (
        <Theme>
            <Wrapper>
                <Header handleNavbar={handleNavbar} isOpen={isOpen} />
                <Links isOpen={isOpen} navbar className="nav-link" />
                <Icons navbar />
            </Wrapper>
        </Theme>
    )
}

export default Navbar
