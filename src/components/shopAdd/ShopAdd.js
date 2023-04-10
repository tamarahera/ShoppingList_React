import { useState } from 'react';
import './shopAdd.scss';
import '../../style/input.scss';

const ShopAdd = ({onAddItem}) => {
    
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const onValueChange = (e) => {
        switch (e.target.name) {
            case 'item':
                setItem(e.target.value);
                break;
            case 'amount':
                setAmount(e.target.value);
                break;
            case 'price':
                setPrice(e.target.value);
                break;
        }
    }
    console.log(item, amount, price)
    const onSubmit = (e) => {
        if (item === '') return;
        if (amount === '') return;
        if (price === '') return;

        e.preventDefault();
        
        onAddItem(item, amount, price);
        onResetInputs();
    }
    const onResetInputs = () => {
        setItem('');
        setAmount('');
        setPrice('');
    }

    return (
        <section className='add'>
            <h2 className='add__title'>Add a new item:</h2>
            <form className='add__form' action="" onSubmit={onSubmit}>
                <input type="text"
                       onChange={onValueChange}
                       value={item}
                       name="item"              
                       className="input input__main"
                       placeholder='Item...'
                       required />
                <input type="number"
                       onChange={onValueChange}
                       value={amount}
                       name="amount" 
                       className="input input__add"
                       placeholder='Amount...'
                       required />
                <input type="number"
                       onChange={onValueChange}
                       value={price}
                       name="price" 
                       className="input input__add"
                       placeholder='Price...'
                       required />

                <div className='add__buttons'>
                    <button type="submit" onClick={onSubmit} className="button button__add">
                        Add
                    </button>
                    <button type="reset" onClick={onResetInputs} className="button button__add">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ShopAdd;