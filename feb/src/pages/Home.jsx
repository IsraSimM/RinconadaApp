import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useCallback, useState } from "react"
import HeroSection from "../components/organisms/HeroSection"
import PageLayout from "../components/templates/PageLayout"
import Button from "../components/atoms/Button"
import CitizenRegister from "../components/organisms/CitizenRegister"

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const [showForm, setShowForm] = useState(false)

  return (
    <PageLayout>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: { color: { value: "#ffffff" }, links: { enable: true, color: "#ffffff" }, move: { enable: true } }
        }}
      />
      <HeroSection title="¡Bienvenido al Sistema Comunitario!" />

      <div className="flex flex-col items-center mt-10">
        <Button label="Agregar Ciudadano" onClick={() => setShowForm(!showForm)} />
        {showForm && <CitizenRegister />}
      </div>
    </PageLayout>
  )
}

export default Home
