import React from 'react'

function TodoCard({ data, index }) {
    return (
        <div className='todo-card-main-cont'>
            <span style={index % 2 == 0 ? { background: "#1F194C" } : { background: "#FECF34" }} className='vertical-line'></span>

            <span className='square'></span>
            <div className='todo-task-div'>
                <span className='todo-card-task-head'>{data.task}</span>
                <span className='todo-cars-task-hint'>{data.tag}</span>
            </div>
        </div>
    )
}

export default TodoCard
