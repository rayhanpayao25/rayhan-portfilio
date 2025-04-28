"use client"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef } from "react"

const AnimatedSection = ({ children, className, fromLeft, fromRight, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const initial = useRef({ opacity: 0, y: 20 })
  const animate = useRef({ opacity: 1, y: 0 })

  if (fromLeft) {
    initial.current = { ...initial.current, x: -100 }
    animate.current = { ...animate.current, x: 0 }
  } else if (fromRight) {
    initial.current = { ...initial.current, x: 100 }
    animate.current = { ...animate.current, x: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start(animate.current)
    } else {
      controls.start(initial.current)
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={initial.current}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection

