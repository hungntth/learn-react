import Header from 'components/Header';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import categoryApi from './api/categoryApi';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './featrues/Album';
import CounterFeature from './featrues/Counter';
import TodoFeature from './featrues/Todo';

function App() {
  useEffect(() =>{
    const fetchCategories = async() => {
      const categoryList = await categoryApi.getAll();

      
      console.log(categoryList)
    }
    fetchCategories();
  },[])
  return (
    <>
    <Header />

      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
