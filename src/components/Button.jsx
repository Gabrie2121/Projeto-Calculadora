import React from 'react'
import './Button.css'

export default props=>{
    //pode fazer isso das classes aqui em cima usando variaveis com +=
    //EX:
    //let classes = 'button'
    //classes+= props.operation ? 'operation' : ''
    return(
        <button className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
        `}onClick={e=>props.click && props.click(props.label)}>{props.label}</button>
    )
}