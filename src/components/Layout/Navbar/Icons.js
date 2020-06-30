import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'
import icons from '../../../constants/icons'

const Wrapper = styled.div`
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
        color: #3ab7f0;
    }
    .icon:hover {
        color: ${props => props.theme.colors.mainYellow};
    }
    display: ${props => (props.navbar ? 'none' : 'flex')};
    width: ${props => (props.navbar ? 'none' : '10rem')};
    justify-content: ${props => (props.navbar ? 'none' : ' space-around')};
    margin: ${props => (props.navbar ? 'none' : '1rem  auto')};

    @media (min-width: 768px) {
        display: flex;
        width: 10rem;
        justify-content: space-around;
    }
`

const Icons = ({ navbar }) => {
    return (
        <Theme>
            <Wrapper navbar={navbar}>
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
