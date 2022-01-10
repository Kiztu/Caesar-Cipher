import { useState } from 'react'
import MethodButtons from './MethodButtons.js'
import FormPart2 from './FormPart2.js'

export const FormPart1 = ({ convertMsg, setAlertMsg, setShowMessage }) => {

    const [key, setKey] = useState('0');
    const [message, setMessage] = useState('');
    const [method, setMethod] = useState();
    const [showImg, setShowImg] = useState(false);

    //Function upon submitting the form: Preparation for converMsg function in App.js
    const onSubmit = (e) => {

        //Ensure all fields are filled and selected
        e.preventDefault()
        if (!message || !method || !key) {
            setAlertMsg(true)
            setShowMessage(false);
            return
        }
        setAlertMsg(false)
        //Convert the message
        convertMsg({ method, message, key });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                {/*caesar Cipher method input*/}
                <div className="mb-3">
                    <p>1. Select a method</p>
                    <MethodButtons setMethod={setMethod} method={method} />
                </div>

                {/*Key and message form input*/}
                <div>
                    {method !== undefined ? <FormPart2 setKey={setKey} setMessage={setMessage} method={method} setShowImg={setShowImg} showImg={showImg} /> : ""}
                </div>

            </form>
        </div>
    )
}

export default FormPart1