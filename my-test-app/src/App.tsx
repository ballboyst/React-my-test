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
    const onClickAdd = () => {
        const newMemos =  [...memos];
        // スプレッド構文で配列memosをコピーして新しい配列newMemosを作成
        newMemos.push(text);
        // newMemosにpushメソッドでtextを追加
        setMemos(newMemos);
        // State更新用のsetMemosは引数としてnewMemosを受け取り、memosを更新する。
        // 結果、Reactが更新を検知しUIを再レンダリングし画面に反映する。
        setText("");
        // 状態変数更新用のsetTextに空文字をセットする（つまりリセットする）。
    };
    
    
    ここに削除ボタン押下時の状態管理処理を書く
    

    return (
        <div>
        <h1>簡単メモアプリ</h1>
        <input type="text" value={text} onChange={onChangeText} />
        {/* Reactはタグ内で{}で囲むことでJSを記述できる。つまり、value={text}はvalueに状態変数textをバインドするので
        入力フィールドにはtextの内容が表示される
        onChange={onChangeText}は入力フィールドを更新した時に呼び出す関数を指定している。
        つまり、入力フィールドのテキストが変更されるとonChangeイベントが発生し、onChange={onChangeText}
        によってonChangeText関数が実行される。 */}
        <SButton onClick={onClickAdd}>追加</SButton>
        {/* コンポーネントにSButtonという独自の名称をつけ、onClickイベントが発生したらonClickAdd関数を実行する */}
        <SContainer>
            <p>メモ一覧</p>
            <ul>
                {memos.map((memo, index) => (
                    <li key={memo}>



                        ここに上記処理の内容を記述


                        <SMemoWrapper>
                            <p>{memo}</p>
                            <SButton onClick={() => onClickDelete(index)}>削除</SButton>
                            {/* 削除ボタンが押下されるとonClickイベントが検知されonClickDelete関数を実行する。
                            引数のindexは削除するメモを特定するために必要。
                            関数を直接イベントのプロパティに渡す場合（onClickAddなど）はアロー関数にする必要がないが、
                            特定の値を伴う関数を呼び出す必要がある場合（onClickDelete(index)など）はアロー関数が必要 */}
                        </SMemoWrapper>
                    </li>
                ))}
            </ul>
        </SContainer>
    </div>
    );
};



