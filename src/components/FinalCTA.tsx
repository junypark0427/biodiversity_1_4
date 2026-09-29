import { motion } from 'framer-motion'
import { BookOpen, Search } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="final-cta section-pad" aria-labelledby="cta-title">
      <div className="cta-grid" aria-hidden="true" />
      <motion.div className="page-shell" initial={{ opacity:0, y:26 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <p className="eyebrow">THE CHOICE IS OURS</p>
        <h2 id="cta-title">사지 않는 선택이,<br /><em>야생에 남겨두는 선택입니다.</em></h2>
        <p>희귀함을 소유하려는 순간,<br />누군가의 야생은 사라질 수 있습니다.</p>
        <div className="cta-actions">
          <a href="#case"><Search aria-hidden="true" />불법 거래 문제 알아보기</a>
          <a href="#sources"><BookOpen aria-hidden="true" />출처 확인하기</a>
        </div>
      </motion.div>
    </section>
  )
}
