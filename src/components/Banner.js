import React from 'react'
import styled from 'styled-components'

import { styles } from '../utils'

const Wrapper = styled.div`
    color: ${styles.colors.mainWhite};
    text-align: center;
    .title {
        font-size: 3rem;
        text-transform: uppercase;
        ${styles.letterSpacing({ spacing: '0.75rem' })}
    }
    .subtitle {
        ${styles.textSlanted};
        ${styles.letterSpacing({ spacing: '0.15rem' })};
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`

const Banner = ({ title, subtitle, children }) => {
    return (
        <Wrapper>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            {children}
        </Wrapper>
    )
}

export default Banner
