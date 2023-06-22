import react, { useState } from 'react';
import './index.css';
import Heading from './Heading'

// using prompts in react js



function App() {

    // const state = useState;
    const [settext, setfirst] = useState("Click me")
    const [bg, setbg] = useState("yellow")

    const first = () => {
        setfirst("ouch!! 🥲")
        setbg("lightblue")
    }

    const dobule = () => {
        setfirst("double!")
        setbg("green")
    }


    return <>
        <div className="btn">
            <button className='setbtn' style={{ backgroundColor: bg }}
                onClick={first} onDoubleClick={dobule}
            >{settext}</button>
        </div>
        <Heading />

    </>
}


export default App;