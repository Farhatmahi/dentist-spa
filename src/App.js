import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-[1440px] font-Open-sans">
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
}

export default App;
