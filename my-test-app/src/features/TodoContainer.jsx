import {useSelector} from "react-redux";

export const TodoContainer = () =>{
    const todos = useSelector((state) => state.todos)
    const args = {
        todos
    }
    return <TodoPresenter {...args} />
}