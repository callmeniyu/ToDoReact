import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {
    const [isEditable, setIsEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    const editTodo = () => {
        updateTodo({ ...todo, todo: todoMsg })
        setIsEditable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input type="checkbox" checked={todo.completed} onChange={toggleCompleted} />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEditable ? "border-black/10 px-2" : "border-transparent"
                }`}
                onChange={(e) => setTodoMsg(e.target.value)}
                value={todoMsg}
                readOnly={!isEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return
                    if (isEditable) {
                        editTodo()
                    } else {
                        setIsEditable((prevVal) => !prevVal)
                    }
                }}
                disabled={todo.completed}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem
