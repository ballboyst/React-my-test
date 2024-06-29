import React, { memo } from "react";
import { useState } from "react";
// import styled from "styled-components"

const App = () => {
    const [text,setText] = useState("");
    const [memos,setMemos] = useState([]);

    const onChangeText = (e) => {setText(e.target.value)
    };

    const onClickAdd = () => {
        const newMemos = [...memos];
        setText={text};
        newMemos.push(text);
        setMemos(newMemos);
    };

    return(
    <div>
    <h1>簡単メモリスト</h1>
    <input type="text" value={text} onChange={onChangeText}></input>
    <button onClick={onClickAdd}>追加</button>
    <p>メモリスト</p>
    <ul>{
        memos.map(
            (memo)=>{
                <li>{memo}</li>
            }
        )}
    </ul>
    </div>
    )
};

export default(App);