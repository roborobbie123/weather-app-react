import { useState } from "react";

export default function Search({ onSearch }) {
    const [input, setInput] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearch(input);
            setInput('');
        }

    }
    

    return (
        <div className="flex gap-3 justify-center">
            <div>
                <input type="text" className="bg-amber-50 rounded-sm mt-10 text-black" onChange={event => setInput(event.target.value)} onKeyDown={handleKeyDown}/>
            </div>
            <div>
                <button className="border px-1 rounded-xl transition-transform duration-200 hover:scale-110 mt-10" onClick={() => onSearch(input)}>Search</button>
            </div>
        </div>
    )
}