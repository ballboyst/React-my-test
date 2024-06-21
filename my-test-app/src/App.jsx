import styled from "styled-components"
import { useState } from "react";
import { MemoList } from "./components/MemoList";

export const App = () => {
    const[text, setText] = useState("");
    const[memos, setMemos] = useState([]);
    const onChangeText = (e) => setText(e.target.value);
    const onClickAdd = () => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    };
    const onClickDelete = (index) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    };

    return(
        <div>
        <h1>簡単メモリスト</h1>
        <input type="text" value={text} onChange={onChangeText} />
        <SButton onClick={onClickAdd}>追加</SButton>
        <MemoList memos={memos} onClickDelete={onClickDelete} />
            {/* <SContainer>
                <p>memo list</p>
                <ul>
                    {memos.map((memo,index) => 
                        <li key={memo}>
                            <SMemoWrapper>
                                <p>{memo}</p>
                                <SButton onClick={()=>onClickDelete(index)}>削除</SButton>
                            </SMemoWrapper>
                        </li>
                    )}
                </ul>
            </SContainer> */}
        </div>
    );
};

const SButton = styled.button`
    border: solid 1px;
    border-radius: 5px;
    margin: 16px;
`;

// const SContainer = styled.div`
//     border: solid 1px #ccc;
// `;

// const SMemoWrapper = styled.div`
//     display: flex;
//     align-item: center;
// `;
