import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { styles } from '../../../utils'
import icons from '../../../constants/icons'

const Wrapper = styled.div`
    .icon {
        font-size: 1.3rem;
        cursor: pointer;
        ${styles.transFunction()};
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
        color: ${styles.colors.mainYellow};
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
        <Wrapper navbar={navbar}>
            {icons.map(icon => {
                return (
                    <AniLink
                        fade
                        key={icon.id}
                        target="_blank"
                        rel="noreferrer"
                        to={icon.url}
                    >
                        {icon.icon}
                    </AniLink>
                )
            })}
        </Wrapper>
    )
}

export default Icons
