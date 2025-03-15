import { useState } from "react";

export default function Search({ onSearch }) {
    const [input, setInput] = useState('');

    

    return (
        <div className="flex gap-3 justify-center">
            <div>
                <input type="text" className="bg-amber-50 rounded-sm mt-10 text-black" onChange={event => setInput(event.target.value)}/>
            </div>
            <div>
                <button className="border px-1 rounded-xl transition-transform duration-200 hover:scale-110 mt-10" onClick={() => onSearch(input)}>Search</button>
            </div>
        </div>
    )
}