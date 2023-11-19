import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './providers/StoreProvider/ui/StoreProvider';
import AppRouter from './providers/Router/AppRouter';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <main className="mx-auto max-w-[1440px] p-8 min-h-screen">
          <AppRouter />
        </main>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
