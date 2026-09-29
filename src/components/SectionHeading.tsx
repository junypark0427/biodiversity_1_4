import { motion } from 'framer-motion'

type Props = { eyebrow: string; title: string; description?: string; light?: boolean }

export default function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.65 }}
      className="section-heading"
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={light ? 'text-ink' : ''}>{title}</h2>
      {description && <p className={`section-description ${light ? 'text-ink/70' : ''}`}>{description}</p>}
    </motion.header>
  )
}
