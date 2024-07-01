import {useCallback, useState} from "react"

export const useMemo = () => {

    // const [text,setText] = useState("");
    const [memos,setMemos] = useState([]);

    // const onChangeText = (e) => {setText(e.target.value)
    // };

    const addTodo = useCallback(
        (text) => {
            const newMemos = [...memos];
            newMemos.push(text);
            setMemos(newMemos);
        },
        [memos]
    )

    const deleteTodo = useCallback(
        (index) => {
            const newMemos = [...memos];
            newMemos.splice(index, 1);
            setMemos(newMemos);
        },
        [memos]
    )

    return {memos, addTodo, deleteTodo};
};