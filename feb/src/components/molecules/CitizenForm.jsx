import Input from "../atoms/Input"

function CitizenForm({ formData, handleChange }) {
  return (
    <form className="grid grid-cols-2 gap-4 w-full">
      <Input type="text" placeholder="Nombre completo" name="name" value={formData.name} onChange={handleChange} />
      <Input type="text" placeholder="Dirección" name="address" value={formData.address} onChange={handleChange} />
      <Input type="text" placeholder="CURP" name="curp" value={formData.curp} onChange={handleChange} />
      <Input type="number" placeholder="Edad" name="age" value={formData.age} onChange={handleChange} />
      <Input type="text" placeholder="Teléfono" name="phone" value={formData.phone} onChange={handleChange} />
      <Input type="email" placeholder="Correo electrónico" name="email" value={formData.email} onChange={handleChange} />
      <Input type="text" placeholder="Ocupación" name="occupation" value={formData.occupation} onChange={handleChange} />
      <Input type="text" placeholder="Número de casa" name="houseNumber" value={formData.houseNumber} onChange={handleChange} />
    </form>
  )
}
export default CitizenForm
