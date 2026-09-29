import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { actions } from '../data/content'
import SectionHeading from './SectionHeading'

type ActionKey = keyof typeof actions

export default function ActionSection() {
  const [active, setActive] = useState<ActionKey>('personal')
  const data = actions[active]
  return (
    <section id="action" className="action-section section-pad light-section" aria-labelledby="action-title">
      <div className="page-shell">
        <SectionHeading eyebrow="ACTION · 우리가 할 수 있는 일" title="범죄의 사슬은 선택으로 끊을 수 있다" description="개인의 구매부터 국제사회의 공조까지, 서로 다른 규모의 행동이 하나의 보호망을 만듭니다." light />
        <div className="action-panel">
          <div className="action-tabs" role="tablist" aria-label="행동 주체 선택">
            {(Object.keys(actions) as ActionKey[]).map((key, i) => <button key={key} role="tab" aria-selected={active === key} aria-controls="action-content" id={`tab-${key}`} onClick={() => setActive(key)}><span>0{i+1}</span>{actions[key].label}</button>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} id="action-content" role="tabpanel" aria-labelledby={`tab-${active}`} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} transition={{ duration:.28 }} className="action-content">
              <div><p>{data.kicker}</p><h3>{data.title}</h3></div>
              <ul>{data.items.map(item => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
