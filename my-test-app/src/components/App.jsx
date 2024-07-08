import React, { memo } from "react";
import { useState } from "react";
import {styled} from "styled-components";

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
        console.log("delete")
    };

    return(
        <SDiv>
            <h1>簡単メモ</h1>
            <input type="text" value={text} onChange={onChangeText} />
            <SButton onClick={onClickAdd}>追加</SButton>
            <div>
                <p>memoリスト</p>
                <Ul key={memo}>
                    {memos.map(
                        (memo, index) => (
                        <li>
                            <SWrapper>
                            <p>{memo}</p>
                            <SButton onClick={()=>onClickDelete(index)}>削除</SButton>
                            </SWrapper>
                        </li>
                        )
                    )}
                </Ul>
            </div>
        </SDiv>

    )
};

const SDiv = styled.div`
    text-align: center
`;
const SButton = styled.button`
    border: solid 1px;
    border-radius: 5px;
    margin: 5px;
    height: 30px;
    width: 60px;
`;
const SWrapper = styled.div`
    display:flex;
    align-items: center;
`;
const Ul =styled.ul`
    margin-left:20%;
`;

export default(App);
