import { render } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import Configuracao from "./Configuracao"

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigation
    }
})


describe('Fun configuration screen', () => {
    test('should be render', () => {
        const {container} = render(<RecoilRoot>
            <Configuracao />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()

    })
})