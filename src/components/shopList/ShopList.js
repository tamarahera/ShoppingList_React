import ShopListItem from '../shopListItem/ShopListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './shopList.scss';
import '../../style/button.scss';

const ShopList = ({ data, toggleImportant, onChecked, onChangeInput, onDeleteItem, onDeleteChecked }) => {
    const contentItem = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <CSSTransition
                key={id}
                timeout={500}
                classNames="item"
            >
                <ShopListItem key={id}
                    data={itemProps}
                    toggleImportant={() => toggleImportant(id)}
                    onChecked={(e) => onChecked(e, id)}
                    onChangeInput={(e) => onChangeInput(id, e.target.value, e.currentTarget.getAttribute('data-input'))}
                    onDeleteItem={() => onDeleteItem(id)}
                />
            </CSSTransition>
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
                <TransitionGroup component={null}>{contentItem}</TransitionGroup>
            </ul>
            <div className="list__reset">
                <button type="reset" className='button button__reset' onClick={onDeleteChecked}>Delete checked</button>
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

export { ShopList };
export { InitTitle };
export { NoMatchTitle };