import React from "react"
import {useState} from "react"
import styled from "styled-components"

const App = () => {
    const [text, setText]=useState("");
    const [memos, setMemos]=useState([]);

    const onChangeText = (e) => setText(e.target.value);
    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    };
    const onClickDelete = (index) =>{
        const newMemos =  [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
        // デバッグ用コード
        console.log("削除しました");
    };



    return(
        <SDiv>
            <h1>簡単メモ</h1>
            <SContainer>
                <input type="text" value={text} onChange={onChangeText} />
                <SButton onClick={onClickAdd}>追加</SButton>
            </SContainer>
            <p>メモリスト</p>
            <ul>
                {memos.map(
                    (memo, index)=>(
                        <li key={memo}>
                            <SContainer>
                                <p>{memo}</p>
                                <SButton onClick={()=>onClickDelete(index)}>削除</SButton>
                            </SContainer>
                        </li>
                    ))}
            </ul>
        </SDiv>
    )

};


const SDiv = styled.div`
    background-color: green;
    text-align: center;
`;
const SContainer = styled.div`
    display: flex;
    margin-left: 40%;

`;
const SButton = styled.button`
    border: solid 1px;
    border-radius: 5px;
    margin: 5px;
`;

export default(App);