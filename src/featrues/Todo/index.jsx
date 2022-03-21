
import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import NotFound from './../../components/NotFound'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

                <Route component={NotFound} />
            </Switch>
        </>
    );
}

export default TodoFeature;