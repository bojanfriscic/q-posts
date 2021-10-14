import { FC } from 'react';
import { QueryProvider } from './core/hoc/QueryProvider';

const App: FC = () => {
  return (
    <div className="App">
      <QueryProvider />
    </div>
  );
}

export default App;
