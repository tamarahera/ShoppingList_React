import { useState } from 'react';

import './shopFind.scss';
import '../../style/input.scss';

const ShopFind = (props) => {
    const [searchValueLocal, setSearchValueLocal] = useState('');

    const onUpdateSearchLocal = (e) => {
        setSearchValueLocal(e.target.value);
        props.onUpdateSearch(e.target.value);
    }
 
    return (
        <input className='input input__find'
               type="text"
               placeholder="Find an item..."
               value={searchValueLocal}
               onChange={onUpdateSearchLocal}/>
    )
}

export default ShopFind;