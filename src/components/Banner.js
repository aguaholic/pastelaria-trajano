import React from 'react'
import styled from 'styled-components'
import Theme from '../components/Layout/Theme'

const Wrapper = styled.div`
    /* color: ${props => props.theme.colors.mainWhite}; */
    text-align: center;
    letter-spacing: ${props => props.theme.letterSpacing};
    text-transform: uppercase;

    .title {
        font-size: 3rem;
        color: ${props => props.theme.colors.mainOrange};
    }

    .subtitle {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.mainYellow};
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
