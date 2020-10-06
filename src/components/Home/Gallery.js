import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from '../Section'
import styled from 'styled-components'

const GalleryWrapper = styled.div`
    display: grid;
    max-width: 75rem;
    margin: 0 auto 1.5rem;
    grid-row-gap: 0.25rem;
    grid-column-gap: 0.25rem;

    @media (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);

        .gatsby-image-wrapper {
            height: 100%;
        }
    }
`

const getImages = graphql`
    query galleryImgs {
        galleryImgs: allFile(
            filter: { relativeDirectory: { eq: "homeGallery" } }
        ) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Gallery = () => {
    const { galleryImgs } = useStaticQuery(getImages)
    const images = galleryImgs.edges
    return (
        <Section>
            <GalleryWrapper>
                {images.map(({ node, index }) => {
                    return (
                        <div key={index}>
                            <Img
                                fluid={node.childImageSharp.fluid}
                                alt="Trajano Pastelaria"
                            />
                        </div>
                    )
                })}
            </GalleryWrapper>
        </Section>
    )
}

export default Gallery
