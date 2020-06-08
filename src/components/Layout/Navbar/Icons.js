import React from 'react'
import styled from 'styled-components'

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
    display: none;

    @media (min-width: 768px) {
        display: flex;
        width: 10rem;
        justify-content: space-around;
    }
`

const Icons = () => {
    return (
        <Wrapper>
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
    )
}

export default Icons
