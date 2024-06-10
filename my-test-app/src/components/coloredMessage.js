export const ColoredMessage = (props) => {
    console.log(props);
    // スタイルを定義
    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    };

    // コンポーネントの表示をreturn文の中に移動する
    return <p style={contentStyle}>お元気ですか？</p>;
};