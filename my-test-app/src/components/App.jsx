import React, { memo } from "react";
import { useState } from "react";

const App = () => {
    const [text, setText] = useState("");
    const onChangeText = (e) => setText(e.target.value);
    const [memos, setMemos] = useState([]);
    const onClickAdd = () => {
        const newMemos =  [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    };
    const onClickDelete = (index) =>{
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }
    // const filteredMemos = (memos) =>{
    //     memos.filter(???????)
    // }
    return(
        <div>
            <p>簡単メモリスト</p>
            <input type="text" value={text} onChange={onChangeText} />
            <button onClickAdd={onClickAdd}>追加</button>
            <ul>
                memos.map(
                    (
                        <li key={memo}>{memo}</li>
                    ),[memos]
                )
                <button onClick={onClickDelete(memo)}>削除</button>
            </ul>
        </div>
    );
};

export default(App);