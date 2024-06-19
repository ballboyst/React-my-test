import { useState } from "react";
export const App = () => {
    const [text, setText] = useState("");
    const [list,setList] = useState([]);
    const onChangeText = (e) => {setText(e.target.value)}
    const onClickAdd = () => {
    const newList = [...list, "list"];
    setList(newList);
    setText = "";
    };
    return(
        <>
            <h1>todoリスト</h1>
            <div>
                <input type="text" value={text} id="text" onChange={onChangeText}></input>
                <button id="addButton">送信</button>
            </div>
            <p>memoリスト</p>
            <ul>
                <div>
                    <p id = "output"></p>
                    <button id="delete Button">削除</button>
                </div>
            </ul>
        </>
    )
};

