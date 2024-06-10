import { ColoredMessage } from "./components/coloredMessage";

export const App = () => {
    // ボタンを押した時に実行する関数を定義
    const onClickButton = () => {
        alert();
    };


    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };


    return (
        <>
            <h1 style={{color: "red"}}>こんにちは</h1>
            <ColoredMessage color="blue" message="お元気ですか？"/>
            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};