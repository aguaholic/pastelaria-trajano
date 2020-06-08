import React, { useState } from 'react'
import styled from 'styled-components'

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
    console.log(isOpen)

    return (
        <Wrapper>
            <Header handleNavbar={handleNavbar} />
            <Links isOpen={isOpen} />
            <Icons />
        </Wrapper>
    )
}

export default Navbar
