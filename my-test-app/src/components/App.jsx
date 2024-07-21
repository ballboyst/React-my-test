import React from "react";
import { useState, useMemo } from "react";
import { styled } from "styled-components";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { TodoLists } from "./TodoLists";
import { CreateTodoLists } from "./CreateTodo";
import { DetailTodoLists } from "./DetailTodo";
import { UpdateTodoLists } from "./UpdateTodo";
import { todoContext } from "./providers/todoContext";
import { NotFound } from "./NotFound";

const App = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [lists, setLists] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onChangeText = (e) => setText(e.target.value);
    const onChangeSearch = (e) => setSearchText(e.target.value);

    const onClickAdd = () => {
        const newLists = [...lists, text];
        setLists(newLists);
        setText("");
        navigate("/");
    };

    const onClickDelete = (index) => {
        const newLists = [...lists];
        newLists.splice(index, 1);
        setLists(newLists);
    };

    const filteredLists = useMemo(
        () => lists.filter((title) => title.includes(searchText)),
        [lists, searchText]
    );

    return(
        <BrowserRouter>
        <todoContext.Provider
            value={{ lists, filteredLists, searchText, onChangeSearch, onClickDelete, text, onChangeText, onClickAdd }}
        >
            <SDiv>
                <SHeader>
                    <h3>
                        <Sa1 href="/">Top</Sa1>
                        <Sa2 href="/create">Create</Sa2>
                    </h3>
                </SHeader>
                <Routes>
                    <Route path="/" element={<TodoLists />} />
                    <Route path="/create" element={<CreateTodoLists />} />
                    <Route path="/detail" element={<DetailTodoLists />} />
                    <Route path="/update" element={<UpdateTodoLists />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </SDiv>
        </todoContext.Provider>
        </BrowserRouter>
    );
};

const SDiv = styled.div`
    background-color: #008080;
    text-align: center;
    height: 100%;
`;
const SHeader = styled.div`
    display: flex; /* floatをflexに変更 */
    justify-content: space-between;
    padding: 10px; /* パディングを追加 */
`;
const Sa1 = styled.a`
    text-align: left;
    margin-left: 50px;
`;
const Sa2 = styled.a`
    text-align: right;
    margin-right: 50px; /* 右側のマージンを使用 */
`;

export default (App);