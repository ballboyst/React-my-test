import React from "react";
import { useState } from "react";

const App = () => {
    // 状態変数の定義
    const [text, setText] = useState("");
    const [memos, setMemos] = useState([]);
    // イベントアクションの定義
    const onChangeText = (e) => setText(e.target.value);
    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    };
    const onClickDelete = (index) =>{
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    };

    return(
        <div>
            <h1>簡単メモ</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <button onClick={onClickAdd}>追加</button>
            <div>
                <p>memoリスト</p>
                <ul>
                    {memos.map(
                        (memo) => (
                        <li>
                            <p>{memo}</p>
                            <button onClick={onClickDelete}>削除</button>
                        </li>
                        )
                    )}
                </ul>
            </div>
        </div>

    )
};

export default(App);
