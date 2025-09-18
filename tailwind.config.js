/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // 폰트 사이즈 · 라인하이트
        display: ['2.5rem', { lineHeight: '3.25rem', fontWeight: '700' }], // 40px / 52px
        headline: ['2rem', { lineHeight: '2.75rem', fontWeight: '600' }], // 32px / 44px
        title: ['1.5rem', { lineHeight: '2.125rem', fontWeight: '600' }], // 24px / 34px
        subtitle: ['1.25rem', { lineHeight: '1.875rem', fontWeight: '500' }], // 20px / 30px
        body16: ['1rem', { lineHeight: '1.625rem', fontWeight: '400' }], // 16px / 26px
        body14: ['0.875rem', { lineHeight: '1.375rem', fontWeight: '400' }], // 14px / 22px
        caption: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '400' }], // 12px / 18px
      },
      colors: {
        primary: '#00C2D7', // Primary (밝은 민트/블루톤)
        secondary: '#B2F2F7', // Secondary (연한 민트)
        accent: '#00B0FF', // Accent (밝은 블루)
        background: '#FFFFFF', // Background
        text: {
          primary: '#000000', // Text-Primary
          secondary: '#4B4B4B', // Text-Secondary
          tertiary: '#8C8C8C', // Text-Tertiary
          inversePrimary: '#FFFFFF', // Text-Inverse-Primary
          inverseSecondary: '#E0E0E0', // Text-Inverse-Secondary
          accentPositive: '#00C896', // Text-Accent-Positive (초록)
          accentWarning: '#FF5722', // Text-Accent-Warning (주황)
        },
        line: '#E5E5E5', // Line
      },
    },
  },
  plugins: [],
}
