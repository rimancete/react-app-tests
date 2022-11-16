import React from 'react'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipante'
import ListaParticipantes from './ListaParticipantes'

jest.mock('../state/hooks/useListaDeParticipante')

describe('"Cadastro de Participantes" screen - Empty participant list', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test("should render an empty participant list", () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);

        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(0)

    })
})

describe('"Cadastro de Participantes" screen - Participant list', () => {
    const itemsList = ['Ana', 'Osvaldo'];
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(itemsList)
    })
    test("should render a participant list with items", () => {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>);


        const items = screen.queryAllByRole('listitem')
        expect(items).toHaveLength(itemsList.length)

    })
})