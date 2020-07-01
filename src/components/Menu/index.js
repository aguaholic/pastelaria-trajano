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
const CategoryTitle = styled.h1`
    text-transform: capitalize;
    margin-top: 15px;
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
    categories = ['Todos', ...categories]
    return categories
}

const Menu = () => {
    const { items } = useStaticQuery(getItems)
    const allItems = items.edges
    const [currentCategory, setCategory] = useState('Todos')

    const categories = getCategories(allItems)

    const handleItems = category => {
        setCategory(category)
        console.log(category)
    }

    const categoryMap = allItems.reduce((categoryMap, { node }) => {
        return {
            ...categoryMap,
            [node.category]: categoryMap[node.category]
                ? {
                      ...categoryMap[node.category],
                      items: [...categoryMap[node.category].items, node],
                  }
                : {
                      categoryName: node.category,
                      items: [node],
                  },
        }
    }, {})

    return (
        <>
            {allItems.length > 0 ? (
                <Section>
                    <Title title="Cardápio" message="Nosso" />
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
                    <div>
                        {Object.keys(categoryMap)
                            .filter(category =>
                                currentCategory === 'Todos'
                                    ? true
                                    : category === currentCategory
                            )
                            .map((category, index) => {
                                const name = categoryMap[category].categoryName
                                const items = categoryMap[category].items

                                return (
                                    <div key={index}>
                                        <CategoryTitle>{name}</CategoryTitle>
                                        <Item>
                                            {items.map(item => {
                                                return (
                                                    <MenuItem
                                                        key={item.id}
                                                        item={item}
                                                    />
                                                )
                                            })}
                                        </Item>
                                    </div>
                                )
                            })}
                    </div>
                </Section>
            ) : (
                <section>
                    <h1>Cade?</h1>
                </section>
            )}
        </>
    )
}

export default Menu
