import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import {styled} from "styled-components";

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
        <SDiv>
            <SH2>簡単メモリスト</SH2>
            <input type="text" value={text} onChange={onChangeText} />
            <SButton2 onClick={onClickAdd}>追加</SButton2>
            <Sp>検索ワード</Sp>
            <input type="text" value={searchText} onChange={onChangeSearch} />
            <ul>
                {filteredMemos.map(
                    (memo,index) => (
                        <Sli key={memo}>
                            <p>{memo}</p>
                            <button onClick={()=>onClickDelete(index)}>削除</button>
                        </Sli>
                    )
                )
            }
            </ul>
        </SDiv>
    );
};

const SDiv = styled.div`
    background-color: green;
    text-align: center;
    height: 20rem;
`;
const SH2 = styled.h2`
    color: #FFFFFF;
`;
const Sp = styled.p`
    color: #FFFFFF;
`;
const Sli = styled.li`
    display: flex;
    margin-left: 30%;
`;
const SButton2 = styled.button`
    height: 30px;
`;
export default(App);