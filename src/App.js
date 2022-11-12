import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';

function App() {
  return (
    <div className="max-w-[1440px] font-Open-sans">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
