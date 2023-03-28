import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import ShopList from '../shopList/ShopList';
import ShopListItem from '../shopListItem/ShopListItem';
import ShopTotal from '../shopTotal/ShopTotal';

import './app.scss';

const dataItems = [
  {shopItem: 'Bananas', 
  amount: '2', 
  price: '3', 
  important: false},
  {shopItem: 'Cat`s food', 
  amount: '5', 
  price: '10', 
  important: true},
  {shopItem: 'Bread', 
  amount: '4', 
  price: '8', 
  important: false},
  {shopItem: 'Milk', 
  amount: '3', 
  price: '6', 
  important: false}
]

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
        <ShopList data={dataItems}/>        
        <ShopAdd/>
        <ShopTotal/>
      </main>
    </div>
  );
}

export default App;