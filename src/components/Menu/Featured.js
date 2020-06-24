import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import Title from '../Title'
import Section from '../Section'
import { SectionButton } from '../Button'

const Item = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 3rem;

    @media (min-width: 576px) {
        grid-template-columns: 95%;
    }

    @media (min-width: 776px) {
        grid-template-columns: 80%;
        justify-content: center;
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

const getItems = graphql`
    query {
        items: allContentfulCardapio(
            filter: { category: { eq: "minipastel" } }
            limit: 4
        ) {
            edges {
                node {
                    id: contentful_id
                    name: nome
                    price
                    category
                    description {
                        description
                    }
                    image: imagem {
                        fixed(width: 140, height: 140) {
                            ...GatsbyContentfulFixed_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Menu = () => {
    const { items } = useStaticQuery(getItems)
    const allItems = items.edges

    return (
        <Section>
            <Title title="São os mais pedidos" message="Esses" />
            <Item>
                {allItems.map(({ node }) => {
                    return <MenuItem key={node.id} item={node} />
                })}
            </Item>
            <AniLink fade to="/cardapio">
                <SectionButton>Cardápio</SectionButton>
            </AniLink>
        </Section>
    )
}

export default Menu
