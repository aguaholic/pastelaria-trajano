import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;

    @media (min-width: 768px) {
        width: 80%;
    }

    .product-content {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors.mainYellow};
        margin-top: 0.5rem;
    }

    .info {
        margin-top: 0.5rem;
        word-spacing: 0.2rem;
        text-transform: lowercase;
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
            <Img fixed={fixed} alt={name} />
            <div>
                <div className="product-content">
                    <h4 className="name">{name}</h4>
                    <h4>${price.toFixed(2)}</h4>
                </div>
                <p className="info">{description}</p>
            </div>
        </Wrapper>
    )
}

export default MenuItem
