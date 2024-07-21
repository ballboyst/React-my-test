import {styled} from "styled-components";
import { useState } from "react";
import { useMemo } from "react";
import { todoContext } from "./todoContext";

export const UpdateTodoLists = () => {
    const [text, setText] = useState("");
    const onChangeText = (e) => setText(e.target.value);
    const [lists, setLists] = useState([]);
    const onClickAdd = () => {
        const newLists =  [...lists];
        newLists.push(text);
        setLists(newLists);
        setText("");
    };
    const onClickDelete = (index) =>{
        const newLists = [...lists];
        newLists.splice(index, 1);
        setLists(newLists);
        console.log("削除")
    }
    const [searchText, setSearchText] = useState("");
    const onChangeSearch = (e) => setSearchText(e.target.value);
    const filteredLists = useMemo(
        () => {
            return lists.filter(
                (title)=>{return title.includes(searchText)})
        }, [lists,searchText]
    );
    return(
        <div>
            <SH2>Todo List</SH2>
            <SAddInput type="text" value={text} onChange={onChangeText} placeholder="Add ToDo"/>
            <SAdd onClick={onClickAdd}>追加</SAdd>
            <p>
                <SSearchInput type="text" value={searchText} onChange={onChangeSearch} placeholder="Search ToDo" />
            </p>
            <ul>
                {filteredLists.map(
                    (title,index) => (
                        <Sli key={title}>
                            <p>{title}</p>
                            <div>
                                <SRead >
                                    <a href="/detail">詳細</a>
                                </SRead>
                                <SUpdate>修正</SUpdate>
                                <SDelete onClick={()=>onClickDelete(index)}>削除</SDelete>
                            </div>
                        </Sli>
                    )
                )
            }
            </ul>
        </div>
    );
};


const SH2 = styled.h2`
    color: #FFFFFF;
`;
// const Sp = styled.p`
//     color: #FFFFFF;
// `;
const SAddInput = styled.input`
    background-color:#20B2AA;
    border-radius: 5px;
    border: none;
    height: 25px;
    width: 60%;
    color: DCDCDC;
`;
const SAdd = styled.button`
    height: 30px;
    margin-left: 15px;
    border-radius: 5px;
`;
const SSearchInput = styled.input`
    background-color:#20B2AA;
    border-radius: 5px;
    border: none;
    height: 25px;
    color: DCDCDC;
    width: 70%;
    margin-bottom: 20px;
`;
const Sli = styled.li`
    display: flex;
    justify-content: space-between;
    height: 32px;
    color: #FFFFFF;
    background-color: #007700;
    border: none;
    border-radius:5px;
    margin: 10px 8% 20px 8%;
    width: 77%;
    align-items: center;
`;
const SRead = styled.button`
    height: 25px;
    border-radius: 5px;
    margin-left: 5px;
`;
const SUpdate = styled.button`
    height: 25px;
    border-radius: 5px;
    margin-left: 5px;
`;
const SDelete = styled.button`
    height: 25px;
    border-radius: 5px;
    margin-left: 5px;
`;
