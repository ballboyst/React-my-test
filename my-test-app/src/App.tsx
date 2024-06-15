import { FC, useState } from "react"

export const App = () => {
    return <h1>簡単メモアプリ</h1>
}
// 解説:上記コードは分割代入によってreturn文を引数無しでAppメソッドに代入している。

export const App: FC = () =>{
    // テキストボックスのStateを定義
    const [text,setText] = useState<string>("");
    // アロー関数でAppメソッドの処理を定義（FCは関数コンポーネントを型定義している）
    // 処理内容は次のとおり。
    // string型に指定されたuseStateメソッドで初期値""をState変数textに代入。setTextはtextの状態更新用。
    // つまり、分割代入で右辺のuseState("")を左辺の配列内textに代入しているということ。右辺の方が要素数が多いためsetTextはundefindが代入される。
    const [memos, setMemos] = useState<string[]>([]);
    // メモリストは文字列型の配列なのでuseState<string[]>となる。よって初期値も空配列[]で与える。

    // テキストボックスに入力された時、変数を更新する。
    const onChangeText = (e:ChangeEvent<HTMLInputElement>) =>setText(e.target.value);
    // onChangeTextにアロー関数を定義。アロー関数の中身は以下。
    // 引数(e:ChangeEvent<HTMLInputElement>)はイベントeの型を定義している。
    // setText(e.target.value)は引数の値を使って変数を更新する。つまり、変数textをイベントの発生元であるtarget.valueに更新する。
    // アロー関数の処理が{}で囲まれていないのは式が１つしかないため省略されている。


