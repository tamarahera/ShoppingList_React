import { useState } from 'react';
import './shopAdd.scss';
import '../../style/input.scss';
import '../../style/button.scss';

const ShopAdd = ({ onAddItem }) => {

    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');

    const getFiltredValue = (value) => {
        // delete not num, "0num", "..."
        const filtredNumber = value.replace(/[^0-9\.]|\.{2,}|^0(?=\d)/gm, '');

        //only num, only one dot
        const matchedNumber = filtredNumber.match(/(\d+)(\.{0,1})(\d+)?/gm);
        if (matchedNumber) {
            return matchedNumber[0];
        } else {
            return filtredNumber;
        }
    }
    const onValueChange = (e) => {
        const filtredValue = getFiltredValue(e.target.value);
        switch (e.target.name) {
            case 'item':
                setItem(e.target.value);
                break;
            case 'amount':
                setAmount(filtredValue);
                break;
            case 'price':
                setPrice(filtredValue);
                break;
        }
    }
/*     console.log(item, amount, price)
 */    const onSubmit = (e) => {
        if (item === '') return;
        if (amount === '' || amount === '0') return;
        if (price === '' || price === '0') return;

        e.preventDefault();

        onAddItem(item, amount, price);
        onResetInputs();
    }
    const onResetInputs = () => {
        setItem('');
        setAmount('');
        setPrice('');
    }
    /* console.log(amount, price) */
    return (
        <section className='add'>
            <h2 className='add__title'>Add a new item:</h2>
            <form className='add__form' action="" onSubmit={onSubmit}>
                <label className='label-hidden' htmlFor="addNameInput">Add name</label>
                <input type="text"
                    onChange={onValueChange}
                    value={item}
                    name="addName"
                    className="input input__main"
                    placeholder='Item...'
                    id='addNameInput'
                    required />
                <label className='label-hidden' htmlFor="addAmountInput">Add amount</label>
                <input type="text"
                    onChange={onValueChange}
                    value={amount}
                    name="addAmount"
                    className="input input__add"
                    placeholder='Amount...'
                    id='addAmountInput'
                    required />
                <label className='label-hidden' htmlFor="addPriceInput">Add price</label>
                <input type="text"
                    onChange={onValueChange}
                    value={price}
                    name="addPrice"
                    className="input input__add"
                    placeholder='Price...'
                    id='addPriceInput'
                    required />

                <div className='add__buttons'>
                    <button type="submit" onClick={onSubmit} className="button button__add">
                        Add
                    </button>
                    <button type="reset" onClick={onResetInputs} className="button button__reset">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ShopAdd;