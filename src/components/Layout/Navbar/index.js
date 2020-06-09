import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'

import Header from './Header'
import Icons from './Icons'
import Links from './Links'

const Wrapper = styled.nav`
    /* .nav-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        color: ${styles.colors.mainGrey};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        ${styles.transDefault};

        &:hover {
            background: ${styles.colors.mainGrey};
            color: ${styles.colors.mainYellow};
            padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
    } */

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
            <Links isOpen={isOpen} navbar className="nav-link" />
            <Icons navbar />
        </Wrapper>
    )
}

export default Navbar
