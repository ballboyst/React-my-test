import React from "react";
import { useState } from "react";
import { useMemo } from "react";

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
    const [searchText, setSearchText] = useState("");
    const onChangeSearch = (e) => setSearchText(e.target.value);
    const filteredMemos = useMemo(
        () => {
            return memos.filter(
                (memo)=>{return memo.includes(searchText)})
        }, [memos,searchText]
    );
    
    return(
        <div>
            <p>簡単メモリスト</p>
            <input type="text" value={text} onChange={onChangeText} />
            <button onClick={onClickAdd}>追加</button>
            <p>検索ワード</p>
            <input type="text" value={searchText} onChange={onChangeSearch} />
            <ul>
                {filteredMemos.map(
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