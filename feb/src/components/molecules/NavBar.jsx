import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-around text-white shadow-md">
      <Link to="/home" className="hover:underline">Inicio</Link>
      <Link to="/about" className="hover:underline">Acerca</Link>
      <Link to="/contact" className="hover:underline">Contacto</Link>
    </nav>
  )
}

export default NavBar
