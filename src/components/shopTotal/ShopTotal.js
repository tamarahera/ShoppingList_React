import './shopTotal.scss';

const ShopTotal = ({totalItems, totalAmount, totalPrice}) => {
    return (
        <section className='total'>
            <p>Total items: {totalItems} items</p>
            <p>Total amount: {totalAmount}</p>
            <p>Total price: {totalPrice}$</p>
        </section>
    )
}

export default ShopTotal;