import React, { useState } from 'react';
import { useSearchHistory } from '@/shared/hooks/useSearchHistory';
import type { SearchRecord } from '@/shared/contexts/SearchHistoryContext';

const SearchHistoryList: React.FC = () => {
  const { searchHistory, activeRecord, setActiveRecord } = useSearchHistory();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleItemClick = (record: SearchRecord) => {
    setActiveRecord(record);
  };

  const toggleExpand = (recordId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(recordId)) {
        newSet.delete(recordId);
      } else {
        newSet.add(recordId);
      }
      return newSet;
    });
  };

  const renderCategoryItem = (record: SearchRecord) => {
    const isExpanded = expandedItems.has(record.id);
    const categoryName = record.query.replace('$', '');
    const categoryResults = record.results?.[categoryName];

    // JSON 문자열을 파싱하여 배열로 변환
    let moleculeList: Array<{ [key: string]: string }> = [];
    if (typeof categoryResults === 'string') {
      try {
        moleculeList = JSON.parse(categoryResults);
      } catch (e) {
        console.error('Failed to parse category results:', e);
      }
    } else if (Array.isArray(categoryResults)) {
      moleculeList = categoryResults;
    }

    return (
      <div
        key={record.id}
        className={`border rounded-lg overflow-hidden transition cursor-pointer ${
          activeRecord?.id === record.id
            ? 'border-2 border-primary bg-opacity-5 shadow-md'
            : 'border-line'
        }`}
      >
        {/* 드롭다운 헤더 */}
        <div
          onClick={e => toggleExpand(record.id, e)}
          className="flex justify-between items-center p-4 hover:bg-gray-50 transition"
        >
          <div className="flex-1">
            <h3 className="text-body16 text-text-primary font-medium">{categoryName}</h3>
            <p className="text-body14 text-text-tertiary">
              총 {record.results?.ResultCount || moleculeList.length}개 결과
            </p>
          </div>
          <div className="ml-2">
            <i
              className={`fas ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-400`}
            ></i>
          </div>
        </div>

        {/* 드롭다운 콘텐츠 */}
        {isExpanded && (
          <div className="border-t border-gray-100">
            {moleculeList.map((molecule, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(record)}
                className="p-4 border-b border-gray-50 last:border-b-0 hover:bg-gray-25 transition"
              >
                <div className="w-full h-20 bg-gray-100 flex items-center justify-center rounded mb-2">
                  <span className="text-xs text-gray-400">구조 이미지</span>
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-body14 text-text-primary">{molecule.Smiles}</h4>
                </div>
                <p className="text-body12 text-text-tertiary">
                  {molecule.ID} | {molecule.Name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderMoleculeItem = (record: SearchRecord) => {
    return (
      <div
        key={record.id}
        onClick={() => handleItemClick(record)}
        className={`border rounded-lg p-4 hover:shadow-md transition cursor-pointer ${
          activeRecord?.id === record.id
            ? 'border-2 border-primary bg-opacity-5 shadow-md'
            : 'border-line'
        }`}
      >
        <div className="w-full h-30 bg-gray-100 flex items-center justify-center rounded mb-2.5">
          <span className="text-xs text-gray-400">구조 이미지</span>
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-body16 text-text-primary`}>{record.results!.Smiles}</h3>
        </div>
        <p className="text-body14 text-text-tertiary">
          {record.results!.ID} | {record.results!.Name}
        </p>
      </div>
    );
  };

  return (
    <div className="fixed top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white flex flex-col z-10">
      <div className="flex justify-between items-center p-6 pb-4 flex-shrink-0">
        <h2 className="text-body16 text-text-secondary">25년 10월 3일</h2>
      </div>

      {/* 리스트 - 내부 스크롤 영역 */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full space-y-4 overflow-y-auto overscroll-contain p-6 pt-4">
          {searchHistory.map(record => {
            // 카테고리 검색인지 일반 분자 검색인지 구분
            const isCategory = record.query?.includes('$') ?? false;

            return isCategory ? renderCategoryItem(record) : renderMoleculeItem(record);
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryList;
