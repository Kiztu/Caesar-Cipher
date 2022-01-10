import FormPart1 from './Form/FormPart1.js'

const Panel1 = ({ convertMsg, setAlertMsg, setShowMessage }) => {
    return (
        <div className="container mt-3 px-4">
            <h2 className="text-center">CAESAR CIPHER</h2>
            <p className="text-center">Handle your messages with Caesar Cipher!</p>

            {/* Form */}
            <FormPart1 convertMsg={convertMsg} setAlertMsg={setAlertMsg} setShowMessage={setShowMessage} />
        </div>
    )
}

export default Panel1
