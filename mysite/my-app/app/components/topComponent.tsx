import { CreateTodo } from "./create"
export const topComponent =({ activeComponent }) =>{
    return{
        <div>
            { activeComponent === "create" && <CreateTodo />}
        </div>
    };
};