import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


// const URL ='http://localhost:5000/api/medico/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/medico/';


const CompAgregarMedico = () => {
    const[nombreMedico, setNombreMedico] = useState('');
    const[apellidoMedico, setApellidoMedico] = useState('');
    const[especialidad, setEspecialidad] = useState('');
    const[salario, setSalario] = useState('');
    const[tipoContrato, setTipoContrato] = useState('');
    const[fechaContratacion, setFechaContratacion] = useState('');
    const  navigate = useNavigate ();


    // funcion agregar medico 
    const guardarMedico = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombreMedico: nombreMedico, apellidoMedico: apellidoMedico, especialidad: especialidad, salario: salario, tipoContrato: tipoContrato, fechaContratacion: fechaContratacion
        })
        navigate('/medico');
    }

    return(
        <div>
            <h3>Formulario Guardar MEDICOS</h3>
            <form onSubmit={guardarMedico}>
                <div className="mb-3">
                    <label className="form-label">Nombre del Medico</label>
                    <input value={nombreMedico} onChange={(e) => setNombreMedico(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido del Medico</label>
                    <input value={apellidoMedico} onChange={(e) => setApellidoMedico(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Especialidad </label>
                    <input value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Salario</label>
                    <input value={salario} onChange={(e) => setSalario(e.target.value)} type="number" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de Contrato</label>
                    <input value={tipoContrato} onChange={(e) => setTipoContrato(e.target.value)} type="text" className="form-control"/>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Fecha de Contratacion</label>
                    <input value={fechaContratacion} onChange={(e) => setFechaContratacion(e.target.value)} type="date" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>




            </form>

        </div>
    )
}

export default CompAgregarMedico;