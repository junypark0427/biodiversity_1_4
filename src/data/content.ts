export const caseStats = [
  { value: '14차례', label: '반복된 밀수', detail: '2023.11 — 2024.08' },
  { value: '약 200마리', label: '외래생물 밀반입', detail: '수하물과 용기에 은닉' },
  { value: '54마리', label: '멸종위기종 불법 양도', detail: '국제적 멸종위기종' },
  { value: '95마리', label: '수사 과정 압수', detail: '살아 있는 야생생물' },
]

export const caseTimeline = [
  { year: '2023.11', title: '밀수가 시작되다', body: 'SNS로 동남아시아 판매자와 접촉한 뒤 희귀 야생동물을 항공 수하물에 숨겨 반입했습니다.' },
  { year: '2024.08', title: '14번째 국경을 넘다', body: '약 10개월 동안 14차례, 외래생물 약 200마리가 같은 방식으로 국내에 들어왔습니다.' },
  { year: '국내 유통', title: '화면에서 택배 상자로', body: '온라인 파충류 카페에서 판매하고 고속버스 택배 등으로 구매자에게 전달했습니다.' },
  { year: '2026.08', title: '범죄의 전모가 드러나다', body: '검찰이 밀수·불법 양도 혐의로 일당을 재판에 넘기며 사건이 공개됐습니다.' },
]

export const realityStats = [
  { target: 134, suffix: '개국', label: '국제 단속 참여' },
  { target: 4640, suffix: '건', label: '야생동물·관련 물품 압수' },
  { target: 30000, prefix: '약 ', suffix: '마리', label: '압수된 살아 있는 야생동물' },
  { target: 1100, prefix: '약 ', suffix: '명', label: '확인된 용의자' },
]

export const reasons = [
  { no: '01', title: '희귀동물 소유 욕구', body: '희귀하고 이색적인 동물을 반려동물이나 수집 대상으로 원하는 소비자 수요' },
  { no: '02', title: '높은 경제적 이익', body: '희귀종일수록 가격이 높아져 전문 밀수 조직과 범죄 조직이 개입' },
  { no: '03', title: 'SNS와 온라인 거래', body: 'SNS·커뮤니티·온라인 마켓에서 판매자와 구매자가 쉽고 은밀하게 연결' },
  { no: '04', title: '국제 운송망 악용', body: '항공 수하물·택배·국제 화물 등 정상적인 물류망을 밀수에 악용' },
]

export const causeChain = ['소비자 수요', '희귀동물 가격 상승', '밀수 조직 개입', '온라인 거래', '불법 국제 유통', '야생 개체 감소']

export const impacts = [
  { no: '01', title: '야생 개체 수 감소', body: '자연에서 지속적으로 포획되면 이미 개체 수가 적은 종의 생존 가능성이 더 낮아집니다.', level: '개체' },
  { no: '02', title: '밀수 과정에서 폐사', body: '좁은 용기, 장시간 운송, 산소 부족과 극심한 스트레스로 많은 생명이 이동 중 죽습니다.', level: '생존' },
  { no: '03', title: '생태계 교란', body: '탈출하거나 방생된 외래생물은 토착종과 먹이·서식지를 경쟁하거나 새로운 포식자가 됩니다.', level: '생태계' },
  { no: '04', title: '질병 및 생물안전 위험', body: '정상적인 검역을 거치지 않은 병원체가 야생동물과 함께 국경을 넘을 수 있습니다.', level: '국경' },
]

export const actions = {
  personal: {
    label: '개인', kicker: '나의 선택', title: '수요를 멈추는 가장 가까운 행동',
    items: ['출처가 불분명한 희귀 야생동물을 구매하지 않습니다.', 'SNS나 온라인에서 의심스러운 판매를 발견하면 신고합니다.', '외래 반려동물을 자연에 방생하지 않습니다.', '희귀동물을 과시와 수집의 대상으로 보는 문화를 줄입니다.'],
  },
  society: {
    label: '사회', kicker: '우리의 감시', title: '거래가 숨을 곳을 줄이는 공동의 행동',
    items: ['SNS와 중고거래 플랫폼의 불법 거래 모니터링을 강화합니다.', '동물원과 판매업체의 합법적인 유통경로를 확인합니다.', '학교·NGO·시민단체의 야생동물 보호 캠페인을 확대합니다.', '불법 야생동물 거래의 위험을 알리는 교육을 이어갑니다.'],
  },
  global: {
    label: '국가·국제', kicker: '국경을 넘는 공조', title: '범죄의 연결망보다 강한 보호망',
    items: ['CITES 규정 이행과 공항·항만·국제우편 세관 단속을 강화합니다.', '온라인 야생동물 밀거래 전문 수사와 국가 간 정보 공유를 확대합니다.', 'INTERPOL·WCO 국제 합동 단속을 강화합니다.', '압수된 살아 있는 야생동물을 보호하고 원산국과 협력합니다.'],
  },
} as const

export const sources = [
  { org: 'MBC 뉴스', title: '「“악어를 테이프로 결박” 멸종위기종 밀수 일당 재판행」', date: '2026.08.06', url: 'https://imnews.imbc.com/news/2026/society/article/6842921_36918.html' },
  { org: 'INTERPOL', title: 'Operation Thunder 2025 — “30,000 live animals seized in global operation against wildlife and forestry crime”', date: '2025.12.11', url: 'https://www.interpol.int/News-and-Events/News/2025/30-000-live-animals-seized-in-global-operation-against-wildlife-and-forestry-crime' },
  { org: 'UNODC', title: 'World Wildlife Crime Report 2024', date: '2024', url: 'https://www.unodc.org/documents/data-and-analysis/wildlife/2024/Wildlife_SpecialPoint_Final.pdf' },
  { org: '대한민국 국가법령정보센터', title: '야생생물 보호 및 관리에 관한 법률', date: '현행 법령', url: 'https://www.law.go.kr/' },
]
