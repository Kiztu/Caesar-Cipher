export function ChangeMessage(originalText, filterText, message) {
    let rawChar, newChar, char, tempChar, index, finalMessage = ''

    for (let i = 0; i < message.length; i++) {
        rawChar = message.charAt(i)

        //For each letter, convert to lowercase
        char = rawChar.toLowerCase()

        //Obtain the index of the given letter that appears in the originalText.
        //Avoid all non-letters (numbers, characters)
        if (originalText.includes(char)) {
            index = originalText.indexOf(char)
            tempChar = filterText.charAt(index)

            //Convert new letter to uppercase if original letter was uppercase
            if (rawChar === rawChar.toUpperCase()) {
                newChar = tempChar.toUpperCase()
            }
            else {
                newChar = tempChar
            }
            finalMessage = finalMessage.concat(newChar)
        }
        else {
            finalMessage = finalMessage.concat(char);
        }
    }
    return finalMessage;
}

export default ChangeMessage