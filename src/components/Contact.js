import React from 'react'
import styled from 'styled-components'

import { SectionButton } from '../components/Button'

const Wrapper = styled.section`
    margin-top: 16px;

    .contact {
        padding: 4rem 0;
    }

    .center {
        width: 80vw;
        margin: 0 auto;
    }

    @media screen and (min-width: 992px) {
        .center {
            width: 50vw;
            margin: 0 auto;
        }
    }

    label {
        text-transform: capitalize;
        display: block;
        margin-bottom: 0.5rem;
    }

    .formControl,
    .submit {
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1rem;
        padding: 0.375rem 0.75rem;
        border: ${props => `1px solid ${props.theme.colors.mainGrey}`};
        border-radius: 0.25rem;
    }
`

const Contact = () => {
    return (
        <Wrapper className="contact">
            <div className="center">
                <form
                    action="https://formspree.io/mzbjgnzq"
                    method="POST"
                    className="form"
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="formControl"
                            placeholder="Seu nome"
                            aria-label="Insira seu nome"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="formControl"
                            placeholder="Seu email"
                            aria-label="Insira seu email"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            className="formControl"
                            placeholder="Escreva aqui sua mensagem"
                            aria-label="Insira seu mensagem"
                        />
                    </div>
                    <SectionButton
                        type="submit"
                        className="submit"
                        aria-label="Clique para enviar"
                    >
                        Enviar mensagem
                    </SectionButton>
                </form>
            </div>
        </Wrapper>
    )
}

export default Contact
