import { useState } from "react"
import CitizenForm from "../molecules/CitizenForm"
import Button from "../atoms/Button"
import Title from "../atoms/Title"

function CitizenRegister() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    curp: "",
    age: "",
    phone: "",
    email: "",
    occupation: "",
    houseNumber: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos del ciudadano:", formData)
    alert("¡Ciudadano registrado (solo frontend)!")
    // Aquí podrías resetear formData si quieres limpiar el formulario
  }

  return (
    <div className="bg-white p-6 rounded text-black w-3/4 mt-10">
      <Title text="Registrar Ciudadano" />
      <CitizenForm formData={formData} handleChange={handleChange} />
      <Button label="Guardar Ciudadano" onClick={handleSubmit} type="submit" />
    </div>
  )
}

export default CitizenRegister
