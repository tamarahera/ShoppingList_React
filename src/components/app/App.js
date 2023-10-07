import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShopAdd from '../shopAdd/ShopAdd';
import ShopFilter from '../shopFilter/ShopFilter';
import ShopFind from '../shopFind/ShopFind';
import { ShopList, InitTitle, NoMatchTitle } from '../shopList/ShopList';
import ShopTotal from '../shopTotal/ShopTotal';
import Footer from '../footer/Footer';

import './app.scss';

const LOCAL_STORAGE_KEY = 'shopList.data';

const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setData(storedData);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data])

  const toggleImportant = (id) => {
    setData(prevData => prevData.map(objItem => {
      if (objItem.id === id) {
        return { ...objItem, important: !objItem.important }
      }
      return objItem;
    }))
  }

  const onChecked = (e, id) => {
    if (e.type === 'change' || (e.type === 'keydown' && e.code === 'Enter')) {
      setData(prevData => prevData.map(objItem => {
        if (objItem.id === id) {
          return { ...objItem, checked: !objItem.checked }
        }
        return objItem;
      }))
    }
  }

  const onChangeInput = (id, inputValue, inputDataAttr) => {
    setData(prevData => prevData.map(objItem => {
      if (objItem.id === id) {
        return { ...objItem, [inputDataAttr]: inputValue.replace(/\D/g, '') }
      }
      return { ...objItem }
    }))
  }

  const onDeleteItem = (id) => {
    setData(prevData => prevData.filter(objItem => {
      return objItem.id !== id
    }))
  }

  const calcAmount = (arr, prop) => {
    let res = arr.reduce((sum, item) => {
      return sum + +item[prop];
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

  const searchItem = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase());
    })
  }

  const onUpdateSearch = (searchValue) => {
    setSearchValue(searchValue);
  }

  const onDeleteChecked = () => {
    setData(prevData => prevData.filter(prevObj => {
      return prevObj.checked === false;
    }));
  }

  const filterItem = (items, filterValue) => {
    switch (filterValue) {
      case 'priceOver5':
        return items.filter(item => item.price > 5);
      case 'important':
        return items.filter(item => item.important);
      default:
        return items;
    }
  }

  const onUpdateFilter = (filter) => {
    setFilterValue(filter)
  }

  const setContent = () => {
    if (data.length < 1 || !data) {
      return <InitTitle />
    } else if (visibleData.length < 1) {
      return <NoMatchTitle />
    } else {
      return <ShopList data={visibleData}
                        toggleImportant={toggleImportant}
                        onChecked={onChecked}
                        onChangeInput={onChangeInput}
                        onDeleteItem={onDeleteItem}
                        onDeleteChecked={onDeleteChecked} />
    }
  }

  const totalItems = data.filter(item => !item.checked);
  const totalAmount = calcAmount(totalItems, 'amount');
  const totalPrice = calcAmount(totalItems, 'price');
  const visibleData = filterItem(searchItem(data, searchValue), filterValue);

  const content = setContent();

  return (
    <div className='app'>
      <header>
        <h1 className='app__header'>Shopping list</h1>
      </header>
      <main className='container'>
        <section className='search'>
          <ShopFind onUpdateSearch={onUpdateSearch} />
          <ShopFilter onUpdateFilter={onUpdateFilter}
            filterValue={filterValue} />
        </section>
        <section className='list'>
          {content}
        </section>
        <ShopAdd onAddItem={onAddItem} />
        <ShopTotal totalItems={totalItems.length}
          totalAmount={totalAmount}
          totalPrice={totalPrice} />
      </main>
      <Footer />
    </div>
  );
}

export default App;