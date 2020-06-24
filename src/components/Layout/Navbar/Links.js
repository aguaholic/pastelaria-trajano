import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../../constants/links'

const Wrapper = styled.ul`
    li {
        list-style-type: none;
    }

    ${({ navbar }) =>
        navbar &&
        `
        .nav-link {
        display: block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        color: ${props => props.theme.colors.mainGrey};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        transition: ${props => props.theme.transDefault};

        &:hover {
            background:  ${props => props.theme.colors.mainGrey};
            color: ${props => props.theme.colors.mainYellow};
            padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
    }

    `}
    height: ${props => (props.isOpen ? '152px' : '0px')};

    ${({ footer }) =>
        footer &&
        `
        display: flex;
        justify-content: space-around;
        height: 20px;

        &:hover {
            background: #262626;
            color: #d2aa5c;
        }
    `}

    overflow: hidden;
    transition: ${props => props.theme.tranSecondary};

    @media (min-width: 768px) {
        height: auto;
        display: flex;
        margin: 0 auto;
        .nav-link:hover {
            background: ${props => props.theme.colors.mainWhite};
            padding: 0.5rem 1rem;
        }
    }
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
