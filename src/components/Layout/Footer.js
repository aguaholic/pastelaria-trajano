import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { styles } from '../../utils'

import Icons from './Navbar/Icons'
import Links from './Navbar/Links'

const Wrapper = styled.footer`
    padding: 2rem 0;
    background: #262626;
    color: #fff;
    text-align: center;

    .icon {
        color: #fff;
        ${styles.transition({})}
    }

    .title {
        margin: 0 auto 1.5rem;
        width: 20rem;
        color: #d2aa5c;
        text-transform: uppercase;
        font-size: 1.2rem;
    }

    .copyright {
        font-size: 0.75rem;
        text-transform: capitalize;
    }

    .nav-link {
        color: #fff;

        &:hover {
            color: #d2aa5c;
        }
    }
`

const Footer = () => {
    return (
        <Wrapper>
            <div className="title">Trajano Pastelaria</div>
            <Links footer />
            <Icons />
            <div className="copyright">
                copyright &copy; {new Date().getFullYear()} all rights reserved
            </div>
        </Wrapper>
    )
}

export default Footer
