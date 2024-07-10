import { useState } from "react";

export const useMemoList = () => {
    const [memos, setMemos]= useState([]);
    const addTodo = (text) => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
        setText("");
    }
    const deleteTodo = (index) => {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }
    return {memos, addTodo, deleteTodo}
};