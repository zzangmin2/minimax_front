import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AiOptimizationLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl px-10 py-12 w-[340px] flex flex-col items-center justify-center text-center"
      >
        {/* 아이콘 */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-10 h-10 text-primary mb-2" strokeWidth={1.5} />
        </motion.div>

        {/* 타이틀 */}
        <h2 className="text-primary text-body14 mb-2 tracking-wide">MINIMAX AI</h2>

        {/* 상태 문구 */}
        <p className="text-text-tertiary text-sm mb-6">최적화 물질 추출 중...</p>

        {/* 로딩 인디케이터 (dots) */}
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map(i => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.9, 1.2, 0.9],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AiOptimizationLoading;
