import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SEO from '../components/seo'

const Menu = ({ data }) => (
    <Layout>
        <SEO title="Menu" />
        <Hero img={data.menuBcg.childImageSharp.fluid}>
            <Banner title="Our Menu" subtitle="É hora de comer!" />
        </Hero>
    </Layout>
)

export const query = graphql`
    query {
        menuBcg: file(relativePath: { eq: "bcg/menuBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Menu
