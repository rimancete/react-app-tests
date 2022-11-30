import { useState } from "react"
import Card from "../components/Card"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipante"
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio"

import './Sorteio.css'

const Sorteio = () => {
    const parcitipants = useListaDeParticipantes()

    const [currentParticipant, setCurrentParticipant] = useState('')
    const [secretName, setSecretName] = useState('')

    const shuffleResult = useResultadoSorteio()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (shuffleResult.has(currentParticipant)) {
            setSecretName(shuffleResult.get(currentParticipant)!)            
        }

    }

    return (<Card>
        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={submit}>
                <select
                    required 
                    name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o seu nome"
                    value={currentParticipant}
                    onChange={e => setCurrentParticipant(e.target.value)}
                >
                    <option>Selecione seu nome</option>
                    {parcitipants.map(item => <option key={item}>{item}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button className="botao-sortear">Sortear</button>
            </form>
            {secretName && <p className="resultado" role="alert">{secretName}</p>}
            <footer className="sorteio">
                <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
            </footer>
        </section>
    </Card>)
}
export default Sorteio