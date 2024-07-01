//import { useAuth } from './context/authContext.jsx'
//import { userLogged } from './utils'
import Navigation from './components/Navigation.jsx'
//import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

//import CiudadanosForm from './pages/CiudadanosForm.jsx'
//import Participaciones from './pages/Participaciones.jsx'
//import ParticipacionesReports from './pages/ParticipacionesReports.jsx'
//import CiudadanosReport from './pages/CiudadanosReport.jsx'
//import AdminsReport from './pages/AdminsReport.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'

function App() {
  /*
    const { userData } = useAuth();

    const [currentUser, setCurrentUser] = useState(null); // Estado para almacenar el nombre de usuario

    useEffect(() => {
        // Verificar si userData tiene algún valor
        if (userData) {
            // Obtener el nombre de usuario de los datos de usuario y establecerlo en el estado
            setCurrentUser(userData.data.nombre);
        } else {
            // Si no hay datos de usuario, establecer el usuario actual como null
            setCurrentUser(null);
        }
    }, [userData]); // Escuchar cambios en userData para actualizar el estado del usuario
    */

    return (
        <BrowserRouter>
            <div className="bg-[#0f243a] h-screen w-screen">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Navigate to="/LogIn" />} />
                    <Route path="/LogIn" element={<Login />} />
                </Routes>
                <Toaster />
            </div>
        </BrowserRouter>
    )
}

export default App
