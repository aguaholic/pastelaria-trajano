import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Theme from '../components/Layout/Theme'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ContactForm from '../components/Contact'
import SEO from '../components/seo'

const Wrapper = styled.div`
    width: 90%;
    margin: 2rem auto;

    .text {
        line-height: 2rem;
        color: ${props => props.theme.colors.mainGrey};
        word-spacing: 0.2rem;
        text-align: center;
    }

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 992px) {
        width: 60%;
    }
`

const Contact = ({ data }) => (
    <Theme>
        <Layout>
            <SEO title="Contact" />
            <Hero img={data.contactBcg.childImageSharp.fluid}>
                <Banner title="Fale conosco" />
            </Hero>
            <Wrapper>
                <h2 className="text">
                    Você gostaria nos mandar uma mensagem com perguntas ou
                    sugestões? Entre em contato conosco!
                </h2>
            </Wrapper>
            <ContactForm />
        </Layout>
    </Theme>
)

export const query = graphql`
    query {
        contactBcg: file(relativePath: { eq: "bcg/contactBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Contact
