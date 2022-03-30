import Header from 'components/Header';
import CartFeature from 'featrues/Cart';
import ProductFeature from 'featrues/Product';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './featrues/Album';

import TodoFeature from './featrues/Todo';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
