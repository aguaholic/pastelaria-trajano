import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../../constants/links'

const LINK_HEIGHT = 36

const Wrapper = styled.ul`
    position: absolute;
    z-index: 10;
    overflow-y: scroll;
    height: ${props =>
        props.isOpen
            ? React.Children.toArray(props.children).length * LINK_HEIGHT
            : 0}px;
    width: 100%;

    background-color: white;
    text-align: left;
    -webkit-overflow-scrolling: touch;
    text-transform: capitalize;
    transition: ${props => props.theme.transSecondary};

    @media (min-width: 768px) {
        position: relative;
        justify-content: center;
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
            position: relative;
            display: flex;
            justify-content: center;
            height: 30px;
            background-color: transparent;
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
