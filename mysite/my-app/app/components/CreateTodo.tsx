import { useState } from "react";

export const CreateTodo = () =>{
    const [text,setText]=useState("");
    const onChangeText = (e) =>{
        setText(e.target.value);
    };

    return (
        <div>
        <input type={text} onChange={onChangeText}/>
        <button>追加</button>
        </div>
    );
};