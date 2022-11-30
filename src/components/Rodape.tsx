import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipante"
import { useSorteador } from "../state/hooks/useSorteador"

import './Rodape.css'

const Rodape = () => {
    const participants = useListaDeParticipantes()

    const navigateTo = useNavigate()

    const sortear = useSorteador()

    const handleStart = () => {
        sortear()
        navigateTo('/sorteio')
    }
    return (
        <footer className="rodape-configuracoes">
            <button className="botao" disabled={participants.length < 3} onClick={handleStart}>Iniciar brincadeira!</button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Rodape