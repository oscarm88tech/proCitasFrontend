import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from "axios";


// const URL ='http://localhost:5000/api/auth';

const URL ='https://procitasbackend-sbgf.onrender.com/api/auth';


const Login = () => {


    const navigate = useNavigate();


    // definimos el estado del componente
    const [usuario, setUsuario] = useState({
        email:'',
        password:''
    });
    const { email, password } = usuario;


    const Onchange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        
    }


    useEffect(() => {


      document.getElementById("email").focus();


    },[])


    const IniciarSesion = async() => {
        if (password.length < 10){
            const msg = "el password debe tener minimo 10 caracteres";
            swal({
                title:'Error',
                text: msg,
                icon:'error',
                buttons:{
                  confirm:{
                    text:'ok',
                    value:true,
                    visible: true,
                    className: 'btn btn-danger',
                    closeModal: true
                  }
                }
              });
        } else {
            const data = {
                email: usuario.email,
                password: usuario.password
            }
            const response = await axios.post(URL, data);
            const mensaje = response.msg;


            if(mensaje === "El usuario no existe" || mensaje === "contraseña incorrecta"){
                const msg = "No es posible iniciar sesion, valide sus datos"
                swal({
                    title:'Error',
                    text: msg,
                    icon:'error',
                    buttons:{
                      confirm:{
                        text:'ok',
                        value:true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                      }
                    }
                  });
            }else{


                // aca vamos a obtener el token de acceso 
                const jwt = response.token
                
                // guardar el token en el local storage 
                localStorage.setItem('token', jwt)


                // nos logueamos y nos dirigimos a la pagina home
                navigate('/citas');


            }
        }
    }


    const Onsubmit = (e) => {
        e.preventDefault();
        IniciarSesion();
      }












  return (
    <div className='hold-transition register-page'>
      <div className='register-box'> 
        <div className='register-logo'>
          <Link to={"#"}><b>Iniciar</b> Sesion</Link>


        </div>


        <div className='card'>
          <div className='card-body login-card-body'>
            <p className='login-box-msg'>Ingrese los datos para loguearse</p>
            <form onSubmit={Onsubmit}>


              


              <div className='input-group-md-3'>
                <input type='email'
                className='form-control'
                placeholder='Email'
                id='email'
                name='email'
                value={email}
                onChange = {Onchange}
                required
                
                />


                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-envelope'/>


                  </div>


                </div>


              </div>


              <div className='input-group-md-3'>
                <input type='password'
                className='form-control'
                placeholder='Password'
                id='password'
                name='password'
                value={password}
                onChange = {Onchange}
                required
                
                />


                <div className='input-group-append'>
                  <div className='input-group-text'>
                    <span className='fas fa-lock'/>


                  </div>


                </div>


              </div>


              


              <div className='social-auth-links text-center mb-3'>
                <button type='submit' className='btn btn-block btn-primary'>Ingresar</button>
                <Link to={"/registro"} className='btn  btn-block btn-danger'>Registrarse</Link>
              </div>








            </form>




          </div>
        </div>


      </div>
      
    </div>
  )
}


export default Login
