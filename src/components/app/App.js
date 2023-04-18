import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import {ShopList, InitTitle} from '../shopList/ShopList';
import ShopTotal from '../shopTotal/ShopTotal';
import Footer from '../footer/Footer';

import './app.scss';

const dataItems = [
  {
    name: 'Bananas', 
    amount: 2, 
    price: 3,
    checked: false, 
    important: false,
    id: uuidv4()
  },
  {
    name: 'Cat`s food', 
    amount: 5, 
    price: 10,
    checked: false, 
    important: true,
    id: uuidv4()
  },
  {
    name: 'Bread', 
    amount: 4, 
    price: 8,
    checked: false, 
    important: false,
    id: uuidv4()
  },
  {
    name: 'Milk', 
    amount: 3, 
    price: 6,
    checked: true, 
    important: false,
    id: uuidv4()
  }
];


const App = () => {
  const [data, setData] = useState(dataItems);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('all');
  
  const toggleImportant = (id) => {
    setData(prevData => prevData.map(objItem => {
      if (objItem.id === id) {
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
      if (objItem.id === id) {  
        return {...objItem, [inputDataAttr]: inputValue.replace(/\D/g, '')}
      }
      return {...objItem}
    }))
  }

  const onDeleteItem = (id) => {
    setData(prevData => prevData.filter(objItem => {
      return objItem.id !== id
    }))
  }

  const calcAmount = (arr, prop) => {
    let res = arr.reduce((sum, item) => {
      return sum + item[prop];
    }, 0);
    return res;
  }

  const onAddItem = (item, amount, price) => {
    let newListItem = {
      name: item, 
      amount, 
      price,
      checked: false, 
      important: false,
      id: uuidv4()
    }
    setData(prevData => {
      const newArr = [...prevData, newListItem];
      return newArr;
    });
  }

  const onFilterImportant = (data) => {
    return data.filter(item => item.important)
  }

  const searchItem = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    } 

    return items.filter(item => {
      return item.name.indexOf(searchValue) > -1
    })
  }

  const onUpdateSearch = (searchValue) => {
    setSearchValue(searchValue);
  }

  const filterItem = (items, filterValue) => {
    switch (filterValue) {
      case 'all':
        return items;
      case 'important':
        return items.filter(item => item.important);
      case 'priceOver5':
        return items.filter(item => item.price > 5);
    }
  }

  const onUpdateFilter = (filter) => {
    setFilterValue(filter)
  }


  console.log(data);
  
  const totalItems = data.filter(item => !item.checked);
  console.log(totalItems)
  const totalAmount = calcAmount(totalItems, 'amount');
  const totalPrice = calcAmount(totalItems, 'price');
  const visibleData = filterItem(searchItem(data, searchValue), filterValue);
  console.log(visibleData)
  
  return (
    <div className='app'>
      <header>
        <h1 className='app__header'>Shopping list</h1>
      </header>
      <main className='container'>
        <section className='search'>
          <ShopFind onUpdateSearch={onUpdateSearch}/>
          <ShopFilter onUpdateFilter={onUpdateFilter} />
        </section>
        <section className='list'>
          {data.length > 0 ? <ShopList data={visibleData} 
                            toggleImportant={toggleImportant} 
                            onChecked={onChecked} 
                            onChangeInput={onChangeInput}
                            onDeleteItem={onDeleteItem}
                  /> : <InitTitle/>}
       </section>
        <ShopAdd onAddItem={onAddItem}/>
        <ShopTotal totalItems={totalItems.length}
                   totalAmount={totalAmount}
                   totalPrice={totalPrice}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;