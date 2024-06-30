import styled from "styled-components";
import { useState } from "react";



export const MemoList = (props) =>{
    const {memos, onClickDelete}=props;
    return(
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
    )};

const SButton = styled.button`
    border: solid 1px #ccc;
    border-radius: 5px;
    margin: 5px;
`;
const SMemos = styled.div`
    display:flex;
`;