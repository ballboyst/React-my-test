import styled from "styled-components";


export const MemoList = (props) => {
    const {memos, onClickDelete } = props;
    // propsを引数にして分割代入でpropsオブジェクトのプロパティを変数に代入する。
    // 分割代入のコードは以下と同様
    // const memos = props.memos;
    // const onClickDelete =props.onClickDelete;

    return(
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
            </SContainer>);
};

const SContainer = styled.div`
    border: solid 1px #ccc;
`;

const SMemoWrapper = styled.div`
    display: flex;
    align-item: center;
`;

const SButton = styled.button`
    border: solid 1px;
    border-radius: 5px;
    margin: 16px;
`;