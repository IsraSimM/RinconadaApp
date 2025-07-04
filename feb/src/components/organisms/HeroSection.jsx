import { motion } from "framer-motion"

function HeroSection({ title }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center pt-32 text-white"
    >
      {title}
    </motion.div>
  )
}

export default HeroSection
