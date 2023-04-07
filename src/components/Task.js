import { useState } from "react";
export default function Task () {
    const[counter, setCounter] = useState("");
    const[text, setText] = useState("");
    const[textList, setTextList] = useState([]);

    const handleChange=(event)=>{setCounter(event.target.value)};
    const handleTextChange=(event)=>{setText(event.target.value)};
    const handleSubmit = (event) => {
        event.preventDefault();
        var txtList = [];
        for (var i=0; i<counter; i++){
            txtList.push(text + ' ')
        }
        setTextList(txtList);               
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter a number
                    <input value={counter} onChange={handleChange} 
                    type="text"></input>
                </label>
                <label>Enter text
                    <input value={text} onChange={handleTextChange} 
                    type="text"></input>
                </label>
                    <button type="submit">submit</button>
                
            </form>
            <p> {textList} </p>
        </div>
      

    )
}