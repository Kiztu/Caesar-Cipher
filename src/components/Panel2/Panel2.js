import Message from './Message.js'

const Panel2 = ({ setShowMessage, message, method, alertMsg }) => {
    return (
        <div className="container mt-3 px-4">

            {/* Display message upon completion of a cipher conversion in App.js */}
            <div className="order-md-last">
                {setShowMessage ? <Message message={message} method={method} alertMsg={alertMsg} /> : ''}
            </div>

            <div className="order-md-first">
                <h2>What is Caesar Cipher?</h2>
                <p>Caesar Cipher is a simple cryptography method that encrypts messages by substituting letters from a shifted alphabet. Shifted alphabets are made using keys. </p>
                <p>Want to encrypt or decrypt your messages using Caesar Cipher? Simply follow the steps shown!</p>
            </div>
        </div>
    )
}

export default Panel2
