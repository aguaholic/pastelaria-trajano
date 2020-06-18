import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Layout/Theme'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ContactForm from '../components/Contact'
import SEO from '../components/seo'

const Contact = ({ data }) => (
    <Theme>
        <Layout>
            <SEO title="Contact" />
            <Hero img={data.contactBcg.childImageSharp.fluid}>
                <Banner title="Fale conosco" />
            </Hero>
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
