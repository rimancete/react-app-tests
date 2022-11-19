import { useSetRecoilState } from "recoil"
import { resultadoAmigoSecretoState } from "../atom"
import { realizarSorteio } from "../helpers/realizarSorteio"
import { useListaDeParticipantes } from "./useListaDeParticipante"

export const useSorteador = () => {
    const participants = useListaDeParticipantes()
    const setResult = useSetRecoilState(resultadoAmigoSecretoState)
    return () => {
        const shuffleResult = realizarSorteio(participants)
        setResult(shuffleResult)
    }
}