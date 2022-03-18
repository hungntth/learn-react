import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Learn',
            status: 'new',
        },
    ];
    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, index) => {

        const newTodoList = [...todoList];

        console.log(todo, index);

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }
    return (
        <div>
            <>
                <h3>Todo List</h3>
                <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
            </>
        </div>
    );
}

export default TodoFeature;