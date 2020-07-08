import React from 'react'
import styled from 'styled-components'
import Theme from '../components/Layout/Theme'

const Wrapper = styled.div`
    color: ${props => props.theme.colors.mainWhite};
    text-align: center;
    letter-spacing: ${props => props.theme.letterSpacing};

    .title {
        font-size: 3rem;
        text-transform: uppercase;
    }
    .subtitle {
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`

const Banner = ({ title, subtitle, children }) => {
    return (
        <Theme>
            <Wrapper>
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                {children}
            </Wrapper>
        </Theme>
    )
}

export default Banner
