import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


// const URL ='http://localhost:5000/api/citas/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/citas/';

const CompAgregarCitas = () => {
    const[entidad, setEntidad] = useState('');
    const[especialidad, setEspecialidad] = useState('');
    const[sede, setSede] = useState('');
    const[costo, setCosto] = useState('');
    const[hora, setHora] = useState('');
    const[fecha, setFecha] = useState('');
    const  navigate = useNavigate ();


    // funcion agregar citas 
    const guardarCitas = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            entidad: entidad, especialidad: especialidad, sede:sede, costo:costo, hora: hora, fecha:fecha
        })
        navigate('/citas');
    }

    return(
        <div>
            <h3>Formulario Guardar Citas</h3>
            <form onSubmit={guardarCitas}>
                <div className="mb-3">
                    <label className="form-label">Entidad</label>
                    <input value={entidad} onChange={(e) => setEntidad(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Especialidad</label>
                    <input value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Sede</label>
                    <input value={sede} onChange={(e) => setSede(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Costo</label>
                    <input value={costo} onChange={(e) => setCosto(e.target.value)} type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Hora</label>
                    <input value={hora} onChange={(e) => setHora(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha</label>
                    <input value={fecha} onChange={(e) => setFecha(e.target.value)} type="date" className="form-control"/>
                </div>
                

                <button type="submit" className="btn btn-primary">Guardar</button>




            </form>

        </div>
    )
}

export default CompAgregarCitas;