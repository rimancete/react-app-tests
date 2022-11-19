import shuffle from "just-shuffle"

export function realizarSorteio (participants: string[]) {
    const participantsTotal = participants.length
    const nameShuffled = shuffle(participants)
    const shuffleResult = new Map<string, string>()

    for (let index = 0; index < participantsTotal; index++) {
        const nameIndex = index === (participantsTotal - 1) ? 0 : index + 1;
        shuffleResult.set(nameShuffled[index], nameShuffled[nameIndex])        
    }
    return shuffleResult
}