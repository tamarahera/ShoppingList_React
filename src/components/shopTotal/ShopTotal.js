import './shopTotal.scss';

const ShopTotal = ({totalItems, totalAmount, totalPrice}) => {
    return (
        <section className='total'>
            <p>Total items: <span>{totalItems}</span></p>
            <p>Total amount: <span>{totalAmount}</span></p>
            <p>Total price: <span>{totalPrice}$</span></p>
        </section>
    )
}

export default ShopTotal;