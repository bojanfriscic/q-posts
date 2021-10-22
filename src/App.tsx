import { FC } from 'react';
import { StoreProvider } from './core/hoc/StoreProvider';

const App: FC = () => {
  return (
    <div className="App">
      <StoreProvider />
    </div>
  );
}

export default App;
