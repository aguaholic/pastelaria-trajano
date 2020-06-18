import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SEO from '../components/seo'

const About = ({ data }) => (
    <Layout>
        <SEO title="About" />
        <Hero img={data.aboutBcg.childImageSharp.fluid}>
            <Banner title="about us" subtitle="Nossa história" />
        </Hero>
    </Layout>
)

export const query = graphql`
    query {
        aboutBcg: file(relativePath: { eq: "bcg/aboutBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default About
