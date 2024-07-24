import './App.css'

// importar rutas 
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// importamos el componente 

// importamos componentes menu y footer
import CompMenu from './componentes/CompMenu'
import CompFooter from './componentes/CompFooter'
import Login from './auth/Login'

import CompAgregarCitas from './componentes/CompAgregarCitas'
import CompEditarCitas from './componentes/CompEditarCitas'

import CompMostrarMedicos from './componentes/CompMostrarMedico'
import CompAgregarMedico from './componentes/CompAgregarMedico'
import CompEditarMedico from './componentes/CompEditarMedico'

import CompMostrarCitas from './componentes/CompMostrarCitas'

import Registro from './auth/Registro'



function App() {
  
  return (
   
      <div>
        <CompMenu />
        
        <BrowserRouter>
        
        <Routes>
          <Route path='/'exact element = {<Navigate to="/login"/>}/>
          <Route path='/login'exact element = {<Login/>}/>
          <Route path='/citas'element={<CompMostrarCitas/>}/>
          <Route path='/citas/agregar'element={<CompAgregarCitas/>}/>
          <Route path='/citas/editar/:id'element={<CompEditarCitas/>}/>

          <Route path='/medico'element={<CompMostrarMedicos/>}/>
          <Route path='/medico/agregar'element={<CompAgregarMedico/>}/>
          <Route path='/medico/editar/:id'element={<CompEditarMedico/>}/>




          <Route path='/registro'exact element = {<Registro/>}/>
          




          
        </Routes>
        
        </BrowserRouter>
        <CompFooter />
        
      </div>
      
  )
}

export default App
