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
    <input 
        type="text" 
        id="search-input" 
        // value = {search}
        placeholder="キーワードを入力">
    </input>
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





// import React, { useState, useMemo } from 'react';
// import MemoList from './MemoList';
// import MemoFilter from './MemoFilter';
// import { memos } from './memo_data';
// // import './App.css';

// const App = () => {
//   const [filter, setFilter] = useState('');
//   const [sortField, setSortField] = useState('date');
//   const [sortOrder, setSortOrder] = useState('asc');

//   const filteredMemos = useMemo(() => {
//     return memos
//       .filter((memo) =>
//         memo.title.toLowerCase().includes(filter.toLowerCase())
//       )
//       .sort((a, b) => {
//         if (sortField === 'date') {
//           const dateA = new Date(a.date);
//           const dateB = new Date(b.date);
//           return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
//         } else if (sortField === 'id') {
//           return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
//         } else {
//           return sortOrder === 'asc'
//             ? a[sortField].localeCompare(b[sortField])
//             : b[sortField].localeCompare(a[sortField]);
//         }
//       });
//   }, [filter, sortField, sortOrder]);

//   return (
//     <div className="container">
//       <h2>Memo List</h2>
//       <MemoFilter filter={filter} setFilter={setFilter} />
//       <button onClick={() => { setSortField('id'); setSortOrder('asc'); }}>ID(昇順)</button>
//       <button onClick={() => { setSortField('id'); setSortOrder('desc'); }}>ID(降順)</button>
//       <button onClick={() => { setSortField('title'); setSortOrder('asc'); }}>タイトル(昇順)</button>
//       <button onClick={() => { setSortField('title'); setSortOrder('desc'); }}>タイトル(降順)</button>
//       <button onClick={() => { setSortField('date'); setSortOrder('asc'); }}>日付(昇順)</button>
//       <button onClick={() => { setSortField('date'); setSortOrder('desc'); }}>日付(降順)</button>
//       <MemoList memos={filteredMemos} />
//     </div>
//   );
// };

export default App;