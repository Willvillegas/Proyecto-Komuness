import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import {LandingPage} from './landingPage' 
import {PerfilUsuario} from './perfilUsuario'
import {PublicacionDetalle} from './publicacionDetalle'
import {Navbar} from './navbar'
import {Biblioteca} from './biblioteca'
    
import FormularioPublicacion from "../pages/formulario";
import {IniciarSesion} from './iniciarSesion'
import {RecuperarContra} from './recuperarContra'
import {NuevaContra} from './nuevaContra'
import {CrearUsuario} from './crearUsuario'

export const Rutas = () =>{
    
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path = "/" element= {<Navigate to="/publicaciones" />}/>
                <Route path = "/eventos" element = {<LandingPage/>}/>
                <Route path = "/publicaciones" element = {<LandingPage/>}/>
                <Route path = "/publicaciones/:id" element = {<PublicacionDetalle/>}/>
                <Route path = "/emprendimientos" element = {<LandingPage/>}/>
                <Route path = "/biblioteca/:id" element = {<Biblioteca/>}/>
                <Route path = "/perfilUsuario" element= {<PerfilUsuario/>}/>
                <Route path = "/iniciarSesion" element= {<IniciarSesion/>}/>
                <Route path = "/recuperar" element= {<RecuperarContra/>}/>
                <Route path = "/nuevaCont" element= {<NuevaContra/>}/>
                 <Route path = "/crearUsr" element= {<CrearUsuario/>}/>


               
                
                <Route path="*" element={<Navigate to="/publicaciones" />} />
            </Routes>
        </Router>
    )
}