import React from "react"

export function UserInput(){
    const [inputData, setInputData] = useState()

    function handleUserInput(){
        setInputData([''])
    }
    return(
        <section id="user-input">
            <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Annual investment</label>
                <input type="number" required/>   
            </p>
            </div>
            <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type="number" required/>
            </p>
            <p>
                <label>Return</label>
                <input type="number" required/>
            </p>
            </div>
        </section>
    )
}