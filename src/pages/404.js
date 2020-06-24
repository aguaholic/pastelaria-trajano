import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Theme from '../components/Layout/Theme'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import { SectionButton } from '../components/Button'

const NotFoundPage = ({ data }) => (
    <Theme>
        <Layout>
            <SEO title="404: Not found" />
            <header className="error">
                <Hero img={data.errorBcg.childImageSharp.fluid}>
                    <Banner title="OPS!" subtitle="Página não encontrada :/" />
                </Hero>
            </header>
            <AniLink fade to="/" className="btn-white">
                <SectionButton>Home </SectionButton>
            </AniLink>
        </Layout>
    </Theme>
)

export const query = graphql`
    query {
        errorBcg: file(relativePath: { eq: "bcg/errorBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default NotFoundPage
