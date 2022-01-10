export function EncodeAlphabet(key, alphabet) {

    let tempList = ''
    let alphabetMod = ''

    if (key > 0) {
        tempList = alphabet.slice(alphabet.length - key)
        alphabetMod = tempList.concat(alphabet.slice(0, alphabet.length - key))
        return alphabetMod
    }
    else {
        const num = Math.abs(key)
        tempList = alphabet.slice(num, alphabet.length)
        alphabetMod = tempList.concat(alphabet.slice(0, num))
        return alphabetMod
    }
}

export default EncodeAlphabet
