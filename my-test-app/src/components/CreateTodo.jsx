import {styled} from "styled-components";
import { useContext } from "react";
import { todoContext } from "./providers/todoContext";
// import { useNavigate } from "react-router-dom";

export const CreateTodoLists = () => {
    // const navigate = useNavigate();
    const {text, onChangeText, onClickAdd} = useContext(todoContext);
    return(
        <div>
            <SH2>Todo List</SH2>
            <SInputTitle type="text" value={text} onChange={onChangeText} placeholder="Title"/>
            <SInputContext type="text" value = "Todoの詳細" placeholder="Context" />
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