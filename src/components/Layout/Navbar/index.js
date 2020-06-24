import React, { useState } from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import Header from './Header'
import Icons from './Icons'
import Links from './Links'

const Wrapper = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const handleNavbar = () => setOpen(isOpen => !isOpen)

    return (
        <Theme>
            <Wrapper>
                <Header handleNavbar={handleNavbar} />
                <Links isOpen={isOpen} navbar className="nav-link" />
                <Icons navbar />
            </Wrapper>
        </Theme>
    )
}

export default Navbar
