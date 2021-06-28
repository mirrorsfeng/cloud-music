import React, { memo, useState } from 'react';
import ModalWrapper from './style'
const RZMine = memo(() => {

    //hook
    cnst [title ,setTitle] = useState("");
    const [input ,setInput] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const okClick = () => {

    }
    return (
        <ModalWrapper>
           <input type="text" className = "title" onChange = {handleChange}  value = {title}/>
           <textarea name="input" id="input" cols="30" rows="10" value = {input}></textarea>
           <div className = "footer">
               <button className = "btn ok" onClick = {okClick}>确认</button>
               <button className = "btn cancel">取消</button>
           </div>
        </ModalWrapper>
    );
});

export default RZMine;

