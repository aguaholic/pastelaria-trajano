import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SEO from '../components/seo'

const Wrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 90vw;
    height: 20rem;
    border: 1px solid #ccc;
    margin: 1.5rem auto;
`
const mapStyles = {
    width: '100%',
    height: 'auto',
}

const Location = props => {
    const coordinateLat =
        props.data.location.edges[0].node.results[0].geometry.location.lat
    const coordinateLng =
        props.data.location.edges[0].node.results[0].geometry.location.lng
    console.log(coordinateLng)
    return (
        <Layout>
            <SEO title="Localização" />
            <Hero img={props.data.menuBcg.childImageSharp.fluid}>
                <Banner title="Nossa" subtitle="Localização" />
            </Hero>
            <Wrapper>
                <Map
                    google={props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: coordinateLat, lng: coordinateLng }}
                >
                    <Marker
                        position={{ lat: coordinateLat, lng: coordinateLng }}
                    />
                </Map>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
    {
        location: allLocationData {
            edges {
                node {
                    results {
                        geometry {
                            location {
                                lat
                                lng
                            }
                        }
                    }
                }
            }
        }
        menuBcg: file(relativePath: { eq: "bcg/menuBcg.jpeg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_GEOCODING_API_KEY,
})(Location)
