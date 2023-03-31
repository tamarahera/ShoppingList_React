import { useState, useEffect } from 'react';
import ShopListItem from '../shopListItem/ShopListItem';

import './shopList.scss';

const ShopList = ({data}) => {

    console.log(data)
    const contentItem = data.map(item => {
        console.log(item)
        const {id, ...itemProps} = item;
        return (
            <ShopListItem key={id} data={itemProps}/>
        )
    })
    return (
        <>
            <div className="list__title">
                <p>Item</p>
                <p>Amount</p>
                <p>Price</p>
                <p></p>
            </div>
            <ul className="list__wrapper">
                {contentItem}
            </ul>    
        </>
    )
}

const InitTitle = () => {
    return (
        <h2 className="list__init">Add some item to buy...</h2>
    )
} 


export {ShopList};
export {InitTitle};