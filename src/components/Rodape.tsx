import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipante"


const Rodape = () => {
    const participants = useListaDeParticipantes()

    const navigateTo = useNavigate()

    const handleStart = () => {
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