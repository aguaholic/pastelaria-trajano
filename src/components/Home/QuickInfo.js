import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Section from '../Section'
import Title from '../Title'
import { SectionButton } from '../Button'

const Wrapper = styled.div`
    width: 90%;
    margin: 2rem auto;

    .text {
        line-height: 2rem;
        color: ${props => props.theme.colors.mainGrey};
        word-spacing: 0.2rem;
    }

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 992px) {
        width: 60%;
    }
`

const QuickInfo = () => {
    return (
        <Section>
            <Title message="Nós queremos te contar" title="A nossa missão" />
            <Wrapper>
                <p className="text">
                    Velit officia excepteur dolor quis ullamco Lorem et laborum
                    minim nisi enim dolor. Mollit commodo reprehenderit id ipsum
                    officia. Lorem laborum minim esse nulla sunt amet enim
                    consectetur laborum. Sit incididunt culpa adipisicing irure
                    laboris ipsum consequat id. Laborum aliqua sit labore
                    laboris adipisicing ad ullamco est esse veniam.
                </p>
                <AniLink fade to="/about">
                    <SectionButton>Sobre nós</SectionButton>
                </AniLink>
            </Wrapper>
        </Section>
    )
}

export default QuickInfo
