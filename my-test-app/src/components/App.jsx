import React from "react";
import {useState} from "react";


export const App = () => {
    const [text,setText] = useState("");
    const [memos,setMemos] = useState([]);
    const onChangeText = (e) => setText(e.target.value);
    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(setText);
        setMemos(newMemos);
        setText("");
        }
    return (
        <div>
            <h1>簡単メモアプリ</h1>
            <input type="text" value={text} onChange={onChangeText}></input>
            <buttun onClickAdd={onClickAdd}>送信</buttun>
            <div>
                <p>memos</p>
            </div>
        </div>

    )
};

export default App;