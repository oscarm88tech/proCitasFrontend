import React from 'react'
import citas_medicas from "../imagenes/citas_medicas.jpg"

function CompFooter() {
  return (
    <div>
        <div className='card-body'>
            <h5 className='card-title'>Direccion calle 26 # 26 - 26 Bogota</h5>
            <p className='card-text'>Correo citas_medicas@gmail.com - telefono (601)3138000</p>
            <img src={citas_medicas} className='imagen' alt='logo' />

        </div>

        <div className='card-footer text muted'>
            lunes - viernes horario 8am - 5pm
        </div>
      
    </div>
  )
}

export default CompFooter
