const MethodButtons = ({ setMethod, method }) => {
    return (
        <div>
            <div className="row gx-2">

                {/* Encode Button */}
                <div className="col">
                    <input type="radio" className="methodBtns btn-check" name="method" id="op1" value="encode" onClick={(e) => setMethod(e.target.value)} />
                    <label className={`btn btn-outline-primary btn-block ${method === "encode" ? 'active' : ''}`} htmlFor="op1">ENCODE</label>
                </div>

                {/* Decode Button */}
                <div className="col">
                    <input type="radio" className="methodBtns btn-check" name="method" id="op2" value="decode" onClick={(e) => setMethod(e.target.value)} />
                    <label className={`btn btn-outline-primary btn-block ${method === "decode" ? 'active' : ''}`} htmlFor="op2">DECODE</label>
                </div>
            </div>
        </div>
    )
}

export default MethodButtons
