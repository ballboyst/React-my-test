import { useContext } from "react";
import { memoContext } from "./providers/memoContext";
import styled from "styled-components";

export const MemoList = (props) =>{
    const {onClickDelete} = props;
    // memosをpropsから除外しコンテキストとして定義
    const memos = useContext(memoContext);

    return(
        <ul>
            {/* コンテキストを使用 */}
            {/* <memoContext.Provider value={memos}>
                {children}
            </memoContext.Provider> */}
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
    );
};

const SContainer = styled.div`
    display: flex;
    margin-left: 40%;
`;
const SButton = styled.button`
    border: solid 1px;
    border-radius: 5px;
    margin: 5px;
`;