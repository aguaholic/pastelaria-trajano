import React from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { styles } from '../../../utils'
import links from '../../../constants/links'

const Wrapper = styled.ul`
    li {
        list-style-type: none;
    }
    .nav-link {
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
    }
    height: ${props => (props.isOpen ? '152px' : '0px')};
    overflow: hidden;
    ${styles.transObject({ time: '1s' })};
    @media (min-width: 768px) {
        height: auto;
        display: flex;
        margin: 0 auto;
        .nav-link:hover {
            background: ${styles.colors.mainWhite};
            padding: 0.5rem 1rem;
        }
    }
`

const Links = ({ isOpen }) => {
    return (
        <Wrapper isOpen={isOpen}>
            {links.map(link => {
                return (
                    <li key={link.id}>
                        <AniLink fade to={link.path} className="nav-link">
                            {link.text}
                        </AniLink>
                    </li>
                )
            })}
        </Wrapper>
    )
}

export default Links
