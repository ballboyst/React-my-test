import React, {Component} from 'react';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todos:[
                {
                    id:1,
                    title: 'Task1',
                    editFlag: false,
                },
                {
                    id:2,
                    title: 'Task2',
                    editFlag: false,
                },
            ],
            uniqueID: 2, //todo追加した際のidを３から開始する
            inputValue: '', //todo追加フォームの入力値
            searchKeyWord: '', //検索キーワード
        };
    this.handleAdd = this.handleAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.changeEditFlg = this.changeEditFlg.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
}

// componentWillMount(){
//     console.log("componentWillMount");
// }

componentDidMount(){
    console.log('componentDidMount');
}

handleAdd(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
        this.setState({
            todos: this.state.todos.concat({
                id:this.state.uniqueId + 1,
                tittle: e.target.value,
                editFlg: false,
            }),
            uniqueId: this.state.uniqueId + 1,
        });
        this.setState({ inputValue:''});
    }
}

onChange(e) {
    this.setState({
        inputValue: e.target.value,
    });
}

handleSearch(e) {
    this.setState({
        searchKeyWord: e.target.value,
    });
}

searchResult(todo) {
    const regexp = new RegExp('^' + this.satate.searchKeyWord, 'i');
    return todo.title.match(regexp);
}

handleUpdate(targetId, e) {
    const editIndex = this.state.todos.findIndex(
        (todo) => todo.id === targetId
    );
    const nextTodos = this.state.todos;
    nextTodos[editIndex].title = e.target.value;
    nextTodos[editIndex].editFlg = false;
    this.setState({
        todos:nextTodos,
    });
}
changeEditFlg(targetId) {
    const editIndex = this.state.todos.findIndex(
        (todo) => todo.id === targetId
    );
    const nextTodos = this.state.todos;
    nextTodos(editIndex).editFlg = true;
    this.setState({
        todos: nextTodos,
    });
}

handleDelete(targetId) {
    const deleteIndex = this.state.todos.findIndex(
        (todo) => todo.id === targetId
    );
    this.state.todos.splice(deleteIndex, 1);
    this.setState({
        todos: this.state.todos,
    });
}

render () {
    const todos = this.state.searchKeyWord
    ? this.state.todos.filter(this.searchResult)
    : this.state.todos;
    return (
        <div className="wrapper">
            <h1 className="title">Todo List</h1>
            <AddTodo
              value={this.state.inputValue}
              handleAdd={this.handleAdd}
              onChange={this.onChange}
            />
            <SearchTodo handleSearch={this.handleSearch} />
            <TodoList
             todos={todos}
             handleUpdate={this.handleUpdate}
             changeEditFlg={this.changeEditFlg}
             onChange={this.onChange}
             />
             <SearchTodo handleSearch={this.handleSearch} />
             <TodoList
               todos={todos}
               handleUpdate={this.handleUpdate}
               changeEdiFlg={this.changeEditFlg}
               handleDelete={this.handleDelete}
            />
        </div>
    );
};
};