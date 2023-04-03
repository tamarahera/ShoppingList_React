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
  
  const toggleImportant = (id) => {
    setData(prevData => prevData.map(objItem => {
      if (objItem.id === id) {
        console.log(objItem.important)
        return {...objItem, important: !objItem.important}
      }
      return objItem;
    }))
  }
  const onChecked = (id) => {
    setData(prevData => prevData.map(objItem => {
      if (objItem.id === id) {
        return {...objItem, checked: !objItem.checked}
      }
      return objItem;
    }))
  }

  const onChangeInput = (id, inputValue, inputDataAttr) => {
    setData(prevData => prevData.map(objItem => {
      console.log(objItem, objItem.id, id)
      if (objItem.id === id) {  
        console.log(inputValue)
        return {...objItem, [inputDataAttr]: inputValue.replace(/\D/g, '')}
      }
      return {...objItem}
    }))
    console.log(id, inputValue, inputDataAttr)
  }

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
          {data ? <ShopList data={data} 
                            toggleImportant={toggleImportant} 
                            onChecked={onChecked} 
                            onChangeInput={onChangeInput}
                  /> : <InitTitle/>}
        </section>
        <ShopAdd/>
        <ShopTotal/>
      </main>
    </div>
  );
}

export default App;