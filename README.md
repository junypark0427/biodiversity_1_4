# 야생을 거래하지 마세요

불법 야생동물 밀수·거래가 생물다양성에 미치는 위협을 스크롤 서사와 인터랙션으로 전달하는 교육용 캠페인 웹사이트입니다.

## 주요 구성

- 실제 국내 밀수 사건의 핵심 수치와 타임라인
- 동남아시아에서 대한민국으로 이어지는 SVG 밀수 경로
- Operation Thunder 2025 세계 통계 카운트업
- 밀거래 발생 원인과 인과관계
- 개체에서 생태계로 확대되는 영향 시각화
- 개인 / 사회 / 국가·국제 행동 탭
- 조사 출처 및 외부 링크

## 기술 스택

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 로컬 실행

Node.js가 설치된 환경에서 다음 명령을 실행합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열면 됩니다.

## Hero 포스터

Hero에 사용할 포스터 파일은 아래 경로에 둡니다.

```text
public/images/hero-poster.png
```

현재는 제공된 포스터가 이 위치에 연결되어 있습니다. 같은 이름의 이미지로 교체하면 코드 수정 없이 반영됩니다. 이미지가 없어도 어두운 환경 캠페인 스타일의 fallback 화면이 표시됩니다.

## 프로덕션 빌드

```bash
npm run build
```

완성된 정적 파일은 `dist` 폴더에 생성됩니다. 빌드 결과를 로컬에서 확인하려면 다음 명령을 사용합니다.

```bash
npm run preview
```

## Netlify 배포

GitHub 저장소를 Netlify에 연결하면 루트의 `netlify.toml` 설정이 자동으로 적용됩니다.

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* → /index.html` (200)

Netlify에서 **Add new site → Import an existing project**를 선택하고 GitHub 저장소를 연결한 뒤 배포하면 됩니다. 별도의 환경 변수나 서버 설정은 필요하지 않습니다.
