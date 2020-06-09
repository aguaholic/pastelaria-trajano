import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

const Wrapper = styled.div`
    text-align: center;

    .message {
        ${styles.textSlanted};
        ${styles.letterSpacing({ spacing: '0.3rem' })};
        font-size: 2rem;
        color: ${styles.colors.mainYellow};
    }

    .title {
        ${styles.letterSpacing({ spacing: '0.3rem' })};
        font-size: 2rem;
        color: ${styles.colors.mainYellow};
        text-transform: uppercase;
    }

    .underline {
        width: 5rem;
        height: 0.2rem;
        background: ${styles.colors.mainYellow};
        margin: 0.5rem auto;
    }
`

const Title = ({ title, message }) => {
    return (
        <Wrapper>
            <h3 className="message">{message}</h3>
            <h1>{title}</h1>
            <div className="underline" />
        </Wrapper>
    )
}

export default Title
