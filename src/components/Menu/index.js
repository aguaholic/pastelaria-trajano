import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import MenuItem from './MenuItem'
import Title from '../Title'
import Section from '../Section'
import Dropdown from './Dropdown'

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

const DropdownContainer = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;
`

const getCategories = graphql`
    query {
        categories: allContentfulCardapioCategory(
            sort: { fields: [order], order: ASC }
        ) {
            edges {
                node {
                    id
                    name
                    order
                    items: menuItemReferences {
                        id: contentful_id
                        name
                        price
                        description {
                            description
                        }
                        image {
                            fixed(width: 140, height: 140) {
                                ...GatsbyContentfulFixed
                            }
                        }
                    }
                }
            }
        }
    }
`

const Menu = () => {
    const { categories } = useStaticQuery(getCategories)
    const [currentCategory, setCategory] = useState('')

    const handleItems = category => {
        setCategory(category)
    }

    return (
        <Section>
            <Title title="Cardápio" message="Nosso" />
            <DropdownContainer>
                <Dropdown
                    placeholder="Selecione"
                    headerTitle={currentCategory}
                    categories={categories}
                    onSelectItems={handleItems}
                />
            </DropdownContainer>
            {categories.edges
                .filter(category => {
                    return currentCategory === 'Todos' || currentCategory === ''
                        ? true
                        : category.node.name === currentCategory
                })
                .map(category => {
                    return (
                        <div key={category.node.id}>
                            <CategoryTitle>{category.node.name}</CategoryTitle>
                            <Item>
                                {category.node.items.map(item => {
                                    return (
                                        <MenuItem key={item.id} item={item} />
                                    )
                                })}
                            </Item>
                        </div>
                    )
                })}
        </Section>
    )
}

export default Menu
