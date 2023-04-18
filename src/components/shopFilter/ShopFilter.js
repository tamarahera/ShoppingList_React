import './shopFilter.scss';
import '../../style/button.scss';

const ShopFilter = ({onUpdateFilter}) => {
    const btnData = [
        {name: 'all', label: 'All items'},
        {name: 'important', label: 'Important'},
        {name: 'priceOver5', label: 'Price over 5$'}
    ]

    const buttons = btnData.map(({name, label}) => {
        return (
            <button className='button button__filter button__filter_active' key={name} onClick={() => onUpdateFilter(name)}>
               {label}
            </button>
        )
    }) 

    return (
        <div className='search__filter'>
            {buttons}
        </div>
    )
}

export default ShopFilter;