// import styled from "styled-components"

// export const MemoList =props=>{
//     const {memos, onClickDelete} = props;
//     return(
//         <SContainer>
//         <p>memo一覧</p>
//         <ul>
//             {
//             memos.map(
//                 (memo, index) => {
//                     return(
//                 <li key={memo}>
//                     <SMemoWrapper class="search-target">
//                         <p>{memo}</p>
//                         <SButton onClick={()=>onClickDelete(index)}>削除</SButton>
//                     </SMemoWrapper>
//                 </li>)
//                 }
//             )}
//         </ul>
//         </SContainer>
//     )
// };


// const SButton = styled.button`
//     margin-left: 16px;
//     `;
// const SContainer = styled.div`
//     border: solid 1px #ccc;
//     padding: 16px;
//     margin: 8px;
//     `;
// const SMemoWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     `;



import React from 'react';

const MemoList = ({ memos }) => {
  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <h3>{memo.title}</h3>
          <span>ID: {memo.id}</span>
          <span>{memo.date}</span>
          <p>{memo.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;