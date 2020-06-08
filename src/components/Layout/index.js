import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Navbar from './Navbar'

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap'); */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration:none;
    }

    body {
        font-family: Lato, "Lucida Grande", Tahoma, Sans-Serif;
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
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
