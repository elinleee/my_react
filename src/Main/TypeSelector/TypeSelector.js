import React, {useState} from 'react';

import './TypeSelector.css';
import { SermonType } from "./SermonType";

function TypeSelector () {

    const [type, setType] = useState(0);
    
    const handleType = (index) => {
        setType(index);
        console.log(index);
    }

    return (
            <nav className="TypeSelector">
                <ul className='sermon-menu'>
                    {SermonType.map((item, index)=>{
                        return (
                            <li key={index} onClick={() => {handleType(index)}}>
                                <p className={type == index ? (item.cName + ' sermon-type-selected') : item.cName}>{item.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
}
export default TypeSelector