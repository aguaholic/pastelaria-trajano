import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { FaWhatsapp } from 'react-icons/fa'

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
        margin-bottom: 1rem;
    }

    @media (min-width: 768px) {
        width: 70%;
    }

    @media (min-width: 992px) {
        width: 60%;
    }
`

const LinkContainer = styled.div`
    display: inline-flex;
    margin: auto;

    a {
        color: #000;
        :hover {
            text-shadow: 3px 5px 2px #e8e8e8;
        }
    }

    .whatsapp-icon {
        font-size: 4rem;
        color: #25d366;
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
                <h2 className="text">Pedidos, sugestões ou perguntas?</h2>
                <LinkContainer>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://wa.me/5519997006287?text=Pastelaria%20Trajano"
                    >
                        <p>Clique aqui para mandar uma mensagem por Whatsapp</p>

                        <FaWhatsapp className="whatsapp-icon" />
                    </a>
                </LinkContainer>
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
