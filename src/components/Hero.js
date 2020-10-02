import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Hero = ({ img, className, children, home }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home}>
            {children}
        </BackgroundImage>
    )
}

export default styled(Hero)`
    min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '70vh')};
    margin-bottom: 20px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`
