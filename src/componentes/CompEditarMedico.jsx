import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


// const URL ='http://localhost:5000/api/medico/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/medico/';


const CompEditarMedico = () => {
    const[nombreMedico, setNombreMedico] = useState('');
    const[apellidoMedico, setApellidoMedico] = useState('');
    const[especialidad, setEspecialidad] = useState('');
    const[salario, setSalario] = useState('');
    const[tipoContrato, setTipoContrato] = useState('');
    const[fechaContratacion, setFechaContratacion] = useState('');
    const  navigate = useNavigate ();
    const {id} = useParams();

    // funcion agregar clientes 
    const actualizarMedicos = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            nombreMedico: nombreMedico, apellidoMedico: apellidoMedico, especialidad: especialidad, salario: salario, tipoContrato: tipoContrato, fechaContratacion: fechaContratacion
        })
        navigate('/medico');
    }

    useEffect(() => {
        getmedicos()

    }, []);

    const getmedicos = async ()=> {
        const res = await axios.get(`${URL}${id}`)
        setNombreMedico(res.data.nombreMedico);
        setApellidoMedico(res.data.apellidoMedico);
        setEspecialidad(res.data.especialidad);
        setSalario(res.data.salario);
        setTipoContrato(res.data.tipoContrato);
        setFechaContratacion(res.data.fechaContratacion);
        
    }


    return(

        <div>

<h3>Formulario Actualizar Medicos</h3>
            <form onSubmit={actualizarMedicos}>
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

export default CompEditarMedico;