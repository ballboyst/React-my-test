import React, { Component } from "react";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.title,
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.handleClickEditFlg = this.handleClickEditFlg.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleChangeText(e){
        this.setState({
            text: e.targe.value,
        });
    }

    handleClickUpdate(e) {
        if (e.keyCode === 13) {
            this.props.onChangeTitle(this.props.id, e);
        }
    }

    handleClickEditFlg() {
        this.props.onChangeFlg(this.props.id);
    }

    handleClickDelete() {
        if (window.confirm('todoを削除してもいいですか？')) {
            this.props.onRemove(this.props.id);
        }
    }
    render() {
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