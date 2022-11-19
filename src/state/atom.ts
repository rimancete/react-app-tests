import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})
export const resultadoAmigoSecretoState = atom<Map<string, string>>({
    key: 'resultadoAmigoSecretoState',
    default: new Map()
})

export const errorState = atom<string>({
    key:'errorState',
    default: ''
})