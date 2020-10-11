import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import Title from '../Title'
import Section from '../Section'
import { SectionButton } from '../Button'

const Grid = styled.div`
    display: grid;
    grid-row-gap: 3rem;
    margin: 3rem 0;
    justify-items: center;

    @media (min-width: 576px) {
        grid-template-columns: 95%;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

const getItems = graphql`
    query {
        items: allContentfulDestaque(sort: { fields: createdAt }, limit: 1) {
            edges {
                node {
                    featuredMenuItems {
                        id: contentful_id
                        name
                        price
                        description {
                            description
                        }
                        image {
                            fixed(width: 140, height: 140) {
                                ...GatsbyContentfulFixed_withWebp
                            }
                        }
                    }
                }
            }
        }
    }
`

const Featured = () => {
    const { items } = useStaticQuery(getItems)
    const allItems = items.edges[0].node.featuredMenuItems

    return (
        <Section>
            <Title title="São os mais pedidos" message="Esses" />
            <Grid>
                {allItems.map(node => {
                    return <MenuItem key={node.id} item={node} />
                })}
            </Grid>
            <AniLink fade to="/cardapio">
                <SectionButton>Cardápio</SectionButton>
            </AniLink>
        </Section>
    )
}

export default Featured
