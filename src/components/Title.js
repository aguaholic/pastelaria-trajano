import React from 'react'
import styled from 'styled-components'
import Theme from '../components/Layout/Theme'

const Wrapper = styled.div`
    text-align: center;

    .message {
        font-family: ${props => props.theme.fontSlanted};
        letter-spacing: ${props => props.theme.letterSpacing};
        font-size: 2rem;
        color: ${props => props.theme.mainYellow};
    }

    .title {
        letter-spacing: ${props => props.theme.letterSpacing};
        font-size: 2rem;
        color: ${props => props.theme.colors.mainYellow};
        text-transform: uppercase;
    }

    .underline {
        width: 5rem;
        height: 0.2rem;
        background: ${props => props.theme.colors.mainYellow};
        margin: 0.5rem auto;
    }
`

const Title = ({ title, message }) => {
    return (
        <Theme>
            <Wrapper>
                <h3 className="message">{message}</h3>
                <h1 className="title">{title}</h1>
                <div className="underline" />
            </Wrapper>
        </Theme>
    )
}

export default Title
