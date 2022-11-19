import { useRecoilValue } from "recoil"
import { resultadoAmigoSecretoState } from "../atom"

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoAmigoSecretoState)
}