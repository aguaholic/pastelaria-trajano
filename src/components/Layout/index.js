import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        font-family: Montserrat, "Lucida Grande", Tahoma, Sans-Serif;
        color:#262626;
        background:#fff;
    }
`

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
