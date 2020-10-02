import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import icons from '../../../constants/icons'

const Wrapper = styled.div`
    position: absolute;
    z-index: 10;
    right: 0;

    .icon {
        font-size: 1.3rem;
        cursor: pointer;
        transition: ${props => props.theme.transSecondary};
    }

    .facebook-icon {
        color: #3b579d;
    }

    .instagram-icon {
        color: #da5f53;
    }

    .twitter-icon {
        color: #25d366;
    }

    .icon:hover {
        color: ${props => props.theme.colors.mainYellow};
    }

    display: flex;
    width: 10rem;
    justify-content: space-around;
    margin: 1rem auto;

    ${({ navbar }) =>
        navbar &&
        `
            display: none;
            width: none;
            justify-content: none;
            margin: none;

            @media (min-width: 768px) {
                position: relative;
                height: auto;
                display: flex;
                width: 10rem;
                justify-content: space-around;
                margin: 0 16px 0 auto;
            }
    `}

    ${({ footer }) =>
        footer &&
        `
            position: relative;

    `}
`

const Icons = ({ navbar, footer }) => {
    return (
        <Theme>
            <Wrapper navbar={navbar} footer={footer}>
                {icons.map(icon => {
                    return (
                        <a
                            key={icon.id}
                            target="_blank"
                            rel="noreferrer"
                            href={icon.url}
                        >
                            {icon.icon}
                        </a>
                    )
                })}
            </Wrapper>
        </Theme>
    )
}

export default Icons
