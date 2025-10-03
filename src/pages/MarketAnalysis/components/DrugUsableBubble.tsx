// // src/components/charts/BubblePack.tsx
// import { useMemo } from 'react';
// import { hierarchy, pack } from 'd3-hierarchy';

// type BubbleDatum = {
//   name: string;
//   value: number;
//   category?: string;
//   color?: string; // 직접 색 넣고 싶으면
// };

// type Props = {
//   data: BubbleDatum[];
//   width?: number;
//   height?: number;
//   padding?: number;
//   // 카테고리 → 색 매핑 (없으면 datum.color → 기본색 순)
//   colors?: Record<string, string>;
// };

// export default function DrugUsableBubble({
//   data = [],
//   width = 900,
//   height = 520,
//   padding = 8,
//   colors,
// }: Props) {
//   const nodes = useMemo(() => {
//     if (!data.length) return [];
//     const root = hierarchy<{ children: BubbleDatum[] }>({ children: data })
//       .sum(d => d.value)
//       .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

//     const layout = pack<typeof root.data>().size([width, height]).padding(padding);

//     return layout(root).leaves(); // 각 버블 노드
//   }, [data, width, height, padding]);

//   // 범례용
//   const categorySet = Array.from(new Set(data.map(d => d.category).filter(Boolean) as string[]));
//   const defaultPalette = [
//     '#5B8FF9',
//     '#5AD8A6',
//     '#5D7092',
//     '#F6BD16',
//     '#6DC8EC',
//     '#9270CA',
//     '#78D3F8',
//     '#FF9D4D',
//     '#A0D911',
//     '#F08BB4',
//   ];

//   const colorOf = (d: BubbleDatum, idx: number) => {
//     if (d.category && colors?.[d.category]) return colors[d.category];
//     if (d.color) return d.color;
//     if (d.category) {
//       const i = categorySet.indexOf(d.category);
//       return defaultPalette[i % defaultPalette.length];
//     }
//     return defaultPalette[idx % defaultPalette.length];
//   };

//   return (
//     <div>
//       <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
//         {/* 버블들 */}
//         {nodes.map((n, i) => {
//           const d = n.data as any as BubbleDatum;
//           const fill = colorOf(d, i);
//           const fontSize = Math.min(18, n.r / 3); // 라벨 크기
//           return (
//             <g key={d.name} transform={`translate(${n.x},${n.y})`}>
//               <circle r={n.r} fill={fill} fillOpacity={0.9} />
//               <text
//                 textAnchor="middle"
//                 dominantBaseline="middle"
//                 fontSize={fontSize}
//                 fill="white"
//                 style={{ pointerEvents: 'none' }}
//               >
//                 <tspan x={0} dy={-2}>
//                   {d.value}
//                 </tspan>
//                 <tspan x={0} dy={fontSize * 0.95}>
//                   {d.name}
//                 </tspan>
//               </text>
//               <title>{`${d.name}\nvalue: ${d.value}${d.category ? `\ncategory: ${d.category}` : ''}`}</title>
//             </g>
//           );
//         })}
//       </svg>

//       {/* 범례 */}
//       {/* {categorySet.length > 0 && (
//         <div className="mt-3 flex flex-wrap gap-3">
//           {categorySet.map((c, i) => (
//             <div key={c} className="flex items-center gap-2 text-sm">
//               <span
//                 className="inline-block w-3.5 h-3.5 rounded-full"
//                 style={{ background: colors?.[c] ?? defaultPalette[i % defaultPalette.length] }}
//               />
//               <span>{c}</span>
//             </div>
//           ))}
//         </div>
//       )} */}
//     </div>
//   );
// }
