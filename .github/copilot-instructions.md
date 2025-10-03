# Minimax Front - AI 코딩 에이전트 가이드

## 프로젝트 개요

국내 top 10 제약회사 대상 AI 기반 통합 의약품 전략 분석 플랫폼. React + TypeScript + Vite + TailwindCSS v4 기반.

## 아키텍처 패턴

### 라우팅 구조

- **중앙집중식 라우팅**: `src/app/routes.tsx`에서 모든 라우트 정의
- **Layout 패턴**: `src/app/layout.tsx`에서 공통 헤더와 Outlet 제공
- **네비게이션 연동**: `ROUTES` 배열을 Header에서 직접 참조하여 메뉴 생성
- 기본 리다이렉트: `/` → `/ai`, 404 → `/ai`

### 디렉토리 구조 규칙

```
src/
├── app/          # 앱 전체 설정 (라우팅, 레이아웃)
├── pages/        # 페이지별 컴포넌트 (도메인별 폴더)
├── shared/       # 공통 컴포넌트 및 상수
├── components/   # 재사용 가능한 UI 컴포넌트
└── widgets/      # 복합 위젯 컴포넌트
```

## 스타일링 시스템

### TailwindCSS v4 + 디자인 토큰

- **커스텀 토큰**: `src/index.css`의 `@theme` 블록에서 정의
- **색상 시스템**: `--color-primary`, `--color-text-secondary` 등 시맨틱 네이밍
- **타이포그래피**: `.text-title`, `.text-body16` 등 사전 정의된 유틸리티 클래스
- **한국어 폰트**: Pretendard 기본 적용

### 색상 가이드라인

```css
/* 주요 색상 */
--color-primary: #26c6da; /* 브랜드 컬러 */
--color-text-secondary: #4b4b4b; /* 부제목 */
--color-text-tertiary: #8c8c8c; /* 설명글 */
```

## 데이터 시각화

### D3.js 통합 패턴

- **의존성**: `d3`, `d3-hierarchy`, `recharts` 사용
- **버블 차트**: `DrugUsableBubble.tsx` 예시 (현재 주석 처리됨)
- **데이터 구조**: `{ name, value, category, color? }` 형태 표준화

## 개발 워크플로우

### 필수 명령어

```bash
npm run dev      # 개발 서버 (Vite, http://localhost:5173)
npm run build    # TypeScript 체크 후 빌드
npm run lint     # ESLint 실행
npm run preview  # 빌드 결과 미리보기
```

### 설정 파일

- **절대 경로**: `@/*` → `src/*` (vite-tsconfig-paths 플러그인)
- **ESLint**: TypeScript + React + Hooks 규칙 적용
- **PostCSS**: TailwindCSS v4 + Autoprefixer

## 비즈니스 도메인

### 핵심 기능

1. **AI 성분 분석** (`/ai`): 약물 성분/물질 검색 및 AI 추천
2. **시장 분석** (`/market`): 국내 약품 사용 빈도 및 시장 데이터
3. **특허 관리** (미구현): 향후 특허 관련 기능

### 데이터 특성

- 제약/의약품 도메인 특화
- 한국어 UI/UX (메뉴는 영어 병기)
- 버블 차트, 통계 대시보드 중심

## 주의사항

### 코드 작성 시

- 새 페이지 추가 시 `routes.tsx`의 `ROUTES` 배열에 등록 필수
- 컴포넌트는 기본적으로 함수형 + TypeScript
- 스타일링은 TailwindCSS 유틸리티 우선, 필요시 `@layer utilities`에 커스텀 클래스 추가
- 절대 경로 `@/` 사용 권장

### 성능 고려사항

- D3.js 계산은 `useMemo`로 최적화
- 큰 데이터셋의 경우 가상화 고려
- Vite의 HMR 활용을 위해 컴포넌트 분리
