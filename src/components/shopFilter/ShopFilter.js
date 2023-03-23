import './shopFilter.scss';
import '../../style/button.scss';

const ShopFilter = () => {
    return (
        <div className='search__filter'>
            <button className='button button__filter button__filter_active'>
                All items
            </button>
            <button className='button button__filter'>
                Important
            </button>
            <button className='button button__filter'>
                Price over 5$
            </button>
        </div>
    )
}

export default ShopFilter;