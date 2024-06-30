import React from "react";
import { useState } from "react";
import styled from "styled-components"
import { MemoList } from "./MemoList";
import { useMemo } from "../hooks/useMemo";

const App = () => {
    const {text, memos, onChangeText, onClickAdd, onClickDelete} = useMemo();
//     const [text,setText] = useState("");
//     const [memos,setMemos] = useState([]);

//     const onChangeText = (e) => {setText(e.target.value)
//     };

//     const onClickAdd = () => {
//         const newMemos = [...memos];
//         newMemos.push(text);
//         setMemos(newMemos);
//     };

//     const onClickDelete = (index)=> {
//         const newMemos = [...memos];
//         newMemos.splice(index, 1);
//         setMemos(newMemos);
//     }

    return(
    <SDiv>
    <h1>簡単メモリスト</h1>
    <input type="text" value={text} onChange={onChangeText}></input>
    <SButton onClick={onClickAdd}>追加</SButton>
    <p>メモリスト</p>
    <MemoList memos={memos} onClick={onClickDelete} />
    <ul>{
        memos.map(
            (memo, index)=>(
                <SMemos>
                <li>{memo}</li>
                <SButton key={index} onClick={onClickDelete}>削除</SButton>
                </SMemos>
            )
        )}
    </ul>
    </SDiv>
    )
};

const SDiv =  styled.div`
    background-color: green;
    text-align: center;
`;
const SButton = styled.button`
    border: solid 1px #ccc;
    border-radius: 5px;
    margin: 5px;
`;
const SMemos = styled.div`
    display:flex;
`;


export default(App);