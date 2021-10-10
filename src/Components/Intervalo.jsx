import React from 'react'
import './Intervalo.css'
import Card from './Card'


export default function Intervalo(props) {

    const {min, max} = props
    return(
        <Card title='Intervalo de Números' red>
          <div className='Intervalo'>
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={0} readOnly />
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={10} readonly/>
            </span>
        </div>
           
        </Card>
    )
}