import './shopAdd.scss';

const ShopAdd = () => {
    return (
        <section className='add'>
            <p className='add__title'>Add a new item:</p>
            <form className='add__form' action="">
                <input type="text"              
                       className="input input__main"
                       placeholder='Item...'
                       required />
                <input type="text" 
                       className="input input__add"
                       placeholder='Amount...'
                       required />
                <input type="text" 
                       className="input input__add"
                       placeholder='Price...'
                       required />

                <div className='add__buttons'>
                    <button type="submit" className="button button__add">
                        Add
                    </button>
                    <button type="reset" className="button button__add">
                        Reset
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ShopAdd;