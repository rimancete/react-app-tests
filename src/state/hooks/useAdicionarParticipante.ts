import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setParticipantList = useSetRecoilState(listaParticipantesState)
    const participants = useRecoilValue(listaParticipantesState)
    const setErrorMessage = useSetRecoilState(errorState)
    return (nomeDoParticipante: string) => {
        if (participants.includes(nomeDoParticipante)) {
            setErrorMessage('Nomes duplicados não são permitidos')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000)
            return
        }
        return setParticipantList(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}