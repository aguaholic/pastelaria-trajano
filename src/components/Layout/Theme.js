import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        mainWhite: '#fff',
        mainBlack: '#262626',
        mainYellow: '#d2aa5c',
        mainGrey: '#474747',
    },
    transDefault: 'transition:all 0.5s ease-in-out',
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
