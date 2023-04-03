import './shopListItem.scss';

const ShopListItem = ({data, toggleImportant, onChecked, onChangeInput}) => {
    const {name, amount, price, checked, important} = data;
    let importantClass = "list__icon list__icon_important";
    if (important) {
        importantClass += " list__icon_important_active"
    }

    let checkedClass = "list__name";
    if (checked) {
        checkedClass += " list__name_checked"
    }

    return (
        <li className="list__item">
            <label className={checkedClass}>
                <input checked={checked} type="checkbox" name="item" onChange={onChecked}/>
                {name}
                <span className="list__name_checkbox"></span>
            </label>
            <input type="text" className="list__amount" onChange={onChangeInput} data-input="amount" value={amount}/>
            <input type="text" className="list__price" onChange={onChangeInput} data-input="price" value={price + `$`}/>
            <div className="list__btns">
                <button className="list__btn" onClick={(id) => toggleImportant(id, important)}>
                    <svg viewBox="0 0 17 17" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={importantClass}>
                        <path d="M9.42486 0.597589C9.25424 0.232396 8.89367 0 8.49769 0C8.10171 0 7.74436 0.232396 7.57051 0.597589L5.50047 4.98987L0.877481 5.6937C0.491159 5.75346 0.169223 6.03233 0.0501075 6.41413C-0.0690086 6.79592 0.0275719 7.21755 0.304436 7.49975L3.659 10.9226L2.86704 15.7598C2.80265 16.1582 2.96362 16.5632 3.28234 16.7989C3.60105 17.0346 4.02279 17.0645 4.37048 16.8753L8.50091 14.6011L12.6313 16.8753C12.979 17.0645 13.4008 17.0379 13.7195 16.7989C14.0382 16.5599 14.1992 16.1582 14.1348 15.7598L13.3396 10.9226L16.6942 7.49975C16.971 7.21755 17.0708 6.79592 16.9485 6.41413C16.8262 6.03233 16.5074 5.75346 16.1211 5.6937L11.4949 4.98987L9.42486 0.597589Z"/>
                    </svg>
                </button>
                <button className="list__btn">
                    <svg viewBox="0 0 17 17" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="list__icon list__icon_delete">
                        <path d="M16.4969 2.90325C17.1606 2.2395 17.1606 1.16156 16.4969 0.497813C15.8331 -0.165938 14.7552 -0.165938 14.0914 0.497813L8.5 6.09456L2.90325 0.503123C2.2395 -0.160628 1.16156 -0.160628 0.497813 0.503123C-0.165938 1.16687 -0.165938 2.24481 0.497813 2.90856L6.09456 8.5L0.503123 14.0967C-0.160628 14.7605 -0.160628 15.8384 0.503123 16.5022C1.16687 17.1659 2.24481 17.1659 2.90856 16.5022L8.5 10.9054L14.0968 16.4969C14.7605 17.1606 15.8384 17.1606 16.5022 16.4969C17.1659 15.8331 17.1659 14.7552 16.5022 14.0914L10.9054 8.5L16.4969 2.90325Z"/>
                    </svg>           
                </button>
            </div>
        </li>
    )
}


export default ShopListItem;