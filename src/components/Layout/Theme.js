import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        mainWhite: '#fff',
        mainBlack: '#262626',
        mainYellow: '#d2aa5c',
        mainGrey: '#474747',
    },
    transDefault: 'all 0.5s ease-in-out',
    transSecondary: 'all 0.5s linear',
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
    fontSlanted: ['Caveat', 'cursive'],
    border: [' 0.15rem solid white'],
    letterSpacing: ['0.1rem'],
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
