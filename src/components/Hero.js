import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Hero = ({ img, className, children, home }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {home ? <div className="banner">{children}</div> : children}
        </BackgroundImage>
    )
}

export default styled(Hero)`
    min-height: ${props => (props.home ? 'calc(90vh - 62px)' : '50vh')};
    margin-bottom: 20px;

    ${props => !props.home && 'background: rgba(0, 0, 0, 0.5);'}

    .banner {
        height: 23rem;
        background: rgba(0, 0, 0, 0.5);

        display: flex;

        align-items: center;
        justify-content: center;

        width: 100%;
    }

    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 1 !important;
    display: flex;
    align-items: ${props => (props.home ? 'flex-end' : 'center')};
    justify-content: center;
`
