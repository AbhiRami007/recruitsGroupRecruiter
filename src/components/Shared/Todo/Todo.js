import React from 'react'
import JobCard from '../NewJobs/JobCard'
import TodoCard from './TodoCard'

function Todo() {
    const data = [{ task: "Update profile", tag: "To find you" }, { task: "Update profile", tag: "To find you" }, { task: "Update profile", tag: "To find you" }]
    return (
        <div className='todo-main-cont'>
            <h3 className='new-jobs-head'>Todo</h3>
            <p className='todo-sub-heading'>Check your life, not boxes</p>
            <div className='todo-cards-cont'>
                {data.map((elem, index) => {
                    return <TodoCard data={elem} key={index} index={index} />
                })}
            </div>
        </div>
    )
}

export default Todo
