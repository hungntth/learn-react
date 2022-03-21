import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useMemo } from 'react';

ListPage.propTypes = {

};

function ListPage(props) {
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
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all');

    }, [location.search]);

    const handleTodoClick = (todo, index) => {

        const newTodoList = [...todoList];

        console.log(todo, index);

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus('all');
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const handleShowNewClick = () => {
        setFilterStatus('new');
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const renderedTodoList = useMemo(() => {
        return todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    }, [todoList, filterStatus])

    return (
        <div>
            <>
                <h3>Todo List</h3>
                <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

                <div>
                    <button onClick={handleShowAllClick}>Show all</button>
                    <button onClick={handleShowCompletedClick}>Show completed</button>
                    <button onClick={handleShowNewClick}>Show New</button>
                </div>
            </>
        </div>
    );
}

export default ListPage;