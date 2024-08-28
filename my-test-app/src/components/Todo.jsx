import React, { Component } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.title, // todoの内容は親から渡ってきたtitleを表示
    };
    // thisをbind
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleClickEditFlg = this.handleClickEditFlg.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  // todoの内容が変更されたら、todoに表記するtextを変更
  // ※親のtodoのtitleの値はここでは変更していないことに注意
  handleChangeText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  // 親コンポーネントから渡されたメソッドを自分のメソッド内で実行する
  // 親コンポーネントのtodo更新処理を実施
  handleClickUpdate(e) {
    // エンターキーが押された際にtodoを更新
    if (e.keyCode === 13) {
      this.props.onChangeTitle(this.props.id, e);
    }
  }
  // 親コンポーネントのtodoのeditFlgをtrueにする(todoを編集モードにする)
  handleClickEditFlg() {
    this.props.onChangeFlg(this.props.id);
  }
  // 親コンポーネントのtodo削除処理を実施
  handleClickDelete() {
    if (window.confirm('todoを削除してもいいですか？')) {
      this.props.onRemove(this.props.id);
    }
  }

  render() {
    // editFlgにて読み取りモードと編集モードに切り替える
    const editForm = this.props.editFlg ? (
      <input
        type="text"
        className="editForm"
        value={this.state.text}
        onChange={this.handleChangeText}
        onKeyUp={this.handleClickUpdate}
      />
    ) : (
      <span className="todo-task" onClick={this.handleClickEditFlg}>
        {this.state.text}
      </span>
    );
    return (
      <li className="todo">
        {editForm}
        <i
          className="far fa-trash-alt delete fa-lg"
          onClick={this.handleClickDelete}
        ></i>
      </li>
    );
  }
}