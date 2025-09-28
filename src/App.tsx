import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/routes'; // 네가 만든 routes.tsx 가져오기

function App() {
  return <RouterProvider router={router} />;
}

export default App;
