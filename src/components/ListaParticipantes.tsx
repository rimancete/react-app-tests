import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipante"

 const ListaParticipantes = () => {
    const participants = useListaDeParticipantes()

    return (
        <ul>
            {participants.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
 }

 export default ListaParticipantes