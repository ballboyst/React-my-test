import {useState} from "react"
import styled from "styled-components"
import { MemoList } from "./MemoList";
import {useMemoList} from "../hooks/useMemoList";

export const App =() =>{
const {memos, addTodo, deleteTodo}=useMemoList();
const [text, setText]=useState("");
// const [memos, setMemos]=useState([]);
const onChangeText = (e) => {setText(e.target.value)};
const onClickAdd = () => {
    // const newMemos = [...memos];
    // newMemos.push(text);
    // setMemos(newMemos);
    addTodo(text)
    setText("");
};
const onClickDelete = (index) => {
    // const newMemos = [...memos];
    // newMemos.splice(index,1);
    // setMemos(newMemos);
    deleteTodo(index);
};

return(
<div>
    <h1>簡単メモリスト</h1>
    <div>
        <input type="text" value={text} onChange={onChangeText}></input>
        <SButton onClick={onClickAdd} >追加</SButton>
    </div>
    <MemoList memos={memos} onClickDelete={onClickDelete} />
    {/* <SContainer>
        <p>memo一覧</p>
        <ul>
            {
            memos.map(
                (memo, index) => {
                    return(
                <li key={memo}>
                    <SMemoWrapper>
                        <p>{memo}</p>
                        <SButton onClick={()=>onClickDelete(index)}>削除</SButton>
                    </SMemoWrapper>
                </li>)
                }
            )}
        </ul>
    </SContainer> */}
</div>
)
};

const SButton = styled.button`
    margin-left: 16px;
    `;
// const SContainer = styled.div`
//     border: solid 1px #ccc;
//     padding: 16px;
//     margin: 8px;
//     `;
// const SMemoWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     `;