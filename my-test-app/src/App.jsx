import { useState } from "react";
export const App = () => {
    const [text, setText] = useState("");
    const [list,setList] = useState([]);
    const onClickAdd = () => {
    const newList = [...list, "list"];
    setList(newList);
    setText = "";
    };
    return(
        <>
            <h1>todoリスト</h1>
            <div>
                <input type="text"></input>
                <button onClick={onClickAdd}>送信</button>
            </div>
        <div>
            <p>memoリスト</p>
            <ul>
                {list}
            </ul>
        </div>
        </>
    )
};

