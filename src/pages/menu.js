import React from 'react'
import { graphql } from 'gatsby'
import Theme from '../components/Layout/Theme'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import MenuComponent from '../components/Menu'
import SEO from '../components/seo'

const Menu = ({ data }) => (
    <Theme>
        <Layout>
            <SEO title="Menu" />
            <Hero img={data.menuBcg.childImageSharp.fluid}>
                <Banner title="Our Menu" subtitle="É hora de comer!" />
            </Hero>
            <MenuComponent />
        </Layout>
    </Theme>
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
