import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Button } from '../components/Button'
import SEO from '../components/seo'

const Link = styled(AniLink)`
    color: white;
    &:hover {
        color: black;
    }
`
const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Hero home img={data.homeBcg.childImageSharp.fluid}>
            <Banner
                title="Trajano Pastelaria"
                subtitle="Melhor pastel do mundo"
            >
                <Button>
                    <Link fade to="/menu">
                        Menu
                    </Link>
                </Button>
            </Banner>
        </Hero>
    </Layout>
)

export const query = graphql`
    query {
        homeBcg: file(relativePath: { eq: "bcg/homeBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default IndexPage
