//Component Imports
import Panel1 from './components/Panel1/Panel1.js'
import Panel2 from './components/Panel2/Panel2.js'
import PerformConversion from './components/Functions/PerformConversion.js'

import { useState } from 'react'

//-------------------------------------------------------------------------------------------

function App() {

  const [message, setMessage] = useState(''); //Variable for converted message
  const [showMessage, setShowMessage] = useState(false); //Flag for showing converted message
  const [method, setMethod] = useState(); //Method used (encode/decode)
  const [alertMsg, setAlertMsg] = useState(false); //Flag for showing alert upon filling form


  //For when the user presses the button to encode/decode message (if successful)
  const convertMsg = (cipher) => {
    setMethod(cipher.method);
    setMessage(PerformConversion(cipher.message, cipher.key, cipher.method));
    setShowMessage(true);

  }

  //-------------------------------------------------------------------------------------------

  return (
    <main className='container d-flex'>
      <div className="row my-4 justify-content-center">

        {/* Panel 1 (left panel) */}
        <div className="col-md-5 mb-3">
          <div className="card">
            <Panel1 convertMsg={convertMsg} setAlertMsg={setAlertMsg} setShowMessage={setShowMessage} />
          </div>
        </div>

        {/* Panel 2 (right panel) */}
        <div className="col-md-5 mb-3">
          <div className="card">
            <Panel2 setShowMessage={setShowMessage} message={message} method={method} alertMsg={alertMsg} />
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center pt-3 width auto">
        <p>Caesar Cipher by @Kiztu 2022<br />
          Background image by the <a href="https://www.flickr.com/photos/34561917@N04"> Institute for the Study of the Ancient World</a> accquired via Creative Commons. Allowed for modification.</p>
      </footer>

    </main>
  );
}

export default App;