function Input({ type, placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mb-4 p-2 rounded w-full text-black"
    />
  )
}
export default Input
