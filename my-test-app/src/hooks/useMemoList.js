import {useState, useCallback} from "react";

export const useMemoList = () => {
        const [memos, setMemos]=useState([]);
        const addTodo = useCallback((text) => {
                const newMemos=[...memos];
                newMemos.push(text);
                setMemos(newMemos);
            },[memos]);

        const deleteTodo = useCallback((index)=>{
                const newMemos = [...memos];
                newMemos.splice(index,1);
                setMemos(newMemos);
                },[memos])

return { memos, addTodo, deleteTodo };
};