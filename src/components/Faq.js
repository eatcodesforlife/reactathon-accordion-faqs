import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';



const Faq = ({faq, info}) => {

    const [ isShowInfo, setIsShowInfo ] = useState(false)
    
    return (
        <article className='question'>
            <header>
                <h4>{faq}</h4>
                <button className='btn' onClick={()=> setIsShowInfo(!isShowInfo)} >
                    { isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>
            { isShowInfo && <p>{info}</p> }
        </article>
    )
}

export default Faq
