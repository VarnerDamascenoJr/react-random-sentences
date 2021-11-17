import React from 'react'

const Button = ({ cta }) => {

 const refresh =()=>{
    window.location.reload(false);
 }

    return (
        <button  className='btn' onClick={refresh} >
            {cta}
        </button>
    )
}

export default Button
