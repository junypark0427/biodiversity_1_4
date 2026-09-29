import { ExternalLink } from 'lucide-react'
import { sources } from '../data/content'

export default function Sources() {
  return (
    <section id="sources" className="sources-section section-pad" aria-labelledby="sources-title">
      <div className="page-shell">
        <header><p className="eyebrow">REFERENCES</p><h2 id="sources-title">조사 출처</h2><p>사건과 통계, 법률 정보는 아래의 공개 자료를 바탕으로 구성했습니다.</p></header>
        <div className="sources-list">
          {sources.map((source, i) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span className="source-index">0{i+1}</span><div><strong>{source.org}</strong><h3>{source.title}</h3><time>{source.date}</time></div><ExternalLink aria-hidden="true" /></a>)}
        </div>
        <footer><a href="#top">WILD / NOT FOR SALE</a><p>불법 야생동물 밀수·거래와 생물다양성 위협을 알리는 교육용 캠페인입니다.</p><span>© 2026 BIODIVERSITY CAMPAIGN</span></footer>
      </div>
    </section>
  )
}
