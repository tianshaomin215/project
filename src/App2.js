import React, {useState} from 'react';
import InputNumber from './components/InputNumber';

export default function() {
    const [value, setValue] = useState('aaa');
    return (
        <div>
            <InputNumber value={value} onChange={e=>{ setValue(e.target.value)}}/>
            <InputNumber defaultValue={value} onChange={e=>{ }}/>

            
        </div>
    )
}