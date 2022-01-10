import Alert from './Alert.js'

const Message = ({ message, method, alertMsg }) => {

    //Display alert message if Form in Panel1 is filled incorrectly
    if (alertMsg) {
        return <Alert />
    }

    //Display message
    else return (
        <div>
            {method !== undefined ? <div><h4> Your {method === "encode" ? "encoded" : "decoded"} message:</h4><p>{message}</p><hr /></div> : ''}
        </div >
    )
}

export default Message


