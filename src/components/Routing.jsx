import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import App from './App'
import About from './About'
import Rules from './Rules'
import Guide from './Guide'
import Acerca from './Acerca'
import Tablero from "./Tablero.jsx";
import Questions from './Questions'
import LandingPage from './LandingPage'
import Login from '../profile/Login.jsx'
import CheckUser from '../protected/UserCheck.jsx'
import SignUp from '../profile/SignUp.jsx'
import Options from './Play.jsx'

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/reglas'} element={<Rules/>}/>
                <Route path={'/guia'} element={<Guide/>}/>
                <Route path={'/acerca'} element={<Acerca/>}/>
                <Route path={'/tablero'} element={<Tablero/>}/>
                <Route path={'/questions'} element={<Questions/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={"/usercheck"} element={<CheckUser />}/>
                <Route path={"/play"} element={< Options/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Routing
