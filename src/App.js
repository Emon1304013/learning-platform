import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './routes/routes';

function App() {
  const {theme} = useContext(ThemeProvider)
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
