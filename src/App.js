import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import CategorySelect from './CategorySelect';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});


function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [button, setButton] = useState("New Game")

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <button
          onClick={(e) => 
            {setShowBoard(current=>!current);
            button === "New Game" ? setButton("Clear") : setButton("New Game")}
          }>{button}</button>
        {showBoard ? (
          <CategorySelect />
        ) : (
          <div className='jeopardy'>JEOPARDY!</div>
        )
        }
      </div>
    </QueryClientProvider>
  );
}

export default App;
