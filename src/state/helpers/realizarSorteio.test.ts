import { realizarSorteio } from "./realizarSorteio"

describe('when secret santa generator', () => {
    test("shouldn't generator his own name", () => {
        const participants = [
            'Ana',
            'Osvaldo',
            'Catarina',
            'Juliana',
            'João',
            'Natalia'
        ]

        const nameDrawn = realizarSorteio(participants)
        participants.forEach(participant => {
            const secretSanta = nameDrawn.get(participant)
            expect(secretSanta).not.toEqual(participant)
        })
    })
})