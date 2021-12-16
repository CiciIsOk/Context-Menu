import React from 'react'
import './Context.css'
import ContextItem from  './ContextItem'


const Context = () => {
    return (
       
        <div className='context'>
        <ul className='list'>
            <ContextItem>File 1</ContextItem>
            <ContextItem>File 2</ContextItem>
            <ContextItem>File 3</ContextItem>
            <ContextItem>File 4</ContextItem>
        </ul>
        </div>
    )
}

export default Context