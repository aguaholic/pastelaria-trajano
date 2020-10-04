import React from 'react'
import styled from 'styled-components'

import Theme from '../Theme'

import { FaBars, FaTimes } from 'react-icons/fa'

const Wrapper = styled.div`
    position: absolute;

    right: 1rem;
    top: 2rem;

    .toggle-icon {
        font-size: 1.75rem;
        color: ${props => props.theme.colors.mainBlack};
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .toggle-icon {
            display: none;
        }
    }
`

const Hamburger = ({ handleNavbar, isOpen }) => {
    return (
        <Theme>
            <Wrapper>
                {!isOpen ? (
                    <FaBars
                        className="toggle-icon"
                        onClick={() => {
                            handleNavbar()
                        }}
                    ></FaBars>
                ) : (
                    <FaTimes
                        className="toggle-icon"
                        onClick={() => {
                            handleNavbar()
                        }}
                    ></FaTimes>
                )}
            </Wrapper>
        </Theme>
    )
}

export default Hamburger
