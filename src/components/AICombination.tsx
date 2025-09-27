import React from 'react';

const AICombination = () => {
  return (
    <div>
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
            ></svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICombination;
