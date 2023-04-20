import ShopListItem from '../shopListItem/ShopListItem';

import './shopList.scss';
import '../../style/button.scss';

const ShopList = ({data, toggleImportant, onChecked, onChangeInput, onDeleteItem}) => {

    const contentItem = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ShopListItem key={id} 
                          data={itemProps}
                          toggleImportant={() => toggleImportant(id)}
                          onChecked={() => onChecked(id)}
                          onChangeInput={(e) => onChangeInput(id, e.target.value, e.currentTarget.getAttribute('data-input'))}
                          onDeleteItem={() => onDeleteItem(id)}
                          />
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
            <div className="list__reset">
                <button type="reset" className='button button__reset'>Reset</button>    
            </div>
        </>
    )
}

const InitTitle = () => {
    return (
        <h2 className="list__init">Add some item to buy...</h2>
    )
} 

const NoMatchTitle = () => {
    return (
        <h2 className="list__init">There are no matches...</h2>
    )
}

export {ShopList};
export {InitTitle};
export {NoMatchTitle};