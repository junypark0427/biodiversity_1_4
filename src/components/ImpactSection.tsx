import { motion } from 'framer-motion'
import { impacts } from '../data/content'
import SectionHeading from './SectionHeading'

export default function ImpactSection() {
  return (
    <section id="impact" className="impact-section section-pad" aria-labelledby="impact-title">
      <div className="page-shell">
        <SectionHeading eyebrow="IMPACT · 생물다양성 영향" title="한 마리의 거래가 생태계 전체의 문제가 되는 이유" description="포획의 충격은 한 개체에서 멈추지 않고 종과 서식지, 국경 너머의 생물안전으로 번집니다." />
        <div className="impact-layout">
          <div className="impact-rings" aria-label="한 개체의 포획에서 종, 생태계로 영향이 확대되는 구조">
            <motion.div className="ring ring-outer" initial={{ scale:.76, opacity:0 }} whileInView={{ scale:1, opacity:1 }} viewport={{ once:true }} transition={{ duration:.8 }}><span>생태계</span>
              <div className="ring ring-mid"><span>종</span><div className="ring ring-inner"><span>한 개체의 포획</span></div></div>
            </motion.div>
            <p>영향의 범위</p>
          </div>
          <div className="impact-list">
            {impacts.map((impact, i) => <motion.article key={impact.no} initial={{ opacity:0, x:25 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*.07 }}><div><span>{impact.no}</span><b>{impact.level}</b></div><div><h3>{impact.title}</h3><p>{impact.body}</p></div></motion.article>)}
          </div>
        </div>
      </div>
    </section>
  )
}
