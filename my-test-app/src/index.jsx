import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));

// 解説：document.getElementById("root")はindex.htmlからid=rootの要素を取得し、ルート要素に指定する。
// 解説:ReactDOM.createRoot()は非同期レンダリングモデルを使用できるようにするメソッド
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );
    console.log("Rendering App components");
// 解説:renderメソッドで引数の内容をルート要素（今回はidが"root"のもの）にレンダリング。
