import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const [posterMissing, setPosterMissing] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])

  return (
    <section ref={ref} id="top" className="hero" aria-labelledby="hero-title">
      <motion.div className={`hero-backdrop ${posterMissing ? 'is-fallback' : ''}`} style={{ y: imageY }}>
        {!posterMissing && (
          <img
            src="/images/hero-poster.png"
            alt="희귀해서 갖고 싶은 생명, 사라지면 다시 돌아오지 않습니다. 불법 야생동물 밀수·거래의 위험을 알리는 캠페인 포스터"
            onError={() => setPosterMissing(true)}
          />
        )}
      </motion.div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content page-shell">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="hero-copy"
        >
          <p className="evidence-label"><span>생물다양성 위협 기록</span><b>01</b></p>
          <h1 id="hero-title">야생은<br /><em>기념품이 아닙니다.</em></h1>
          <p>한 번의 구매가 어디에서 시작되고, 무엇을 사라지게 하는지 추적합니다.</p>
        </motion.div>
        <a className="scroll-cue" href="#case"><span>아래로 내려 사건을 추적하세요</span><ChevronDown size={18} /></a>
      </div>
    </section>
  )
}
