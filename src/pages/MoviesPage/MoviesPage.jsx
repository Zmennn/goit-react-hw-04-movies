import {useState} from "react"


export default function MoviesPage() {

    const [text, setText] = useState("");
    
    const handleInput = (ev) => { setText(ev.target.value) };
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(text);
        setText("")
    }

    return (<form onSubmit={handleSubmit}>
        <input
            onChange={handleInput}
            type="text"
            value={text}
        />
        <button type="submit">search</button>
    </form>)
        
    
}