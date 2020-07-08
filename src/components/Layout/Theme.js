import React from 'react'
import { ThemeProvider } from 'styled-components'
import './font.css'

const theme = {
    colors: {
        mainWhite: '#fff',
        mainOrange: '#e16036',
        mainYellow: '#FACE33',
        mainRed: '#720e07',
        mainBlack: '#001514',
    },
    transDefault: 'all 0.5s ease-in-out',
    transSecondary: 'all 0.5s linear',
    fonts: ['Montserrat', 'sans-serif'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
    border: [' 0.15rem solid white'],
    letterSpacing: ['0.1rem'],
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
