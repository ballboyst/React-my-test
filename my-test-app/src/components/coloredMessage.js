export const ColoredMessage = (props) => {
    // スタイルを定義
    const { color, children } = props;

    const contentStyle = {
        color: color,
        fontSize: "20px"
    };

    // コンポーネントの表示をreturn文の中に移動する
    return <p style={contentStyle}>{children}</p>;
};