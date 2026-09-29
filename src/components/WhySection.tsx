import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { causeChain, reasons } from '../data/content'
import SectionHeading from './SectionHeading'

export default function WhySection() {
  return (
    <section id="why" className="why-section section-pad light-section" aria-labelledby="why-title">
      <div className="page-shell">
        <SectionHeading eyebrow="WHY · 발생 원인" title="수요가 있는 곳에, 범죄의 경로가 생긴다" description="불법 거래는 한 명의 충동으로 끝나지 않습니다. 희귀함에 값을 매기는 순간, 포획과 유통의 사슬이 작동합니다." light />
        <div className="reasons-grid">
          {reasons.map((reason, i) => <motion.article key={reason.no} initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.07 }}><span>{reason.no}</span><h3>{reason.title}</h3><p>{reason.body}</p></motion.article>)}
        </div>
        <div className="chain-wrap">
          <p className="timeline-label">범죄를 움직이는 인과관계</p>
          <div className="cause-chain">
            {causeChain.map((item, i) => <div key={item} className={i === causeChain.length - 1 ? 'chain-end' : ''}><span>{item}</span>{i < causeChain.length - 1 && <ArrowRight aria-hidden="true" />}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
