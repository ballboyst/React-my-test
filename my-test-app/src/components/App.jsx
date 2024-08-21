import React, `{Component}` from "react";

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
            uniqueID: 2,
            inputValue: '',
            searchKeyWord: '',
        };
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchResult = this.searchResult.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.changeEditFlg = this.changeEditFlg.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
}

componentWillMount(){
    console.log("componentWillMount");
}

componentDidMount(){
    console.log('componentDidMount');
}

handleAdd(e) {
    if (e.keyCode === 13 && e.target.value != "") {
        this.setState({
            todos: this.state.todos.concat({
                id:this.state.uniqueId + 1,
                tittle: e.target.value,
                editFlag: false,
            }),
            uniqueId: this.state.unique + 1,
        });
        this.setState({ inputValue:''});
    }
}

