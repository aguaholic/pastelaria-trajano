import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Navbar from '../components/Globals/Navbar'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Lato, "Lucida Grande", Tahoma, Sans-Serif;
        color:#262626;
        background:#fff;
}
`

const Layout = ({ children }) => {
    console.log(GlobalStyle.body)

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
