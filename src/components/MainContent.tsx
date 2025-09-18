type MainContentProps = {
  activeMenu: string
}

export function MainContent({ activeMenu }: MainContentProps) {
  return (
    <div className="bg-white rounded-lg shadow p-8 h-full">
      {activeMenu === 'Market Analysis' && (
        <section className="flex flex-col items-center">
          <h3 className="text-primary">AI 기반 시장 분석</h3>
          <p className="text-body16 text-text-secondary">
            검색창에 성분이나 물질명을 입력하면, AI가 관련된 3가지 후보 물질을 찾아드립니다.
          </p>
          <button className="bg-primary text-text-inversePrimary px-4 py-2 rounded-lg">검색</button>
          <div className="w-full max-w-xl">
            <div className="flex items-center bg-white border rounded-xl shadow px-4 py-3">
              <input
                type="text"
                placeholder="원하는 물질을 입력해주세요"
                className="flex-1 outline-none text-gray-700"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 109.5 2a7.5 7.5 0 000 15z"
                />
              </svg>
            </div>
          </div>
        </section>
      )}
      {activeMenu !== 'Market Analysis' && (
        <section className="flex flex-col items-center">
          <div className="w-full max-w-xl">
            <div className="flex text-gray-500 text-center pt-20">
              <p>{activeMenu} 페이지 준비중…</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
