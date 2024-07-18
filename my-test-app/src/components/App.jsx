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
            <SH2>ToDo List</SH2>
            <SInput type="text" value={text} onChange={onChangeText} placeholder="Add ToDo"/>
            <SButton2 onClick={onClickAdd}>追加</SButton2>
            <input type="text" value={searchText} onChange={onChangeSearch} placeholder="Search ToDo" />
            <ul>
                {filteredMemos.map(
                    (memo,index) => (
                        <Sli key={memo}>
                            <p>{memo}</p>
                            <SButton2 onClick={()=>onClickDelete(index)}>削除</SButton2>
                        </Sli>
                    )
                )
            }
            </ul>
        </SDiv>
    );
};

const SDiv = styled.div`
    background-color: #008080;
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
    color: #FFFFFF;
    background-color: #008070;
    border: solid;
    border-radius:5px;
    margin-bottom:10px;
    width: 40%;
`;
const SInput = styled.input`
    background-color:#20B2AA;
    border-radius: 5px;
    border: none;
    height: 25px;
    color: DCDCDC;
`;
const SButton2 = styled.button`
    height: 30px;
    margin-left: 15px;
`;
export default(App);