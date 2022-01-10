//This part of the form appears once the user selects a method in FormPart1

const FormPart2 = ({ setKey, setMessage, method, setShowImg, showImg }) => {

    return (
        <div>

            {/*Key input*/}
            <div>
                <label htmlFor="key">2. Enter {method === "encode" ? "a key (the number of letters to shift by)" : "the key used to encode the message"}

                    {/* Show tooltip image if clicked */}
                    <br /> <a href="#" className="text-muted pe-auto" onClick={(e) => setShowImg(!showImg)}
                    > A positive key shifts the alphabet to the right (Click me!)</a>
                </label>
                {showImg ? <img src='/images/ciphershift.png' alt="cipher shift by 1 key" className="container my-3 border" /> : ''}
                <p><input id="key" type="number" defaultValue="0" className="form-control mt-2" max="25" min="-25" onChange={(e) => setKey(e.target.value)} /></p>
            </div>

            {/*Message/text box input*/}
            <div>
                <label htmlFor="message">3. Enter the message {method === "encode" ? "to encode" : "to decode"}</label>
                <p><textarea id="message" rows="3" className="form-control" placeholder="Place message here" onChange={(e) => setMessage(e.target.value)}></textarea></p>
            </div>

            {/* Submit Button */}
            <div>
                <button className="btn btn-primary btn-block mb-4" type="submit">{method === 'encode' ? 'Encode' : 'Decode'} my message!</button>
            </div>

        </div>
    )
}
export default FormPart2
