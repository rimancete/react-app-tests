import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipante"
import Rodape from "./Rodape"

jest.mock('../state/hooks/useListaDeParticipante')

const mockNavigation = jest.fn()
const mockSorteio = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})
jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

describe('"Cadastro de Participantes" screen - Insufficiente participant list', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test("shouldn't start to play", () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
    })
})

describe('"Cadastro de Participantes" screen - Sufficiente participant list', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Osvaldo', 'José'])
    })
    test("should start to play", () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const button = screen.getByRole('button')

        expect(button).toBeEnabled()
    })

    test('should have started the fun', ()=> {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(mockNavigation).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})