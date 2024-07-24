import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


// const URL ='http://localhost:5000/api/citas/';
const URL ='https://procitasbackend-sbgf.onrender.com/api/citas/';


const CompEditarCitas = () => {
    const[entidad, setEntidad] = useState('');
    const[especialidad, setEspecialidad] = useState('');
    const[sede, setSede] = useState('');
    const[costo, setCosto] = useState('');
    const[hora, setHora] = useState('');
    const[fecha, setFecha] = useState('');
    const  navigate = useNavigate ();
    const {id} = useParams();

    // funcion agregar citas 
    const actualizarCitas = async (e) => {
        e.preventDefault();
        await axios.put(`${URL}${id}`, {
            entidad: entidad, especialidad: especialidad, sede:sede, costo:costo, hora: hora, fecha:fecha
        })
        navigate('/citas');
    }

    useEffect(() => {
        getcitas()

    }, []);

    const getcitas = async ()=> {
        const res = await axios.get(`${URL}${id}`)
        setEntidad(res.data.entidad);
        setEspecialidad(res.data.especialidad);
        setSede(res.data.sede);
        setCosto(res.data.costo);
        setHora(res.data.hora);
        setFecha(res.data.fecha);
        
    }


    return(

        <div>

<h3>Formulario Actualizar Citas</h3>
            <form onSubmit={actualizarCitas}>
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

export default CompEditarCitas;