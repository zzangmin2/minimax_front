# Minimax Front

국내 top 10 제약회사 대상 AI 기반 통합 의약품 전략 분석 플랫폼입니다.
Vite + React + TypeScript + TailwindCSS를 기반으로 개발되었습니다.

---

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/zzangmin2/minimax_front.git
cd minimax_front
```

### 2. 패키지 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

서버가 실행되면 브라우저에서 아래 주소로 접속합니다:

👉 [http://localhost:5173](http://localhost:5173)

### 4. 프로덕션 빌드

```bash
npm run build
```

빌드된 정적 파일은 `dist/` 폴더에 생성됩니다.

### 5. 빌드 결과 미리보기

```bash
npm run preview
```

---

## 🛠️ 사용 기술 스택

- [Vite](https://vitejs.dev/) (Frontend Build Tool)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (스타일링)
- [PostCSS](https://postcss.org/) + Autoprefixer

---

## 📂 주요 명령어

- `npm run dev` : 개발 서버 실행
- `npm run build` : 프로덕션 빌드
- `npm run preview` : 빌드 결과 로컬 서버에서 확인
- `npm run lint` : ESLint 실행

---

## ⚙️ 환경 요구사항

- Node.js >= 18
- npm >= 9

---

## 📑 디렉토리 구조

```bash
minimax_front/
├── public/          # 정적 리소스
├── src/             # 애플리케이션 소스코드
│   ├── components/  # 공용 컴포넌트
│   ├── App.tsx      # 메인 앱
│   └── main.tsx     # 진입점
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```
