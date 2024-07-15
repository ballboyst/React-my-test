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
        console.log("削除")
    }
    const [memofilter, setMemoFilter] = useState("");
    const filteredMemos = (e) => setMemoFilter(e.target.value)
    // const filteredMemos = (memos) =>{
    //     memos.filter(???????)
    // }
    return(
        <div>
            <p>簡単メモリスト</p>
            <input type="text" value={text} onChange={onChangeText} />
            <button onClick={onClickAdd}>追加</button>
            <p>検索ワード<p/>
            <input type="text" value={memofilter} onChange={filteredMemos} />
            <ul>
                {memos.filter(
                    (memo,index) => (
                        <li key={memo}>
                            <p>{memo}</p>
                            <button onClick={()=>onClickDelete(index)}>削除</button>
                        </li>
                    )
                )
            }
            </ul>
        </div>
    );
};

export default(App);