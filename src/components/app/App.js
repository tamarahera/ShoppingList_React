import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import ShopList from '../shopList/ShopList';
import ShopListItem from '../shopListItem/ShopListItem';
import ShopTotal from '../shopTotal/ShopTotal';

import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <header>
        <h1 className='app__header'>Shopping list</h1>
      </header>
      <main className='container'>
        <section className='search'>
          <ShopFind/>
          <ShopFilter/>
        </section>
        <ShopList/>
        <ShopAdd/>
        <ShopTotal/>
      </main>
    </div>
  );
}

export default App;