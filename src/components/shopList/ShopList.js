import './shopList.scss';

const ShopList = () => {
    return (
        <section className='list'>
            <div className="list__wrapper">
                <div className="list__item">
                    <input type="checkbox" className="list__name" /><input type="text" className="list__amount" /><input type="text" className="list__price" />
                    <div className="list__btns">
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button><button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                    </div>
                </div>
                <div className="list__item">
                    <input type="checkbox" className="list__name" />
                    <input type="text" className="list__amount" />
                    <input type="text" className="list__price" />
                    <div className="list__btns">
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                            </button>
                        </div>
                </div>
                <div className="list__item">
                    <input type="checkbox" className="list__name" value="Bananas" />
                    <input type="text" className="list__amount" />
                    <input type="text" className="list__price" />
                    <div className="list__btns">
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                    </div>
                </div>
                <div className="list__item">
                    <input type="checkbox" className="list__name" />
                    <input type="text" className="list__amount" />
                    <input type="text" className="list__price" />
                    <div className="list__btns">
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                        <button className="list__btn">
                            <img src="" alt="" className="list__icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopList;