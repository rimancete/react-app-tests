import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante"
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro"

import './Formulario.css'

const Formulario = () => {
    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const addParticpantList = useAdicionarParticipante()

    const errorMessage = useMensagemDeErro();

    const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addParticpantList(nome)
        setNome('')
        inputRef.current?.focus()
    }
    
    return (<form onSubmit={adicionarParticipante}>
        <div className="grupo-input-btn">
            <input
                ref={inputRef}
                value={nome}
                onChange={e => setNome(e.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {errorMessage && <p className="alerta erro" role="alert">{errorMessage}</p>}
    </form>)
}

export default Formulario