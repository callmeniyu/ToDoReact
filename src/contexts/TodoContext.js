import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "nothing",
            completed: false,
        },
    ],
    addTodo: (todo) => {},
    updateTodo: (id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
