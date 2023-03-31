import { useState, useEffect } from 'react';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import {ShopList, InitTitle} from '../shopList/ShopList';
import ShopListItem from '../shopListItem/ShopListItem';
import ShopTotal from '../shopTotal/ShopTotal';

import './app.scss';

const dataItems = [
  {
    name: 'Bananas', 
    amount: '2', 
    price: '3',
    checked: false, 
    important: false,
    id: '1'
  },
  {
    name: 'Cat`s food', 
    amount: '5', 
    price: '10',
    checked: false, 
    important: true,
    id: '2'
  },
  {
    name: 'Bread', 
    amount: '4', 
    price: '8',
    checked: false, 
    important: false,
    id: '3'
  },
  {
    name: 'Milk', 
    amount: '3', 
    price: '6',
    checked: true, 
    important: false,
    id: '4'
  }
];


const App = () => {
  const [data, setData] = useState(dataItems);

  console.log(data)
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
        <section className='list'>
          {data ? <ShopList data={data}/> : <InitTitle/>}
        </section>
        <ShopAdd/>
        <ShopTotal/>
      </main>
    </div>
  );
}

export default App;