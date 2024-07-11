import {createSlice} from  "@reduxjs/toolkit";

Todo= {id,title;
const state = {
    todos:[
        {
            id:1, 
            title:"test1"
        },
        {
            id:2,
            title:"test2"
        }
    ] as Todo[]
}

export const todoSlice = createSlice({
    name:'todoSlice',
    initialState: state,
    reducers:{
        // actionを記述する
    }
})