import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { realityStats } from '../data/content'
import SectionHeading from './SectionHeading'

function CountUp({ target, prefix='', suffix='' }: { target:number; prefix?:string; suffix?:string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once:true, margin:'-15%' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? target : 0)
  useEffect(() => {
    if (!inView) return
    if (reduce) { setValue(target); return }
    const controls = animate(0, target, { duration:1.25, ease:'easeOut', onUpdate:v => setValue(Math.round(v)) })
    return controls.stop
  }, [inView, reduce, target])
  return <span ref={ref}>{prefix}{value.toLocaleString('ko-KR')}{suffix}</span>
}

export default function RealitySection() {
  return (
    <section id="reality" className="reality-section section-pad" aria-labelledby="reality-title">
      <div className="page-shell">
        <SectionHeading eyebrow="GLOBAL REALITY · 세계적 실태" title="이것은 한 번의 사건이 아니다." description="Operation Thunder 2025는 야생동물 범죄가 국경과 대륙을 가리지 않는 연결된 시장임을 보여줍니다." />
        <div className="reality-stats">
          {realityStats.map((stat, i) => (
            <motion.article key={stat.label} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.08 }}>
              <strong><CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} /></strong>
              <p>{stat.label}</p>
            </motion.article>
          ))}
        </div>
        <blockquote>“불법 야생동물 거래는 특정 국가의 문제가 아니라<br />세계적인 생물다양성 위협이다.”</blockquote>
        <p className="reality-source">INTERPOL / WCO · OPERATION THUNDER 2025</p>
      </div>
    </section>
  )
}
