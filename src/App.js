import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Categories from './useCategories';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <table className='gameTable'>
        <Categories />
      </table>
    </div>
    </QueryClientProvider>
  );
}

export default App;
