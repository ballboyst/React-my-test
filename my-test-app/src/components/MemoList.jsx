import styled from "styled-components";


export const MemoList = () => {
    <SContainer>
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
            </SContainer>
}

const SContainer = styled.div`
    border: solid 1px #ccc;
`;