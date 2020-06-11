import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import QuickInfo from '../components/Home/QuickInfo'
import Gallery from '../components/Home/Gallery'
import Menu from '../components/Menu'
import { Button } from '../components/Button'
import SEO from '../components/seo'
import Theme from '../components/Layout/Theme'

const Link = styled(AniLink)`
    color: white;
    &:hover {
        color: black;
    }
`
const IndexPage = ({ data }) => (
    <Theme>
        <Layout>
            <SEO title="Home" />
            <Hero home img={data.homeBcg.childImageSharp.fluid}>
                <Banner
                    title="Trajano Pastelaria"
                    subtitle="Melhor pastel do mundo"
                >
                    <Button>
                        <Link fade to="/menu">
                            Cardápio
                        </Link>
                    </Button>
                </Banner>
            </Hero>
            <QuickInfo />
            <Gallery />
            <Menu />
        </Layout>
    </Theme>
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
