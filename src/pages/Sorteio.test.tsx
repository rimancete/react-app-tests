import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipante'
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"
import { RecoilRoot } from "recoil"
import Sorteio from "./Sorteio"

jest.mock('../state/hooks/useListaDeParticipante')
jest.mock('../state/hooks/useResultadoSorteio')


describe('secret santa generator screen', () => {
    const participants = [
        'Ana',
        'Catarina',
        'Osvaldo'
    ]

    const shuffleResult = new Map([
        ['Ana', 'Osvaldo'],
        ['Osvaldo', 'Catarina'],
        ['Catarina', 'Ana']
    ])
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participants);
        (useResultadoSorteio as jest.Mock).mockReturnValue(shuffleResult);
    })

    test('should all participants display their secret friend', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)
        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(3)
    })
    test('should display its own secret friend', () => {
        render(<RecoilRoot>
            <Sorteio />
        </RecoilRoot>)

        const select = screen.queryByPlaceholderText('Selecione o seu nome') as HTMLElement
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        const secretFriend = screen.getByRole('alert')

        expect(secretFriend).toBeInTheDocument()
    })
})