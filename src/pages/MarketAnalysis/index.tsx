import React from 'react';
import DrugUsableBubble from '@/pages/MarketAnalysis/components/DrugUsableBubble';

const sample = [
  { name: 'Mobile', value: 9, category: 'Mobile' },
  { name: 'Conversion', value: 9, category: 'Conversion' },
  { name: 'Management', value: 5, category: 'Management' },
  { name: 'AI', value: 3, category: 'AI', color: '#E4572E' }, // 개별 색도 가능
  { name: 'CRM', value: 1, category: 'CRM' },
  { name: 'Commerce', value: 1, category: 'Commerce' },
  { name: 'API', value: 1, category: 'API' },
  { name: 'Data', value: 1, category: 'Data' },
  { name: 'Testing', value: 1, category: 'Testing' },
];

const MarketAnalysis = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full bg-white rounded-lg shadow p-6 mr-4">
          <div className="text-title text-text-secondary">국내 약 사용 빈도</div>
          <div className="text-body16 text-text-tertiary mb-6">
            현재 허가되어 판매 중인 약품 가운데 어느 회사가 가장 많은지를 분석했어요.
          </div>
          <DrugUsableBubble data={sample} />
        </div>
        <div className="w-full bg-white rounded-lg shadow p-8"></div>
      </div>
    </>
  );
};

export default MarketAnalysis;
