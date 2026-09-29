import { motion } from 'framer-motion'
import { caseStats, caseTimeline } from '../data/content'
import SectionHeading from './SectionHeading'

export default function CaseSection() {
  return (
    <section id="case" className="case-section section-pad light-section" aria-labelledby="case-title">
      <div className="page-shell">
        <SectionHeading eyebrow="CASE 01 · 실제 사건" title="200마리의 생명이 수하물 속에 숨겨졌다" description="SNS 메시지로 시작된 거래는 항공 수하물과 택배 상자를 거쳐 국내 구매자에게 닿았습니다." light />
        <div className="case-lead">
          <p>악어의 눈을 가리고 입을 테이프로 묶었습니다. 철제 과자통과 플라스틱 상자, 속옷 사이에 살아 있는 동물을 숨겼습니다.</p>
          <span>2026년 8월 공개 · 국내 야생동물 밀수 사건</span>
        </div>
        <div className="case-stats">
          {caseStats.map((stat, i) => (
            <motion.article key={stat.label} initial={{ opacity:0, y:25 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.08 }}>
              <strong>{stat.value}</strong><h3>{stat.label}</h3><p>{stat.detail}</p>
            </motion.article>
          ))}
        </div>
        <div className="timeline-wrap">
          <p className="timeline-label">사건 기록 / CASE LOG</p>
          <ol className="timeline">
            {caseTimeline.map((item, i) => (
              <motion.li key={item.year} initial={{ opacity:0, x:-22 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true, margin:'-12%' }} transition={{ delay:i*.06 }}>
                <time>{item.year}</time><span className="timeline-dot" aria-hidden="true" />
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="case-flow" aria-label="사건의 전체 흐름">
          {['해외 판매자', 'SNS 거래', '항공 밀반입', '국내 온라인 판매', '택배 유통', '적발'].map((item, i) => <span key={item}>{item}{i < 5 && <b aria-hidden="true">→</b>}</span>)}
        </div>
      </div>
    </section>
  )
}
