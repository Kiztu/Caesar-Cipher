//Function imports
import EncodeAlphabet from './EncodeAlphabet.js'
import ChangeMessage from './ChangeMessage.js'


export function PerformConversion(message, key, method) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let shiftedAlphabet = ''
    let finalMessage = ''

    //Return the same message if key IS 0
    if (key !== '0') {

        //Create the shifted alphabet
        shiftedAlphabet = EncodeAlphabet(key, alphabet);

        //Based on encoding or decoding, convert the input cipher message
        if (method === "encode") {
            finalMessage = ChangeMessage(alphabet, shiftedAlphabet, message)
        }
        else {
            finalMessage = ChangeMessage(shiftedAlphabet, alphabet, message)
        }
        return finalMessage;
    }
    return message;
}

export default PerformConversion
