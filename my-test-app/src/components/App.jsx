import React from "react";
import {styled} from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { TodoLists } from "./TodoLists";
import { CreateTodoLists } from "./CreateTodo";
import { DetailTodoLists } from "./DetailTodo";
import { UpdateTodoLists } from "./UpdateTodo";
import { todoContext } from "./providers/todoContext";
import { NotFound } from "./NotFound";

const App = () => {
    return(
        <SDiv>
            <SHeader>
                <h3>
                <Sa1 href="/">Top</Sa1>
                <Sa2 href="/create">Create</Sa2>
                </h3>
            </SHeader>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <TodoLists />
                    </Route>
                    <Route path="/create">
                        <CreateTodoLists />
                    </Route>
                    <Route path="/detail">
                        <DetailTodoLists />
                    </Route>
                    <Route path="/update">
                        <UpdateTodoLists />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
            <p></p>
        </SDiv>
    );
};


const SDiv = styled.div`
    background-color: #008080;
    text-align: center;
    height: 100%;
`;
const SHeader = styled.div`
    display: float;
    justify-content: space-between;
 `;
const Sa1 = styled.a`
    text-align: left
    margin-left: 50px;
`;
const Sa2 = styled.a`
    text-align: right;
    margin-left: 50px;
`;

export default(App);
