import NavBar from "../molecules/NavBar"

function PageLayout({ children }) {
  return (
    <div className="h-screen bg-gray-900 text-white overflow-y-auto">
      <NavBar />
      {children}
    </div>
  )
}

export default PageLayout
