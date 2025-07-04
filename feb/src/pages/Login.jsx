// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <motion.h1 className="text-white text-4xl font-bold mb-6" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Bienvenido al Control Comunitario
      </motion.h1>
      <input className="mb-4 p-2 rounded w-64" type="text" placeholder="Usuario" />
      <input className="mb-6 p-2 rounded w-64" type="password" placeholder="Contraseña" />
      <button onClick={() => navigate("/home")} className="bg-white text-blue-600 font-bold px-6 py-2 rounded hover:bg-gray-100">Ingresar</button>
    </div>
  );
}

export default Login;
