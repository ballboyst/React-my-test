import {useState} from "react"
import styled from "styled-components"
import { MemoList } from "./MemoList";
import { useMemoList } from "../hooks/useMemoList";


export const App =() =>{
const {memos, addTodo, deleteTodo} = useMemoList();
const [text, setText]=useState("");
// const [memos, setMemos]=useState([]);
const onChangeText = (e) => {setText(e.target.value)};
const onClickAdd = () => {
    addTodo(text)
    // const newMemos = [...memos];
    // newMemos.push(text);
    // setMemos(newMemos);
    setText("");
};
const onClickDelete = (index) => {
    deleteTodo(index)
//     const newMemos = [...memos];
//     newMemos.splice(index,1);
//     setMemos(newMemos);
};


return(
<div>
    <h1>簡単メモリスト</h1>
    <div>
        <input type="text" value={text} onChange={onChangeText}></input>
        <SButton onClick={onClickAdd} >追加</SButton>
    </div>
    {/* 検索機能 */}
    <input type="text" id="search-input" placeholder="キーワードを入力"></input>
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

// 検索機能
// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('input',()=>{
//     const keyword = searchInput.value;
//     console.log(keyword)
// })
// const searchTargets = document.querySelectorAll('.search-target');
// searchInput.addEventListener('input',()=>{
//     const keyword = searchInput.value.trim().toLowerCase();
//     console.log(keyword);
// });
// const searchResults = document.getElementById('search-results');
// function showSearchResult(target){
//     target.style.display = "block";
// }
// function hideSearchResult(target){
//     target.style.display = "none";
// }
// function filterSearchResults(){
//     searchTargets.forEach((target)=>{
//         const text = target.textContent.toLowerCase();
//         if(text.includes(keyword)){
//             showSearchResult(target);
//         } else {
//             hideSearchResult(target);
//         }
//     });
// }
// searchInput.addEventListener('input',filterSearchResults);


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