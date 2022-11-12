import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useMensagemDeErro = () => {
    const errorMessage = useRecoilValue(errorState)
    return errorMessage
}