import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


// const URL ='http://localhost:5000/api/citas/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/citas/';


const CompMostrarCitas = () => {

    const [citas, setCitas] = useState([]);

    useEffect(() =>{
        mostrarCitas();

    },[]);

    // creamos la funcion mostrar clientes
    const mostrarCitas = async () => {
        const datos = await axios.get (URL);
        setCitas (datos.data)
    }

    // funcion eliminar clientes

    const eliminarCitas = async (id) => {
        await axios.delete(`${URL}${id}`);
        mostrarCitas();
    }


    return(

        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to='/citas/agregar' className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i></Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light">
                            <tr>
                                <th>Entidad</th>
                                <th>Especialidad</th>
                                <th>sede</th>
                                <th>costo</th>
                                <th>hora</th>
                                <th>fecha</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                                {citas.map((cli, index) => (
                                    <tr key={index}>
                                        <td> {cli.entidad} </td>
                                        <td> {cli.especialidad} </td>
                                        <td> {cli.sede}</td>
                                        <td> {cli.costo}</td>
                                        <td> {cli.hora} </td>
                                        <td> {cli.fecha}</td>
                                        <td>
                                            <Link to = {`/citas/editar/${cli._id}`} className="btn btn-primary mt-2mb-2"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button onClick={() => eliminarCitas (cli._id)} className="btn btn-danger"> <i class="fa-solid fa-trash"></i> </button>



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

export default CompMostrarCitas;
