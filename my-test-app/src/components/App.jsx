import React from "react";
import {useState} from "react";
import styled from "styled-components";

export const App = () => {
    const [text,setText] = useState("");
    const [memos,setMemos] = useState([]);
    const onChangeText = (e) => setText(e.target.value);
    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
        };
    return (
        <SDiv>
            <h1>簡単メモアプリ</h1>
            <input type="text" value={text} onChange={onChangeText}></input>
            <SButton onClick={onClickAdd}>追加</SButton>
            <SMemo>
                <p>メモリスト</p>
                <div>
                    <ul>
                        {
                        memos.map(
                            (memo)=>(
                            <li key={memo}>
                            <p>{memo}</p>
                            </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </SMemo>
        </SDiv>

    )
};

export default App;

const SDiv = styled.div`
    background-color: #339999;
    text-align: center;
`;
const SButton = styled.button`
    border-radius: 5px;
    border: 1px solid;
    margin: 5px;
    height: 30px;
`
const SMemo = styled.div`
    font-size: 16px;
    border: solid 2px black;
    border-radius: 5px;
`;