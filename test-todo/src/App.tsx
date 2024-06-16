import { ChangeEvent, FC, useCallback, useState } from "react"
import styled from "styled-components";
import { MemoList } from "./components/MemoList"

// export const App = () => {
//     return <h1>簡単メモアプリ</h1>
// }
// 解説:上記コードは分割代入によってreturn文を引数無しでAppメソッドに代入している。

export const App: FC = () =>{
    // テキストボックスのStateを定義
    const [text,setText] = useState<string>("");
    // 解説：アロー関数でAppメソッドの処理を定義（FCは関数コンポーネントを型定義している）
    // 処理内容は次のとおり。
    // string型に指定されたuseStateメソッドで初期値""をState変数textに代入。setTextはtextの状態更新用。
    // つまり、分割代入で右辺のuseState("")を左辺の配列内textに代入しているということ。右辺の方が要素数が多いためsetTextはundefindが代入される。
    const [memos, setMemos] = useState<string[]>([]);
    // 解説：メモリストは文字列型の配列なのでuseState<string[]>となる。よって初期値も空配列[]で与える。
    // テキストボックスに入力された時、変数を更新する。
    const onChangeText = (e:ChangeEvent<HTMLInputElement>) =>setText(e.target.value);
    // 解説：onChangeTextにアロー関数を定義。アロー関数の中身は以下。
    // 引数(e:ChangeEvent<HTMLInputElement>)はイベントeの型を定義している。
    // setText(e.target.value)は引数の値を使って変数を更新する。つまり、変数textをイベントの発生元であるtarget.valueに更新する。
    // アロー関数の処理が{}で囲まれていないのは式が１つしかないため省略されている。
    const onClickAdd = () => {
        const newMemos =  [...memos];
        // 解説：スプレッド構文で配列memosをコピーして新しい配列newMemosを作成
        newMemos.push(text);
        // 解説：newMemosにpushメソッドでtextを追加
        setMemos(newMemos);
        // 解説：State更新用のsetMemosは引数としてnewMemosを受け取り、memosを更新する。
        // 結果、Reactが更新を検知しUIを再レンダリングし画面に反映する。
        setText("");
        // 解説：状態変数更新用のsetTextに空文字をセットする（つまりリセットする）。
    };
    
    const onClickDelete = useCallback((index: number)=> {
      const newMemos = [...memos];
      newMemos.splice(index,1);
      setMemos(newMemos);
    },[memos]);
    
    

    return (
        <SDiv>
        <h1>簡単メモアプリ</h1>
        <SInput type="text" value={text} onChange={onChangeText} />
        {/* Reactはタグ内で{}で囲むことでJSを記述できる。つまり、value={text}はvalueに状態変数textをバインドするので
        入力フィールドにはtextの内容が表示される
        onChange={onChangeText}は入力フィールドを更新した時に呼び出す関数を指定している。
        つまり、入力フィールドのテキストが変更されるとonChangeイベントが発生し、onChange={onChangeText}
        によってonChangeText関数が実行される。 */}
        <SButton onClick={onClickAdd}>追加</SButton>
        {/* コンポーネントにSButtonという独自の名称をつけ、onClickイベントが発生したらonClickAdd関数を実行する */}
        <MemoList memos={memos} onClickDelete={onClickDelete} />
        </SDiv>
      );
  };

const SDiv = styled.div`
  text-align: center;
`;

const SButton = styled.button`
  margin-left: 16px;
  height: 32px;
  border-radius: 5px;
`;

const SInput = styled.input`
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
`;