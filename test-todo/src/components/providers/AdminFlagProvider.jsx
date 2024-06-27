import { createContext } from "react";

export const AdminFlagContext = createContext({});
// 新しいコンテキストを定義。このコンテキストが子コンポーネントで使われる。
export const AdminFlagProvider = props =>{
// プロバイダーを定義。プロップスを受け取っている。
    const { children } = props;
    // プロップスのチルドレンプロパティを取り出す。
    const sampleObj = { sampleValue: "テキスト" };
    // オブジェクトを作成。キーとバリューを設定している。
return (
<AdminFlagContext.Provider value={sampleObj}>
{/* 定義したコンテキストを使用しバリューの値を子コンポーネントに提供する */}
{ children }
{/* 特殊なコンポーネントで、<AdminFlagProvider></AdminFlagProvider>で囲まれたコンテンツを表示する。 */}
</AdminFlagContext.Provider>
);
};