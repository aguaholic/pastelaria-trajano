import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../../constants/links'

const Wrapper = styled.ul`
    height: ${props => (props.isOpen ? '190px' : '0px')};
    overflow: hidden;
    transition: ${props => props.theme.transSecondary};

    @media (min-width: 768px) {
        height: auto;
        display: flex;
        margin: 0 auto;
    }

    li {
        list-style-type: none;
    }

    .nav-link {
        cursor: pointer;
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        text-decoration: none;
        font-weight: 700;
        transition: ${props => props.theme.transDefault};
    }

    ${({ navbar }) =>
        navbar &&
        `
            .nav-link {
                display: block;
            }
    `}

    ${({ footer }) =>
        footer &&
        `
            display: flex;
            justify-content: space-around;
            height: 20px;
    `}
`

const Links = ({ isOpen, navbar, footer }) => {
    return (
        <Theme>
            <Wrapper isOpen={isOpen} navbar={navbar} footer={footer}>
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
        </Theme>
    )
}

export default Links
