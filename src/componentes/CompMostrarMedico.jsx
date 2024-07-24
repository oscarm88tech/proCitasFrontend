import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'


// const URL ='http://localhost:5000/api/medico/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/medico/';


const CompMostrarMedicos = () => {

    const [medico, setMedicos] = useState([]);

    useEffect(() =>{
        mostrarMedicos();

    },[]);

    // creamos la funcion mostrar Medicos
    const mostrarMedicos = async () => {
        const datos = await axios.get(URL);
        setMedicos (datos.data)
    }

    // funcion eliminar medico

    const eliminarMedicos = async (id) => {
        await axios.delete(`${URL}${id}`);
        mostrarMedicos();
    }


    return(

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/medicos/agregar' className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i></Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                            <tr>
                                <th>Nombre del Medico</th>
                                <th>Apellido del Medico</th>
                                <th>Especialidad</th>
                                <th>Salario</th>
                                <th>Tipo de Contrato</th>
                                <th>Fecha de Contratacion</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                                {medico.map((cli, index) => (
                                    <tr key={index}>
                                        <td> {cli.nombreMedico} </td>
                                        <td> {cli.apellidoMedico} </td>
                                        <td> {cli.especialidad}</td>
                                        <td> {cli.salario}</td>
                                        <td> {cli.tipoContrato} </td>
                                        <td> {cli.fechaContratacion}</td>
                                        
                                        <td>
                                            <Link to = {`/medico/editar/${cli._id}`} className="btn btn-primary mt-2mb-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => eliminarMedicos (cli._id)} className="btn btn-danger"> <i class="fa-solid fa-trash"></i> </button>



                                        </td>


                                    </tr>

                                ))}


                            </tbody>
                        </table>

                    </div>

                </div>



            </div>


        </div>
    )
}

export default CompMostrarMedicos;