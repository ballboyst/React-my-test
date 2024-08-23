import React, { Component } from "React";
import Todo from './Todo'

export default class TodoList extends Component {
    constructor(props) {
        super(props);
            this.handleChangeTitle = this.handleChangeFlg.bind(this);
        this.handleChangeFlg = this.handleChangeFlgChangeFlg.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    //親コンポーネントのtodo更新処理
    handleChangeTitle(id, e){
        this.props.handleUpdate(id, e);
    }
    //親コンポーネントのtodoのeditFlgをtrueにする
    this.handleChangeFlg(id){
        this.props.changeEditFlg(id);
    // 親コンポーネントのtodo削除処理
    }
    this.handleRemove(id) {
        this.props.handleDelete(id);
    }

    render () {
        const todolist = this.props.todos.map((todo) => {
            return (
                <Todo
                 key={todo.id}
                 {...todo}
                 onChangeTitle={this.handleChangeTitle}
                 onChangeFlg={this.handleChangeFlg}
                 onRemove={this.handleRemove}
                 />
            );
        });
        
        return (
            <section className="common-area">
                <ul className="todolist">{todolist}</ul>
            </section>
        );
    }
}