import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Globe2, MessageCircleMore, Plane, ShoppingBag, Truck } from 'lucide-react'
import { useRef } from 'react'

const steps = [
  { no: '01', title: '해외 판매자', body: '인도네시아·베트남·태국 등에서 희귀 야생동물을 확보', icon: Globe2 },
  { no: '02', title: 'SNS 비밀 거래', body: '판매자와 구매자가 폐쇄적인 온라인 채널에서 연결', icon: MessageCircleMore },
  { no: '03', title: '국제 운송', body: '수하물과 각종 용기에 생명을 숨겨 국경 통과', icon: Plane },
  { no: '04', title: '국내 온라인 거래', body: '파충류 카페 등에서 은어를 사용해 판매', icon: ShoppingBag },
  { no: '05', title: '택배 유통', body: '고속버스 택배 등을 통해 구매자에게 전달', icon: Truck },
]

export default function TradeRoute() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 70%'] })
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const dotX = useTransform(scrollYProgress, [0, 1], [118, 454])
  const dotY = useTransform(scrollYProgress, [0, 1], [216, 85])

  return (
    <section ref={ref} id="route" className="route-section section-pad" aria-labelledby="route-title">
      <div className="page-shell">
        <header className="route-intro">
          <p className="eyebrow">THE ROUTE · 밀수 경로</p>
          <h2 id="route-title">생명은 어떻게<br />상품이 되었나</h2>
          <p>국경을 넘는 순간만이 밀수가 아닙니다. 화면 속 거래에서 시작해 평범한 택배 상자까지 이어지는 하나의 범죄 사슬입니다.</p>
        </header>

        <div className="route-grid">
          <div className="map-card" aria-label="동남아시아에서 대한민국으로 이어지는 밀수 경로 도식">
            <div className="map-meta"><span>ROUTE EVIDENCE</span><span>SEA → KOR</span></div>
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="map-title map-desc">
              <title id="map-title">동남아시아에서 대한민국으로 향하는 밀수 경로</title>
              <desc id="map-desc">인도네시아, 베트남, 태국에서 대한민국으로 이어지는 붉은 이동 경로입니다.</desc>
              <path className="map-land" d="M65 214l34-19 28-40 28-11 10-31 45-10 27 20 50-23 24-44 44-21 51 10 25 33-26 26-19 47-43 9-38 34-42-11-38 30-39-11-25 22-34-7-24-39Z" />
              <path className="map-island" d="M191 237l43-9 42 20-35 17-45-5ZM119 251l35-6 16 17-30 10Z" />
              <motion.path
                className="map-route"
                d="M118 216 C195 144 291 155 454 85"
                style={{ pathLength: reduce ? 1 : pathLength }}
              />
              <circle cx="118" cy="216" r="6" className="map-origin" />
              <circle cx="454" cy="85" r="8" className="map-destination" />
              {!reduce && <motion.circle r="5" className="map-moving-dot" style={{ cx: dotX, cy: dotY }} />}
              <text x="72" y="240">동남아시아</text>
              <text x="467" y="82">대한민국</text>
            </svg>
            <p className="map-caption"><span>출발</span> 인도네시아 · 베트남 · 태국 <b>→</b> <span>도착</span> 대한민국</p>
          </div>

          <ol className="route-steps">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.no}
                  initial={{ opacity: 0.22, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-32% 0px -32% 0px' }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="step-number">STEP {step.no}</span>
                  <Icon aria-hidden="true" />
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                  {index < steps.length - 1 && <span className="step-line" aria-hidden="true" />}
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
