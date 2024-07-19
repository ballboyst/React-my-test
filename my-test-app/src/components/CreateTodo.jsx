import {styled} from "styled-components";
import { useState } from "react";
import { useMemo } from "react";

export const CreateTodoLists = () => {
    const [title, setTitle] = useState("");
    const onChangeTitle = (e) => setTitle(e.target.value);
    const [context, setContext] = useState("");
    const onChangeContext = (e) => setContext(e.target.value);
    const [lists, setLists] = useState([]);
    const onClickAdd = () => {
        const newLists =  [...lists];
        newLists.push(title);
        setLists(newLists);
        setTitle("");
    };
  
    return(
        <div>
            <SH2>Todo List</SH2>
            <SInputTitle type="text" value={title} onChange={onChangeTitle} placeholder="Title"/>
            <SInputContext type="text" value = {context} onChange={onChangeContext} placeholder="Context" />
            <SAdd onClick={onClickAdd}>追加</SAdd>
        </div>
    );
};


const SH2 = styled.h2`
    color: #FFFFFF;
`;
const SInputTitle = styled.input`
    background-color:#20B2AA;
    border-radius: 5px;
    border: none;
    height: 25px;
    width: 60%;
    color: DCDCDC;
    margin: 10px 10px 10px 10px;
`;
const SInputContext = styled.input`
    background-color:#20B2AA;
    border-radius: 5px;
    border: none;
    height: 60px;
    width: 60%;
    color: DCDCDC;
    margin: 10px 10px 10px 10px;

`;
const SAdd = styled.button`
    height: 30px;
    width: 60%;
    border-radius: 5px;
    margin: 10px 10px 10px 10px;

`;