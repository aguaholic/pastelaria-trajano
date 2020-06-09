import styled from 'styled-components'
import { styles } from '../utils'

export const Button = styled.button`
    display: block;
    color: ${styles.colors.mainWhite};
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    ${styles.border({ color: `${styles.colors.mainWhite}` })};
    margin: 2rem auto;
    ${styles.transition({})};
    background: transparent;
    &:hover {
        background: ${styles.colors.mainWhite};
        color: ${styles.colors.mainBlack};
        cursor: pointer;
    }
`
export const SectionButton = styled(Button)`
    color: ${styles.colors.mainBlack};
    ${styles.border({ color: `${styles.colors.mainBlack}` })};

    &:hover {
        background: ${styles.colors.mainBlack};
        color: ${styles.colors.mainYellow};
    }
`
