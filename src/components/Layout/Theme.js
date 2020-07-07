import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        mainWhite: '#fff',
        //mainBlack: '#262626',
        // mainYellow: '#d2aa5c',
        mainGrey: '#474747', //tirar
        mainOrange: '#e16036',
        mainYellow: '#FACE33',
        mainRed: '#720e07',
        mainBlack: '#001514',
        // secondaryOrange: '#f96f5d',
    },
    transDefault: 'all 0.5s ease-in-out',
    transSecondary: 'all 0.5s linear',
    fonts: ['Roboto', 'sans-serif'],
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
