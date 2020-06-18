import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import Title from '../Title'
import Section from '../Section'

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
        items: allContentfulCardapio {
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
                            ...GatsbyContentfulFixed
                        }
                    }
                }
            }
        }
    }
`

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ['all', ...categories]
    return categories
}

const Menu = () => {
    const { items } = useStaticQuery(getItems)
    const allItems = items.edges

    const [stateItems, setStateItems] = useState(allItems)

    const categories = getCategories(allItems)
    console.log(categories)

    const handleItems = category => {
        let tempItems = [...allItems]
        if (category === 'all') {
            setStateItems(tempItems)
        } else {
            let items = tempItems.filter(
                ({ node }) => node.category === category
            )
            setStateItems(items)
        }
    }

    return (
        <>
            {allItems.length > 0 ? (
                <Section>
                    <Title title="Mini" message="Pasteis" />
                    <div>
                        {categories.map((category, index) => {
                            return (
                                <button
                                    onClick={() => {
                                        handleItems(category)
                                    }}
                                    key={index}
                                    type="button"
                                >
                                    {category}
                                </button>
                            )
                        })}
                    </div>
                    <Item>
                        {stateItems.map(({ node }) => {
                            return <MenuItem key={node.id} item={node} />
                        })}
                    </Item>
                </Section>
            ) : (
                <section>
                    <div>
                        <Title title="Best of our menu" />
                        <div>
                            <div>
                                <h1>The are no to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Menu
