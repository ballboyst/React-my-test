import React from "react";
import { useState } from "react";
import {styled} from "styled-components";

export const MemoList = (props) =>{
    const {memos,onClickDelete} = props;
    return(
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
    )
};

// const SDiv = styled.div`
//     text-align: center
// `;
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