import './shopFilter.scss';
import '../../style/button.scss';

const ShopFilter = ({onUpdateFilter, filterValue}) => {
    const btnData = [
        {name: 'all', label: 'All items'},
        {name: 'important', label: 'Important'},
        {name: 'priceOver5', label: 'Price over 5$'}
    ]

    const buttons = btnData.map(({name, label}) => {
        let currentClass = 'button button__filter';
        if (filterValue === name) {
            currentClass += ' button__filter_active'
        } 
        return (
            <button className={currentClass} type="button" key={name} onClick={() => onUpdateFilter(name)}>
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