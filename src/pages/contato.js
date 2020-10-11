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
    width: 80vw;
    margin: 2rem auto 1rem;

    @media (min-width: 992px) {
        width: 50vw;
    }

    address {
        margin-top: 2rem;
        margin-bottom: 3rem;
        font-size: 1rem;

        hr {
            margin: 1rem 0;
            width: 15vw;
        }
    }
`

const LinkContainer = styled.div`
    margin: 0 auto 3rem auto;
    border: 0.5rem solid #face33;
    border-radius: 60px;
    padding: 0.5rem;

    display: inline-flex;
    align-items: center;
    color: #000;

    :hover {
        text-shadow: 3px 5px 2px #e8e8e8;
    }

    .whatsapp-icon {
        font-size: 4rem;
        margin-right: 1rem;
        color: #25d366;

        @media (max-width: 768px) {
            font-size: 10rem;
        }
    }

    @media (min-width: 992px) {
        width: 50vw;
        padding: 2.5rem;
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
                <address>
                    <h1>Endereço</h1>
                    <hr />
                    Rua Atílio Bortolan, 1234 <br />
                    13480-200 <br />
                    Limeira - SP
                    <hr />
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/dir/?api=1&destination=Trajano+Pastelaria+e+Pestiscaria,+Rua+Armindo+Tank,+139+-+Vila+Anita,+Limeira+-+SP,+13484-299,+Brazil"
                    >
                        Ver no mapa
                    </a>
                </address>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/5519997006287?text=Pastelaria%20Trajano"
                >
                    <LinkContainer>
                        <FaWhatsapp className="whatsapp-icon" />
                        <h1>Clique aqui para fazer pedidos por Whatsapp</h1>
                    </LinkContainer>
                </a>
                <p>
                    Ou nos mande um email * Pedidos apenas por Whatsapp ou
                    telefone *
                </p>
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
