import { Link } from "react-router-dom"
//Funcion que retorna el componente de navegacion
function Navigation() {
    /*
    //Obtener el estado actual del usuario
    const { userData } = useAuth();
    //Estado para almacenar el nombre de usuario
    const [currentUser, setCurrentUser] = useState(null);

    //Efecto que se ejecuta cuando userData cambia
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

    //Retornar el componente de navegacion
    return (
        <nav className="bg-[#2e3a48] h-[5vh] w-full text-white ps-4 flex justify-between items-center">
            <ul className="flex justify-between place-content-between divide-x divide-dashed">
                <li className="bg-slate-400 hover:bg-orange-200">
                    <button className="duration-1000">
                        Rivonada
                    </button>
                </li>
                <li className="">
                    Ciudadanos
                </li>
            </ul>
        </nav>
    )
}

export default Navigation