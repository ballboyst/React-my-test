import {useState} from "react"

export const useMemo = () => {

    const [text,setText] = useState("");
    const [memos,setMemos] = useState([]);

    const onChangeText = (e) => {setText(e.target.value)
    };

    const onClickAdd = (text) => {
        const newMemos = [...memos];
        newMemos.push(text);
        setMemos(newMemos);
    };

    const onClickDelete = (index)=> {
        const newMemos = [...memos];
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }
    return {text, memos, onChangeText, onClickAdd, onClickDelete}
}