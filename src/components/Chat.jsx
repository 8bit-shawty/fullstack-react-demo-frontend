import { useState, useRef, useEffect} from "react"

function Chat() {
    const [userInput, setUserInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleChange= (e) => {
        const value = e.target.value.trim()
        console.log(value)
        setUserInput(value)
    }

    return (
    <div>
        

        <form action="">
            <label htmlFor="">
                <input 
                type="text" 
                name="userInput" 
                value={userInput}
                ref={inputRef}
                onChange={handleChange}
                />
            </label>

            <button>Send</button>
        </form>
    </div>
)
}

export default Chat