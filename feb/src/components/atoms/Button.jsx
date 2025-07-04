function Button({ label, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-white text-blue-600 font-bold px-6 py-2 rounded hover:bg-gray-100 mb-4"
    >
      {label}
    </button>
  )
}
export default Button
