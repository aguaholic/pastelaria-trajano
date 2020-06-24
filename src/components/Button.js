import styled from 'styled-components'

export const Button = styled.button`
    display: block;
    color: ${props => props.theme.colors.mainYellow};
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    border: ${props => props.theme.border};
    margin: 2rem auto;
    transition: ${props => props.theme.transDefault};
    background: transparent;
    &:hover {
        background: ${props => props.theme.mainWhite};
        color: ${props => props.theme.colors.mainBlack};
        cursor: pointer;
    }
`
export const SectionButton = styled(Button)`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.mainBlack};
    border: ${props => props.theme.colors.mainBlack};

    &:hover {
        background: ${props => props.theme.colors.mainBlack};
        color: ${props => props.theme.colors.mainYellow};
    }
`
