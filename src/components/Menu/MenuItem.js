import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    @media (min-width: 576px) {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 1rem;
    }

    .img {
        border-radius: 0.5rem;
    }

    .product-content {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        text-transform: uppercase;
    }

    .info {
        margin-top: 0.5rem;
        word-spacing: 0.2rem;
        text-transform: lowercase;
    }

    .name {
        color: #d2aa5c;
        margin-top: 0.5rem;
    }

    .price {
        color: #d2aa5c;
        margin-top: 0.5rem;
    }
`

const MenuItem = ({ item }) => {
    const {
        name,
        price,
        description: { description },
    } = item
    const { fixed } = item.image

    return (
        <Wrapper>
            <Img fixed={fixed} className="img" />
            <div className="text">
                <div className="product-content">
                    <h3 className="name">{name}</h3>
                    <h3 className="price">${price}0</h3>{' '}
                </div>
                <p className="info">{description}</p>
            </div>
        </Wrapper>
    )
}

export default MenuItem
